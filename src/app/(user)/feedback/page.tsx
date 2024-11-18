import { Separator } from '@/components/ui/separator'
import ClientTestimonials from '@/src/Section/ClientTestimonials'
import Faq from '@/src/Section/Faq'
import Feature from '@/src/Section/Feature'
import Breadcrums from '@/src/component/Breadcrum/Breadcrums'
import React from 'react'

const FeedbackPage = () => {
  return (
    <div className='flex flex-col px-6 lg:px-16 md:px-10 w-full'>
      <div className='mt-10'>
        <Breadcrums 
        title="Feedback"
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
        {/* FAQ */}
        <Faq />
        {/* Features */}
        <ClientTestimonials />
    </div>
  )
}

export default FeedbackPage
