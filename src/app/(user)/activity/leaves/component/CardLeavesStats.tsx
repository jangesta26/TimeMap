import { Card } from '@/components/ui/card'
import React from 'react'

const CardLeavesStats = ({item,description}:{item:string; description:string;}) => {
  return (
    <Card className='w-full p-6 rounded-2xl px-6'>
        <div className='flex items-center gap-4 '>
        <div className={`
        flex items-center justify-center h-20 w-20 p-4 px-6 rounded-lg text-3xl
        ${description === "Available leaves" && 'bg-[#4a7dff]/10 text-[#4a7dff]'}
        ${description === "Previous unused leaves" && 'bg-[#4a7dff]/10 text-[#4a7dff]'}
        ${description === "Pending leaves request" && 'bg-[#ff8800]/10 text-[#ff8800]'}
        ${description === "Reject request" && 'bg-[#f93939]/10 text-[#f93939]'}
        `}>
            {item}
        </div>
        <p className='text-2xl'>{description}</p>
        </div>
    </Card>
  )
}

export default CardLeavesStats
