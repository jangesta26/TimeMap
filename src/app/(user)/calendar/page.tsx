import React from 'react'
import Breadcrums from '@/src/component/Breadcrum/Breadcrums'
import { Separator } from '@/components/ui/separator'
import { Label } from '@/components/ui/label'
import { Cake, CalendarX, ChevronsLeftRight } from 'lucide-react'
import { Card } from '@/components/ui/card'
import Calendar from './component/Calendar'
import CalendarPopover from './component/CalendarPopover'
const CalendarPage = () => {
  return (
    <div className='w-full px-6 lg:px-16 md:px-10 mt-10'>
      <div className='flex flex-col items-center md:flex-row'>
      <Breadcrums 
      title="Calendar"
      subItem={[
      ]}
      />
      <div className='flex items-center text-slate-500 gap-4'>
        <Label className='text-md font-light '>November 2024</Label>
        <ChevronsLeftRight />
      </div>
      </div>
      <Separator  className='mt-4 mb-4'/>

      <Card className="w-full rounded-2xl shadow-xl p-6">
        <div className='flex flex-col items-start justify-center gap-6 xl:flex-row'>
          <div className='flex-1'>
            <Calendar />
          </div>
          <div className='xl:flex-none xl:w-72 mt-14 space-y-4'>
            <Label className='text-lg font-bold tracking-widest'>Events</Label>
            <div className="grid grid-cols-1 divide-y space-y-3">
              <div className='flex items-center gap-3 pt-4'>
                <CalendarX className='h-14 w-14' />
                <div>
                  <span>Bonifacio's Day</span>
                  <p></p>
                  <p>30 Nov 2024</p>
                </div>
              </div>
              <div className='flex items-center gap-3 pt-4'>
                <Cake className='h-14 w-14' />
                <div>
                  <span>Boneza's Birthday</span>
                  <p>30 Nov 2024</p>
                </div>
              </div>
          </div>
          </div>
        </div>
      </Card>

    </div>
  )
}

export default CalendarPage
