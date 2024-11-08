import SvgImages from '@/src/svg/SvgImages'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const AuthLayout = ({children}:{children: React.ReactNode}) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 ">
        <div className="max-w-md w-full mx-auto shadow-[0_2px_10px_-2px_rgba(74,125,255,0.5)] p-8 relative mt-12 rounded-md bg-[#4a7dff]/5">
            <div className="bg-white w-24 h-24 border-[10px] p-1.5 absolute left-0 right-0 mx-auto -top-12 rounded-full overflow-hidden">
            <Link href="#">
                <Image 
                src="https://res.cloudinary.com/duwr4xret/image/upload/v1731097583/hr_icon_pdmfzs.png" 
                alt="logo" 
                className="w-full inline-block" 
                width={300}
                height={300}
                priority
                />
            </Link>
            </div>
            {children}
        </div>
        <SvgImages />
    </div>
  )
}

export default AuthLayout
