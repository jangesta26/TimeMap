'use client';
import React, { useState } from 'react';
import { Label } from '@/components/ui/label';
import { ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';

const Today = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedPeriod, setSelectedPeriod] = useState('Daily');

  const handlePrevDay = () => {
    setCurrentDate(prevDate => new Date(prevDate.setDate(prevDate.getDate() - 1)));
  };

  const handleNextDay = () => {
    setCurrentDate(prevDate => new Date(prevDate.setDate(prevDate.getDate() + 1)));
  };

  const toggleDropdown = () => {
    setShowDropdown(prev => !prev);
  };

  const handleSelectPeriod = (period:any) => {
    setSelectedPeriod(period);
    setShowDropdown(false); // Close dropdown after selection
  };

  const formattedDate = currentDate.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' });

  return (
    <div className='flex items-center gap-2'>
      <Label className='text-lg'>{formattedDate}</Label>
      <div className='items-center gap-1 hidden sm:flex'>
        <Label className='flex text-lg'>
          <button onClick={handlePrevDay} aria-label="Previous day">
            <ChevronLeft />
          </button>
          <button onClick={handleNextDay} aria-label="Next day">
            <ChevronRight />
          </button>
        </Label>
        <div className='relative'>
          <button onClick={toggleDropdown} className='flex items-center gap-1 text-lg'>
            {selectedPeriod} <ChevronDown className='h-6 w-6' />
          </button>
          {showDropdown && (
            <div className='absolute bg-white border rounded shadow-lg mt-1 '>
              <button onClick={() => handleSelectPeriod('Daily')} className='w-full text-start block px-4 py-2 hover:bg-gray-200'>Daily</button>
              <button onClick={() => handleSelectPeriod('Weekly')} className='w-full text-start block px-4 py-2 hover:bg-gray-200'>Weekly</button>
              <button onClick={() => handleSelectPeriod('Monthly')} className='w-full text-start block px-4 py-2 hover:bg-gray-200'>Monthly</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Today;
