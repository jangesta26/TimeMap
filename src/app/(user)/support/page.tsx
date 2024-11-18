import { Separator } from '@/components/ui/separator'
import Feature from '@/src/Section/Feature'
import TeamSupport from '@/src/Section/TeamSupport'
import Breadcrums from '@/src/component/Breadcrum/Breadcrums'
import React from 'react'

const SupportPage = () => {
  return (
    <div className='flex flex-col px-6 lg:px-16 md:px-10 w-full'>
      <div className='mt-10'>
        <Breadcrums 
        title="Support"
        subItem={[
          {
            id:1,
            tabItem:"",
            pathnameUrl:""
          },
        ]}
        />
        <Separator  className='mt-4 mb-4'/>
        <TeamSupport />
        <Feature />
      </div>
    </div>
  )
}

export default SupportPage