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
import BioInOut from '@/src/component/DropdownMenu/BioInOut'

const DashboardPage = () => {
  const [selectedFilter, setSelectedFilter] = useState<'today' | 'week' | 'month' | 'year'>('today');
  const currentDate = new Date().toLocaleDateString();
  return (
    <section className='flex flex-col px-6 lg:px-16 md:px-10 w-full'>
      <div className='mt-10'>
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
      <div className="xl:grid xl:grid-cols-2 items-center space-y-8 xl:space-y-0 sm:gap-10">
        <div className='w-full items-start space-y-2 mx-auto'>
          <Label className='font-semibold ml-1 py-1.5'>Today is {currentDate}</Label>
          <TodayIsCard />
        </div>
        <div className='w-full items-start space-y-2 mx-auto '>
          <div className='ml-1 flex items-center justify-between'>
            <Label className='font-semibold'>My Stats</Label>
            <BioInOut />
          </div>
          <MyStatsCard />
        </div>
        <div className='w-full items-center space-y-2 mx-auto'>
          <div className='ml-1 flex items-center justify-between  '>
            <Label className='font-semibold'>
              Work Hours
            </Label>
            <DateFilterDropDown selectedFilter={selectedFilter} onFilterChange={setSelectedFilter} />
          </div>
            <WorkHoursCard filter={selectedFilter} />
        </div>
        <div className='w-full items-start space-y-2 mx-auto'>
          <div className='ml-1 flex items-center justify-between  '>
            <Label className='font-semibold'>My Stuff </Label>
            <MyRequest />
          </div>
          <MyStuffCard />
        </div>
      </div>
    </section>
  )
}

export default DashboardPage
