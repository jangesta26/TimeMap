import React from 'react'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'

const DefaultLayout = ({children}:{children: React.ReactNode}) => {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
        <aside className="fixed inset-y-0 left-0 z-10 hidden w-16 flex-col border-r bg-background sm:flex">
         <Sidebar />
        </aside>
        <div className="flex flex-col sm:gap-4 sm:pl-16">
         <Navbar />
        </div>
        {children}
    </div>
  )
}

export default DefaultLayout
