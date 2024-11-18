import { Badge } from '@/components/ui/badge'
import React from 'react'

const CalendarPopover = ({ eventsForDay }: { eventsForDay: any[] }) => {
  return (
    <>
      {eventsForDay.map((event, index) => (
        <Badge
          key={index}
          variant="outline"
          className={`event text-center z-50 text-sm font-semibold text-white mt-2
            ${event.type === 'birthday' && 'bg-[#4a7dff]'}
            ${event.type === 'anniversary' && 'bg-[#ff8800]'}
            ${event.type === 'holiday' && 'bg-[#656b7b]'}
          `}
          title={event.description}
        >
          <span>{event.title}</span>
        </Badge>
      ))}
    </>
  )
}

export default CalendarPopover;
