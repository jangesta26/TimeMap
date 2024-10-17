import React from 'react'
import { Separator } from '@/components/ui/separator'
import Breadcrums from '@/src/component/Breadcrum/Breadcrums'

const TeamPage = () => {
  return (
    <section className='flex flex-col'>
      <div className='px-8 sm:px-32 mt-10'>
        <Breadcrums 
        title="Team Members"
        subItem={[
          {
            id:1,
            tabItem:"Dashboard",
            pathnameUrl:"/dashboard"
          },
          {
            id:2,
            tabItem:"Members",
            pathnameUrl:"/team"
          },
        ]}
        />
        <Separator  className='mt-4 mb-4'/>
      </div>
    </section>
  )
}

export default TeamPage
