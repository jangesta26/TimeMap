import { Event } from "../types/event";

export const fetchEventsFromApi = async (): Promise<Event[]> => {
  const response = [
    { date: "2024-10-15", title: "John's Birthday", type: "birthday", description: "A celebration for John's 30th birthday." },
    { date: "2024-10-20", title: "Christina's Work Anniversary", type: "anniversary", description: "Christina celebrates her first year at the company." },
    { date: "2024-10-15", title: "Anne's Work Anniversary", type: "anniversary", description: "Anne celebrates her second year at the company." },
    { date: "2024-10-25", title: "Thanksgiving Day", type: "holiday", description: "A national holiday to give thanks." },
    { date: "2024-10-15", title: "Thanksgiving Day", type: "holiday", description: "A national holiday to give thanks." },
    { date: "2024-10-20", title: "Holiday", type: "holiday", description: "A national holiday." },
    { date: "2024-10-20", title: "Holiday", type: "holiday", description: "A national holiday." },
    { date: "2024-11-30", title: "Bonifacio's Day", type: "holiday", description: "A national holiday." },
    { date: "2024-11-30", title: "Boneza's Birthday", type: "birthday", description: "A celebration for Boneza's 39th birthday." },
    { date: "2024-12-30", title: "Rizal's Day", type: "holiday", description: "A national holiday." },
    { date: "2025-01-01", title: "New Year's Day", type: "holiday", description: "A national holiday." },
    { date: "2025-02-02", title: "New Year's Day", type: "holiday", description: "A national holiday." },
  ];

  // Parse string dates into Date objects
  const adjustedEvents = response.map(event => {
    const eventDate = new Date(event.date);
    return { ...event, date: eventDate };
  });

  return adjustedEvents;
};
