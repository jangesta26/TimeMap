'use client';
import { Label } from '@/components/ui/label'
import DateRangePicker from '@/src/component/Calendar/DateRangePicker'
import React, { useState } from 'react'
import WorkHours from '../../component/WorkHours'

const AttendanceWorkHours = () => {
    const [startDate, setStartDate] = useState<Date | undefined>(undefined);
    const [endDate, setEndDate] = useState<Date | undefined>(undefined);

  return (
    <div className='w-full flex flex-col'>
        <div className='flex-wrap md:flex md:items-center md:justify-between md:px-1 mb-2'>
        <Label className='text-sm md:text-lg font-light text-muted-foreground'>Work Hours</Label>
        <DateRangePicker
            startDate={startDate}
            endDate={endDate}
            onStartDateChange={date => setStartDate(date ? date : undefined)} 
            onEndDateChange={date => setEndDate(date ? date : undefined)}    
        />
        </div>
        <div className='w-full'>
          <WorkHours startDate={startDate} endDate={endDate} />
        </div>
    </div>
  )
}

export default AttendanceWorkHours
