import React from 'react'
import { Separator } from '@/components/ui/separator'
import Breadcrums from '@/src/component/Breadcrum/Breadcrums'

const layout = ({ children }:{ children: React.ReactNode }) => {
  return (
    <div className='w-full px-6 lg:px-16 md:px-10 mt-10'>
      <Breadcrums 
      title="Team"
      subItem={[
        {
          id:1,
          tabItem:"Stats",
          pathnameUrl:"/team"
        },
        {
          id:2,
          tabItem:"Members",
          pathnameUrl:"/team/members"
        },
      ]}
      />
      <Separator  className='mt-4 mb-4'/>
      {children}
    </div>
  )
}

export default layout
