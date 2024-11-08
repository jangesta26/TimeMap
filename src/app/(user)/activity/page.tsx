import { Card } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import React from 'react'
import CheckboxItems from './component/CheckboxItems'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Badge } from '@/components/ui/badge'
import CardActivity from './component/CardActivity'

const ActivityPage = () => {
  return (
    <div className='w-full flex flex-col xl:flex-row  xl:flex items-start gap-8'>
      <div className='w-full lg:w-[640px]'>
        <Label className='text-2xl font-[600] '>Projects</Label>
        <div className='w-full space-y-2 md:grid md:grid-cols-3 xl:flex xl:flex-col xl:space-y-6 ml-2 mt-8'>
          <CheckboxItems tabItems="All Projects"/>
          <CheckboxItems tabItems="Hr App" />
          <CheckboxItems tabItems="Lead Tracker" />
          <CheckboxItems tabItems="E-Box Projects" />
          <CheckboxItems tabItems="Others" />
        </div>
      </div>
      <div className='w-full grow '>
        <div className='flex items-center justify-between'>
          <Label className='text-2xl font-[600] '>Time Sheet</Label>
          <Button variant="outline" className='w-48 h-12 flex items-center hover:bg-[#4a7dff]/20 hover:text-[#4a7dff] font-semibold text-md bg-[#4a7dff] text-white'>New Task</Button>
        </div>
        <div className='space-y-6'>
        <CardActivity
          time="2:00 pm"
          date="19 Nov 2024"
          topic="Design System Update"
          title={[
            {
              id:1,
              events:"#Meeting"
            }
          ]}
          description='Updated the design system components with the new brand guidelines and added few more components'
        />
        <CardActivity
          time="2:00 pm"
          date="19 Nov 2024"
          topic="Design System Update"
          title={[
            {
              id:1,
              events:"#UI Design"
            },
            {
              id:2,
              events:"#Social media posters"
            },
          ]}
          description='Updated the design system components with the new brand guidelines and added few more components'
        />
        <CardActivity
          time="2:00 pm"
          date="19 Nov 2024"
          topic="Design System Update"
          title={[
            {
              id:1,
              events:"#UI Design"
            },
            {
              id:2,
              events:"#Social media posters"
            },
          ]}
          description='Updated the design system components with the new brand guidelines and added few more components'
        />
        </div>
      </div>
    </div>
  )
}

export default ActivityPage
