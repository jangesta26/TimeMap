import React from 'react'
import Breadcrums from '@/src/component/Breadcrum/Breadcrums'
import { Separator } from '@/components/ui/separator'

const SettingLayout = ({ children }:{ children: React.ReactNode }) => {
  return (
    <div className='w-full px-6 lg:px-16 md:px-10 mt-10'>
      <Breadcrums 
      title="Setting"
      subItem={[
        {
          id:1,
          tabItem:"Account",
          pathnameUrl:"/settings"
        },
        {
          id:2,
          tabItem:"Security",
          pathnameUrl:"/settings/security"
        },
        {
          id:3,
          tabItem:"Documents",
          pathnameUrl:"/settings/documents"
        },
      ]}
      />
      <Separator  className='mt-4 mb-4'/>
      {children}
    </div>
  )
}

export default SettingLayout
