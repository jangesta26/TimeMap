'use client';
import { CalendarDays } from 'lucide-react';
import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface DateRangePickerProps {
  startDate: Date | undefined;
  endDate: Date | undefined;
  onStartDateChange: (date: Date | null) => void; 
  onEndDateChange: (date: Date | null) => void;   
}

const DateRangePicker: React.FC<DateRangePickerProps> = ({
  startDate,
  endDate,
  onStartDateChange,
  onEndDateChange,
}) => {
  return (
    <div className='flex items-center justify-center text-sm'>
      <div className='flex items-center'>
        <CalendarDays className='z-10 transform translate-x-6 border-r pr-0.5 h-4 w-4 text-muted-foreground' />
        <DatePicker
          selected={startDate || null}
          onChange={onStartDateChange}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          className='border rounded p-2 pl-7 w-36 md:w-full text-muted-foreground' 
          dateFormat="MMMM d, yyyy"
          placeholderText="Start Date"
        />
      </div>
      <div className='flex items-center'>
        <CalendarDays className='z-10 transform translate-x-6 border-r pr-0.5 h-4 w-4 text-muted-foreground' />
        <DatePicker
          selected={endDate || null}
          onChange={onEndDateChange}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          className='border rounded p-2 pl-7 w-36 md:w-full text-muted-foreground'
          dateFormat="MMMM d, yyyy"
          placeholderText="End Date"
        />
      </div>
    </div>
  );
};

export default DateRangePicker;
