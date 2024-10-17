'use client'
import React, { useState } from 'react'
import MyStatsCard from '@/src/component/Card/MyStatsCard'
import WorkHoursCard from '@/src/component/Card/WorkHoursCard'
import DateFilterDropDown from '@/src/component/DropdownMenu/DateFilterDropDown'
import { Label } from '@radix-ui/react-dropdown-menu'
import TodayIsCard from '@/src/component/Card/TodayIsCard'
import MyStuffCard from '@/src/component/Card/MyStuffCard'
import MyRequest from '@/src/component/DropdownMenu/MyRequest'
import { Separator } from '@/components/ui/separator'
import Breadcrums from '@/src/component/Breadcrum/Breadcrums'

const DashboardPage = () => {
  const [selectedFilter, setSelectedFilter] = useState<'today' | 'week' | 'month' | 'year'>('today');
  const currentDate = new Date().toLocaleDateString();
  return (
    <section className='flex flex-col'>
      <div className='px-8 sm:px-32 mt-10'>
        <Breadcrums 
        title="My Dashboard"
        subItem={[
          {
            id:1,
            tabItem:"",
            pathnameUrl:""
          },
        ]}
        />
        <Separator  className='mt-4 mb-4'/>
      </div>
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
            <Label className='font-semibold'>
              Work Hours
            </Label>
            <DateFilterDropDown selectedFilter={selectedFilter} onFilterChange={setSelectedFilter} />
          </div>
            <WorkHoursCard filter={selectedFilter} />
        </div>
        <div className='w-full items-start p-6 space-y-2 mx-auto'>
          <div className='ml-1 flex items-center justify-between  '>
            <Label className='font-semibold'>My Stuff </Label>
            <MyRequest />
          </div>
          <MyStuffCard />
        </div>
      </main>
    </section>
  )
}

export default DashboardPage
