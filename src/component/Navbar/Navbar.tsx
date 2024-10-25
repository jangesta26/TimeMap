import React from 'react'
import MobileSheet from '../Sheet/MobileSheet'
import Breadcrums from '../Breadcrum/Breadcrums'
import ThemeModeSwitch from '../Switch/ThemeModeSwitch'


const Navbar = () => {
  return (
     <header className="sticky top-0 z-30 flex  items-center justify-between gap-4 border-b bg-white dark:bg-background px-4 sm:static sm:h-auto sm:border-0 sm:px-6">
        <div className='sm:hidden block'>
          <MobileSheet/>
        </div>
          <div className='items-center p-2 sm:hidden block'>
            <ThemeModeSwitch />
        </div>
    </header>
  )
}

export default Navbar
