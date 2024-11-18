import { useState, useEffect } from 'react';
import { Event } from '../types/event';
import { fetchEventsFromApi } from '../test-api/events';

const useCalendar = () => {
  const [eventsInMonth, setEventsInMonth] = useState<Event[]>([]); // Store events for the current month
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date()); // Current month being displayed
  const [dateFilter, setDateFilter] = useState<Date | null>(null); // Date filter to filter events by a specific date

  useEffect(() => {
    const fetchEvents = async () => {
      const events = await fetchEventsFromApi();

      // Filter events to only include those in the current month and year
      const filteredEvents = events.filter(event => {
        const eventMonth = event.date.getMonth(); // Month of the event
        const eventYear = event.date.getFullYear(); // Year of the event
        const currentMonthIndex = currentMonth.getMonth(); // Month of the current calendar view
        const currentYear = currentMonth.getFullYear(); // Year of the current calendar view

        // Only include events that are in the same month and year as the current month
        return eventMonth === currentMonthIndex && eventYear === currentYear;
      });

      // If there's a date filter, further filter events by the specific date
      if (dateFilter) {
        const filteredByDate = filteredEvents.filter(event => {
          // Compare year, month, and day
          return (
            event.date.getDate() === dateFilter.getDate() &&
            event.date.getMonth() === dateFilter.getMonth() &&
            event.date.getFullYear() === dateFilter.getFullYear()
          );
        });
        setEventsInMonth(filteredByDate);
      } else {
        setEventsInMonth(filteredEvents);
      }
    };

    fetchEvents();
  }, [currentMonth, dateFilter]); // Re-fetch events whenever the current month or date filter changes

  // Get the first day of the current month
  const getFirstDayOfMonth = (date: Date) => new Date(date.getFullYear(), date.getMonth(), 1).getDay();

  // Get the number of days in the current month
  const getDaysInMonth = (date: Date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

  // Go to the previous month
  const handlePrevMonth = () => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));

  // Go to the next month
  const handleNextMonth = () => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));

  // Set the specific date to filter events (used when a day is clicked in the calendar)
  const setSpecificDateFilter = (date: Date) => {
    setDateFilter(date); // This will trigger the filtering based on the selected date
  };

  // Render the calendar grid (including previous/next month's days as placeholders)
  const renderCalendar = () => {
    const firstDay = getFirstDayOfMonth(currentMonth); // Get the first day of the current month
    const totalDays = getDaysInMonth(currentMonth); // Get the total number of days in the current month
    const prevMonthDays = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 0).getDate(); // Days in the previous month
    const prevMonthVisibleDays = firstDay === 0 ? 6 : firstDay - 1; // Calculate how many days from the previous month should be visible
    const calendarDays: any[] = []; // Array to hold the grid of calendar days

    // Add previous month's days to fill the first week
    for (let i = prevMonthDays - prevMonthVisibleDays; i <= prevMonthDays; i++) {
      calendarDays.push({ day: i, isPrevMonth: true });
    }

    // Add current month's days
    for (let day = 1; day <= totalDays; day++) {
      calendarDays.push({ day, isPrevMonth: false, isNextMonth: false });
    }

    // Add next month's days to fill the last week
    const remainingCells = 42 - calendarDays.length;
    for (let i = 1; i <= remainingCells; i++) {
      calendarDays.push({ day: i, isNextMonth: true });
    }

    return calendarDays;
  };

  return {
    eventsInMonth,
    currentMonth,
    handlePrevMonth,
    handleNextMonth,
    renderCalendar,
    setSpecificDateFilter,
  };
};

export default useCalendar;
