import React from 'react'
 
import {
  Alert,
  AlertDescription,
} from "@/components/ui/alert"
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'

const NotificationAlert = (
    {
        notifyDescription,
        btnLabel,
        label,
        icon: Icon,
    }:{
        notifyDescription:string; 
        btnLabel:string; 
        label:string;
        icon: React.ElementType | null;
    }) => {
  return (
    <Alert className='shadow-lg bg-card/90 rounded-2xl'>
        <div className='flex flex-col lg:flex-row items-center lg:items-center  lg:justify-between px-2'>
            <div className='flex items-center gap-4 mb-2'>
                {
                    Icon && <Icon className="lg:h-8 lg:w-8 h-12 w-12 text-[#f93939]" />
                }
                
                <AlertDescription className='sm:text-lg text-justify text-sm'>
                    {notifyDescription}
                </AlertDescription>
            </div>
            <div className='flex flex-col lg:flex-row items-center md:gap-8 gap-2'>
                <Label className='text-[#4a7dff] text-lg'>{label}</Label>
                <Button 
                className='w-full xl:w-52 flex items-center h-12 rounded-lg text-[#4a7dff] text-lg px-10'
                variant='outline'
                >
                    {btnLabel}
                </Button>
            </div>
        </div>
    </Alert>
  )
}

export default NotificationAlert
