import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <>
    <div className="h-px w-full bg-gradient-to-r from-transparent via-[#D2D8E183] to-transparent dark:via-[#959CB183]"></div>
        
    <div className="py-6 text-center text-base text-body-color dark:text-white">
      Created by {" "}
      <a
        href="https://jangesta26.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-[#4a7dff] hover:underline"
      >
        Janell Gesta
      </a>
    </div>
    <div className='-mt-4 m-2 text-center text-sm text-muted-foreground mb-4'>
      <p> © TimeMap. All rights reserved</p>
      <div className='flex items-center justify-center gap-2'>
      <Link href="/support" className='text-muted-foreground font-light hover:underline hover:text-primary'>Support</Link>
      <Link href="/feedback" className='text-muted-foreground font-light hover:underline hover:text-primary'>Feedback</Link>
      </div>
    </div>
    </>
  )
}

export default Footer
