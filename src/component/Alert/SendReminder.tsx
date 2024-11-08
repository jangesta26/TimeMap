import React from 'react'
import { CircleAlert } from "lucide-react"
 
import {
  Alert,
  AlertDescription,
} from "@/components/ui/alert"
import { Button } from '@/components/ui/button'

const SendReminder = ({notifyDescription,btnLabel}:{notifyDescription:string; btnLabel:string}) => {
  return (
    <Alert className='shadow-lg bg-card/90 rounded-2xl '>
        <div className='sm:flex sm:gap-4 flex-wrap items-center sm:items-center  sm:justify-between px-2'>
            <div className='flex items-center gap-4 mb-2'>
                <CircleAlert className="lg:h-8 lg:w-8 h-12 w-12 text-[#4a7dff]" />
                <AlertDescription className='sm:text-lg text-justify text-sm'>
                    {notifyDescription}
                </AlertDescription>
            </div>
            <Button 
            className='w-full xl:w-52 flex items-center h-12 rounded-lg text-[#4a7dff] text-lg px-10'
            variant='outline'
            >
                {btnLabel}
            </Button>
        </div>
    </Alert>
  )
}

export default SendReminder
