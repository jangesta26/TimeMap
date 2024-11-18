import { Card } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import Breadcrums from '@/src/component/Breadcrum/Breadcrums'
import Image from 'next/image'
import React from 'react'

const AnnouncementPage = () => {
  return (
  <div className='flex flex-col px-6 lg:px-16 md:px-10 w-full'>
    <div className='mt-10'>
        <Breadcrums 
        title="Announcement"
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
    <Card className='shadow-xl rounded-2xl bg-card/90'>
      <div className="px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:max-w-6xl max-w-2xl mx-auto">
          <div className="text-left">
            <h2 className="text-gray-800 text-3xl font-bold mb-6">Discover the Future of Innovation</h2>
            <p className="mb-4 text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquam, ipsum vel iaculis bibendum, justo turpis ullamcorper mauris, non aliquam nisi purus vel nisl. Integer efficitur turpis in bibendum tincidunt.</p>
            <p className="mb-4 text-sm text-gray-500">Nulla facilisi. Vestibulum fringilla leo et purus consectetur, vel tincidunt dolor rhoncus. In hac habitasse platea dictumst. Fusce vel sodales elit. Suspendisse potenti. Sed eget consequat nisi.</p>
            <p className="text-sm text-gray-500">consectetur adipiscing elit. Duis accumsan, nunc et tempus blandit, metus mi consectetur felis turpis vitae ligula. nunc et tempus blandit, metus mi consectetur felis turpis vitae ligula.</p>
            <p className="text-sm text-gray-500">consectetur adipiscing elit. Duis accumsan, nunc et tempus blandit, metus mi consectetur felis turpis vitae ligula. nunc et tempus blandit, metus mi consectetur felis turpis vitae ligula.</p>
          </div>
          <div>
            <Image 
            src="https://readymadeui.com/management-img.webp" 
            width={300}
            height={300}
            fetchPriority="high"
            decoding="async"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 150px, 200px"
            alt="Placeholder Image" 
            className="rounded-lg object-contain w-full h-full" 
            />
          </div>
        </div>
      </div>
    </Card>
  </div>
  )
}

export default AnnouncementPage
