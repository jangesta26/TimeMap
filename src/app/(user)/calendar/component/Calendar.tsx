'use client'
import { Badge } from "@/components/ui/badge";
import CalendarPopover from "./CalendarPopover";
import CalendarHeader from "./CalendarHeader";
import useCalendar from "@/src/hooks/useCalendar";
import usePopover from "@/src/hooks/usePopover";
import { useState } from "react";
import CalendarModalItem from "./CalendarModalItem";
import { Label } from "@/components/ui/label";

const Calendar = () => {
  const { eventsInMonth, currentMonth, handlePrevMonth, handleNextMonth, renderCalendar } = useCalendar();
  const { popoverEventDay, togglePopover, popoverRef } = usePopover();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedDay, setSelectedDay] = useState<number | null>(null);  // To track the day for modal

  const handleOpenModal = (day: number) => {
    setSelectedDay(day);  // Set the selected day to open the modal for that day
    setModalOpen(true);
  }

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedDay(null);  // Reset the selected day when closing the modal
  }

  return (
    <div className="max-w-8xl">
      {/* Calendar Navigation */}
      <div className="w-full flex-wrap sm:flex sm:justify-between sm:items-center sm:space-y-0 items-center justify-center py-2 space-y-4">
        <Label className="flex text-xl justify-center font-semibold">
          {currentMonth.toLocaleString("default", { month: "long" })} {currentMonth.getFullYear()}
        </Label>
        <div className="flex items-center gap-2">
          <button onClick={handlePrevMonth} className="w-full px-4 py-2 bg-primary text-white rounded-md">Prev</button>
          <button onClick={handleNextMonth} className="w-full px-4 py-2 bg-primary text-white rounded-md">Next</button>
        </div>
      </div>

      {/* Calendar Table */}
      <div className="w-full max-w-full rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <table className="w-full">
          <CalendarHeader />
          <tbody>
            <tr className="grid grid-cols-7">
              {renderCalendar().map((item, index) => {
                const today = new Date();
                const isCurrentDay = item.day === today.getDate() && currentMonth.getMonth() === today.getMonth() && currentMonth.getFullYear() === today.getFullYear();
                const isPrevMonth = item.isPrevMonth;
                const isNextMonth = item.isNextMonth;

                // Only show events for the current month
                const eventsForDay = !isPrevMonth && !isNextMonth
                  ? eventsInMonth.filter(
                      (event) =>
                        event.date.getDate() === item.day &&
                        event.date.getMonth() === currentMonth.getMonth() &&
                        event.date.getFullYear() === currentMonth.getFullYear()
                    )
                  : [];

                return (
                  <td
                    key={index}
                    className={`relative h-32 cursor-pointer border p-2 text-right transition duration-500 hover:bg-gray ${isPrevMonth || isNextMonth ? "opacity-50 text-gray-400" : ""}`}
                  >
                    {item.day ? (
                      <>
                        {/* Circle around current day */}
                        {isCurrentDay && (
                          <div className="flex items-center justify-end">
                            <div className="w-6 h-6 border-2 border-[#4a7dff] rounded-full flex justify-center items-center ">
                              <span className="text-sm text-[#4a7dff]">{item.day}</span>
                            </div>
                          </div>
                        )}

                        {/* Show the day number */}
                        {!isCurrentDay && (
                          <span className={`font-medium text-black ${isPrevMonth || isNextMonth ? "text-gray-400" : ""}`}>
                            {item.day}
                          </span>
                        )}

                        {/* Render events for the day */}
                        {eventsForDay.length > 0 && (
                          <div className="flex flex-col mt-2">
                            <div className="lg:block hidden">
                              <div className="w-full flex flex-col items-center">
                                <Badge
                                  variant="outline"
                                  className={`event z-50 flex items-center justify-center text-sm font-semibold text-white
                                    ${eventsForDay[0].type === 'birthday' && 'bg-[#4a7dff]'}
                                    ${eventsForDay[0].type === 'anniversary' && 'bg-[#ff8800]'}
                                    ${eventsForDay[0].type === 'holiday' && 'bg-[#656b7b]'}
                                  `}
                                  title={`${eventsForDay[0].description}`}
                                >
                                  <span className="text-center">{eventsForDay[0].title}</span>
                                </Badge>
                                <button onClick={(e) => {
                                  e.stopPropagation(); // Prevent event bubbling
                                  togglePopover(item.day);
                                }} className="text-xs text-blue-500 hover:underline mt-2">
                                  {popoverEventDay === item.day ? "Less" : "More"}
                                </button>
                              </div>
                            </div>

                            {eventsForDay.length > 0 && (
                              <button 
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleOpenModal(item.day);  // Open the modal for the clicked day
                                }}
                                className="text-xs text-blue-500 hover:underline mt-2 block lg:hidden"
                              >
                                {popoverEventDay === item.day ? "Less" : "More"}
                              </button>
                            )}

                            {/* Popover */}
                            {popoverEventDay === item.day && (
                              <div className="relative z-50 ">
                                <div className="w-full  flex flex-col items-center justify-center max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl rounded p-4 bg-white shadow-[0_-4px_24px_-8px_rgba(0,0,0,0.2)] absolute top-2 right-0 sm:left-0 sm:right-auto before:w-4 before:h-4 before:rotate-45 before:bg-white before:absolute before:-top-1.5 before:left-0 before:right-0 before:mx-auto">
                                  <Label className="w-full flex border-b pb-1.5">Events</Label>
                                  <CalendarPopover eventsForDay={eventsForDay} />
                                </div>
                              </div>
                            )}
                          </div>
                        )}
                      </>
                    ) : (
                      <span className="invisible">0</span>
                    )}
                  </td>
                );
              })}
            </tr>
          </tbody>
        </table>
      </div>

      {/* Modal for showing events */}
      {modalOpen && selectedDay && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 z-50 px-6">
          <div className="bg-white p-4 rounded-lg w-full max-w-lg">
            <h3 className="text-lg font-semibold">
              Event for {currentMonth.toLocaleString("default", { month: "long" })} {selectedDay}, {currentMonth.getFullYear()}
            </h3>
            <div className="flex flex-col">
              {eventsInMonth.filter(event => event.date.getDate() === selectedDay).map((event, index) => (
                <div key={index}>
                  <CalendarModalItem 
                    type={event.type}
                    description={event.description}
                    title={event.title}
                  />
                </div>
              ))}
            </div>
            <button
              onClick={handleCloseModal}
              className="mt-4 text-sm text-red-500 hover:underline"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Calendar;
