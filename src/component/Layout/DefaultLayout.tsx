import React from 'react'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'
import Footer from '../Footer/Footer'

const DefaultLayout = ({children}:{children: React.ReactNode}) => {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
        <aside className="fixed inset-y-0 left-0 z-10 hidden w-16 flex-col border-r bg-background sm:flex shadow-lg">
         <Sidebar />
        </aside>
        <div className="sm:pl-16 shadow">
         <Navbar />
        </div>
        {children}
        <div className="sm:pl-16 mt-10">
          <Footer />
        </div>
    </div>
  )
}

export default DefaultLayout
