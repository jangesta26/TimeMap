'use client'
import React, { useState } from 'react'
import MyStatsCard from '@/src/component/Card/MyStatsCard'
import WorkHoursCard from '@/src/component/Card/WorkHoursCard'
import DateFilterDropDown from '@/src/component/DropdownMenu/DateFilterDropDown'
import { Label } from '@radix-ui/react-dropdown-menu'
import { Clock } from 'lucide-react'
import TodayIsCard from '@/src/component/Card/TodayIsCard'

const DashboardPage = () => {
  const [selectedFilter, setSelectedFilter] = useState<'today' | 'week' | 'month' | 'year'>('today');
  const currentDate = new Date().toLocaleDateString();
  return (
    <main className="xl:grid xl:grid-cols-2 items-start gap-4 sm:px-6 sm:py-0 sm:pl-24">
      <div className='w-full items-start p-6 space-y-2 mx-auto'>
        <Label className='font-semibold ml-1'>Today is {currentDate}</Label>
        <TodayIsCard />
      </div>
      <div className='w-full items-start p-6 space-y-2 mx-auto '>
        <Label className='font-semibold ml-1'>My Stats</Label>
        <MyStatsCard />
      </div>
      <div className='w-full items-center p-6 space-y-2 mx-auto'>
        <div className='ml-1 flex items-center justify-between  '>
          <Label className='flex gap-1 items-center font-semibold'>
            <Clock className='h-[18px]'/>
            Work Hours
          </Label>
          <DateFilterDropDown selectedFilter={selectedFilter} onFilterChange={setSelectedFilter} />
        </div>
          <WorkHoursCard filter={selectedFilter} />
      </div>
      <div className='w-full items-start p-6 space-y-2 mx-auto'>
        <Label className='font-semibold ml-1'>My Stuff </Label>
        <MyStatsCard />
      </div>
    </main>
  )
}

export default DashboardPage
