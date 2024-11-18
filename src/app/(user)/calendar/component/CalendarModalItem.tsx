import { Badge } from '@/components/ui/badge';
import React from 'react'

const CalendarModalItem = ({ type, description, title }: { type: string; description:string; title:string}) => {
  return (
      <Badge
        variant="outline"
        className={`event p-2 text-sm font-semibold text-white mt-2
          ${type === 'birthday' && 'bg-[#4a7dff]'}
          ${type === 'anniversary' && 'bg-[#ff8800]'}
          ${type === 'holiday' && 'bg-[#656b7b]'}
        `}
        title={description}
      >
        <span>{title}</span>
      </Badge>  
  )
}

export default CalendarModalItem
