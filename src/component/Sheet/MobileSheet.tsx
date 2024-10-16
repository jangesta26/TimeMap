'use client'
import React from 'react'
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Link from "next/link"
import {
CalendarDays,
Clock,
Fingerprint,
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
            <nav className="grid gap-6 text-lg font-medium mt-4">
            <Link
                href="/"
                className="flex h-10 w-full items-center justify-center gap-2 rounded-md bg-[#4a7dff] text-lg font-semibold text-white hover:text-foreground md:text-base"
            >
                <div className='flex items-center gap-4 transition-all group-hover:scale-110'>
                <Fingerprint className="h-5 w-5 " />
                <span className="text-sm tracking-widest">TimeMap</span>
                </div>
            </Link>
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
