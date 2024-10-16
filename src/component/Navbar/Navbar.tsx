import React from 'react'
import MobileSheet from '../Sheet/MobileSheet'
import Breadcrums from '../Breadcrum/Breadcrums'
import ProfileDropdownMenu from '../DropdownMenu/ProfileDropdownMenu'
import MyRequest from '../DropdownMenu/MyRequest'


const Navbar = () => {
  return (
     <header className="sticky top-0 z-30 flex h-14 items-center justify-between gap-4 border-b bg-white px-4 sm:static sm:h-auto sm:border-0 sm:px-6 shadow">
        <MobileSheet/>
        <Breadcrums />
        <div className='flex items-center gap-2'>
        <div className="ml-auto flex-1 md:grow-0 ">
            <MyRequest />
        </div>
        <ProfileDropdownMenu />
        </div>
    </header>
  )
}

export default Navbar
