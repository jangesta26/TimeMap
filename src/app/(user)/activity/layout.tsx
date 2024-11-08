import React from 'react'
import Breadcrums from '@/src/component/Breadcrum/Breadcrums'
import { Separator } from '@/components/ui/separator'
const MyActivityLayout = ({ children }:{ children: React.ReactNode }) => {
  return (
    <div className='w-full px-6 lg:px-16 md:px-10 mt-10'>
      <Breadcrums 
      title="My Activity"
      subItem={[
        {
          id:1,
          tabItem:"Work Log/Timesheet",
          pathnameUrl:"/activity"
        },
        {
          id:2,
          tabItem:"Leaves",
          pathnameUrl:"/activity/leaves"
        },
        {
          id:3,
          tabItem:"Time Off",
          pathnameUrl:"/activity/timeoff"
        },
      ]}
      />
      <Separator  className='mt-4 mb-4'/>
      {children}
    </div>
  )
}

export default MyActivityLayout
