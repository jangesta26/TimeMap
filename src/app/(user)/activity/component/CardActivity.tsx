import React from 'react'
import { Card } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Badge } from '@/components/ui/badge'

const CardActivity = (
    {
        time,
        date,
        topic,
        title,
        description
    }:{
        time:string;
        date:string;
        topic:string
        title:any[];
        description:string;
    }

) => {
  return (
    <Card className='mt-4 p-2 px-6 py-4 rounded-2xl shadow-xl'>
    <div className='w-full flex-1 space-y-4 lg:space-y-0 lg:flex lg:items-center lg:justify-between'>
      <div className='grid grid-cols-2 gap-4 lg:flex lg:items-center lg:gap-x-14'>
        <Label className='text-sm lg:text-lg text-slate-500'>{time}</Label>
        <Label className='text-sm lg:text-lg text-slate-500'>{date}</Label>
        <Label className='text-sm lg:text-lg text-slate-500'>{topic}</Label>
        <Label className='text-sm lg:text-lg text-slate-500'>Others</Label>
        
      </div>
      <Button variant="outline" className='w-32 flex items-center bg-[#4a7dff]/10 text-[#4a7dff] font-semibold text-md hover:bg-[#4a7dff]/80 hover:text-white'>Edit</Button>
    </div>
    <Separator  className='mt-4 border-[1px]'/>
    <div  className='flex flex-col md:flex-row md:gap-2'>
    {
        title.map((item)=>(
          
            <Badge 
            key={item.id}
            variant="outline" 
            className={`
            mt-4 h-8 w-auto px-4 text-[16px] font-light 
            border-0
            ${item.events === '#Meeting' && 'bg-[#4a7dff]/10 text-[#4a7dff] '}
            ${item.events === '#UI Design' && 'bg-[#ff8800]/10 text-[#ff8800]'}
            ${item.events === '#Social media posters' && 'bg-[#51ce2c]/10 text-[#51ce2c]'}
            `}>
                {item.events}
            </Badge>
            
        ))
    }
    </div>
    <p className='mt-4 text-slate-500 text-justify'>
      {description}
    </p>
  </Card>
  )
}

export default CardActivity
