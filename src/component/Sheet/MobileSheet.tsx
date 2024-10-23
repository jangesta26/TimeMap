'use client'
import React from 'react'
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import {
CalendarDays,
Clock,
LineChart,
Megaphone,
MenuIcon,
Settings,
Users2,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import useResponsiveSheet from '@/src/hooks/useResponsiveSheet'
import { Separator } from '@/components/ui/separator'
import LinkItem from './LinkItem'
import ProfileAvatar from '../Avatar/ProfileAvatar'

const MobileSheet = () => {
    const { isOpen, setIsOpen } = useResponsiveSheet();
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
            <Button size="icon" variant="outline" className="sm:hidden" onClick={() => setIsOpen(true)}>
                <MenuIcon className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
            </Button>
        </SheetTrigger>
        <SheetContent side="left" className="sm:max-w-xs">
        <SheetTitle className="sr-only">
            <SheetDescription>Mobile Menu</SheetDescription>
          </SheetTitle>

            <nav className="grid gap-6 text-lg font-medium mt-4">
                <div
                    className="flex h-14 w-full items-center justify-start p-4 rounded-lg bg-[#4a7dff] dark:bg-[#4a7dff]/90 font-semibold text-white md:text-base"
                >
                    <div className='flex items-center gap-2 transition-all group-hover:scale-110'>
                    <ProfileAvatar 
                    imgUrl='https://res.cloudinary.com/duwr4xret/image/upload/v1723471521/zsdz6exj1xxlqgvh3jhe.png'
                    name='James Kodak'
                    />
                    <div className='flex flex-col items-start justify-center'>
                        <span className="text-sm tracking-widest">James Kodak</span>
                        <p className='text-xs font-light text-[#f2f3f7] '>ID: 1001</p>
                    </div>
                    </div>
                </div>
            <Separator 
            orientation='horizontal'
            className='w-full -mt-2 text-muted-foreground'/>

            {/* link item */}
            <LinkItem href="/" icon={LineChart} label="Dashboard" />
            <LinkItem href="/team" icon={Users2} label="Team" />
            <LinkItem href="/activity" icon={Clock} label="Activity" />
            <LinkItem href="/announcement" icon={Megaphone} label="Announcement" />
            <LinkItem href="/calendar" icon={CalendarDays} label="Calendar" />
            <LinkItem href="/settings" icon={Settings} label="Settings" />
            </nav>
        </SheetContent>
    </Sheet>
  )
}

export default MobileSheet
