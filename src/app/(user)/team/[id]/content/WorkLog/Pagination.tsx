import { ChevronLeft, ChevronRight } from 'lucide-react'
import React from 'react'

const Pagination = () => {
  return (
    <ul className="flex space-x-3 items-center justify-center">
    <li className="flex items-center justify-center shrink-0 w-10 h-10 rounded-lg hover:bg-[#4a7dff]/10">
        <ChevronLeft className='h-9 w-9 text-[#656b7b]'/>
    </li>
    <li className="flex items-center justify-center shrink-0 bg-[#4a7dff]/10 cursor-pointer text-base text-[#656b7b] w-10 h-10 rounded-lg">
        1
    </li>
    <li className="flex items-center justify-center shrink-0 hover:bg-[#4a7dff]/10 cursor-pointer text-base text-[#656b7b] w-10 h-10 rounded-lg">
        2
    </li>
    <li className="flex items-center justify-center shrink-0 hover:bg-[#4a7dff]/10 cursor-pointer text-base text-[#656b7b] w-10 h-10 rounded-lg">
        3
    </li>
    <li className="flex items-center justify-center shrink-0 hover:bg-[#4a7dff]/10 cursor-pointer text-base text-[#656b7b] w-10 h-10 rounded-lg">
        4
    </li>
    <li className="flex items-center justify-center shrink-0 hover:bg-[#4a7dff]/10 cursor-pointer w-10 h-10 rounded-lg">
        <ChevronRight className='h-9 w-9 text-[#656b7b]' />
    </li>
    </ul>
  )
}

export default Pagination
