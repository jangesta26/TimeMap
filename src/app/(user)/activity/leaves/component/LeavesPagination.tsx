import { ChevronLeft, ChevronRight } from 'lucide-react'
import React from 'react'

const LeavesPagination = () => {
  return (
    <ul className="flex space-x-2 items-center justify-center">
    <li className="flex items-center justify-center shrink-0 h-8 w-8 lg:w-10 lg:h-10 rounded-lg hover:bg-[#4a7dff]/10">
        <ChevronLeft className='h-4 w-4 lg:h-9 lg:w-9 text-[#656b7b]'/>
    </li>
    <li className="flex items-center justify-center shrink-0 bg-[#4a7dff]/10 cursor-pointer text-base text-[#656b7b] h-8 w-8 lg:w-10 lg:h-10 rounded-lg">
        1
    </li>
    <li className="flex items-center justify-center shrink-0 hover:bg-[#4a7dff]/10 cursor-pointer text-base text-[#656b7b] h-8 w-8 lg:w-10 lg:h-10 rounded-lg">
        2
    </li>
    <li className="flex items-center justify-center shrink-0 hover:bg-[#4a7dff]/10 cursor-pointer text-base text-[#656b7b] h-8 w-8 lg:w-10 lg:h-10  rounded-lg">
        3
    </li>
    <li className="flex items-center justify-center shrink-0 hover:bg-[#4a7dff]/10 cursor-pointer text-base text-[#656b7b] h-8 w-8 lg:w-10 lg:h-10  rounded-lg">
        4
    </li>
    <li className="flex items-center justify-center shrink-0 hover:bg-[#4a7dff]/10 cursor-pointer h-4 w-4 lg:w-10 lg:h-10 rounded-lg">
        <ChevronRight className='h-4 w-4 lg:h-9 lg:w-9 text-[#656b7b]' />
    </li>
    </ul>
  )
}

export default LeavesPagination
