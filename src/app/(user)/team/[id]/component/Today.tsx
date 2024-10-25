import React from 'react'
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

const Today = ({ time, icon: Icon, averageDescription }:{ time: string ; icon: React.ElementType; averageDescription: string }) => {
  return (
    <Card x-chunk="dashboard-05-chunk-1" className='rounded-2xl shadow-lg py-4 bg-card/90'>
        <CardHeader className="pb-2 px-6">
            <div className='flex items-center justify-between gap-'>
            <CardTitle className="text-2xl">{time}</CardTitle>
            <span className='flex items-center justify-center h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-[#4a7dff]/10'>
                <Icon className='h-8 sm:h-10 text-[#4a7dff]'/>
            </span>
            </div>
        </CardHeader>
        <CardContent className='px-6 '>
            <div className="text-sm font-light text-muted-foreground">
                {averageDescription}
            </div>
        </CardContent>
    </Card>
  )
}

export default Today
