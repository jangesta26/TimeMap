import React from 'react'
import { ChevronDown, Coffee, CornerRightDown, CornerUpRight, Hourglass } from 'lucide-react';
import Today from '../../component/Today';
import { Label } from '@/components/ui/label';

const AttendanceTodayIs = () => {
    const currentDate = new Date().toLocaleDateString();
  return (
    <div className='w-full flex flex-col'>
        <div className='flex items-center justify-between px-2 p-1 mb-2'>
        <Label className='text-sm md:text-lg font-light text-muted-foreground'>Today {currentDate}</Label>
        <Label className='text-sm md:text-lg flex items-center gap-1.5 text-muted-foreground'>Daywise <ChevronDown className='3.5'/></Label>
        </div>
        <div className='w-full flex-wrap space-y-4 md:space-y-0 md:grid md:grid-cols-2 gap-10'>
        <Today time="9:16 AM" icon={CornerRightDown} averageDescription='Team&apos;s Average In Time' />
        <Today time="45 m" icon={Coffee} averageDescription='Team&apos;s Average Break Time' />
        <Today time="4 h 23 m" icon={Hourglass} averageDescription='Team&apos;s Average Work Time' />
        <Today time="-" icon={CornerUpRight} averageDescription='Team&apos;s Average Out Time' />
        </div>
    </div>
  )
}

export default AttendanceTodayIs
