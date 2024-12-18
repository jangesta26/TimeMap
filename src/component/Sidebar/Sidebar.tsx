'use client'
import React from 'react'
import {
CalendarDays,
Clock,
LifeBuoy,
LineChart,
MegaphoneIcon,
Send,
Settings,
Users2,
} from "lucide-react"
import TooltipLink from './TooltipLink'
import ProfileDropdownMenu from '../DropdownMenu/ProfileDropdownMenu'
import { ModeToggle } from '../Button/ModeButton'

const Sidebar = () => {
    return (
    <>
        <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
            <span className="mb-4" >
                <ProfileDropdownMenu />
            </span>
            <TooltipLink href="/" icon={LineChart} label="Dashboard" />
            <TooltipLink href="/team" icon={Users2} label="Team" />
            <TooltipLink href="/activity" icon={Clock} label="Activity" />
            <TooltipLink href="/announcement" icon={MegaphoneIcon} label="Announcement" />
            <TooltipLink href="/calendar" icon={CalendarDays} label="Calendar" />
            <TooltipLink href="/settings" icon={Settings} label="Settings" />
        </nav>
        <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
            <TooltipLink href="/support" icon={LifeBuoy} label="Support" />
            <TooltipLink href="/feedback" icon={Send} label="Feedback" />
            <ModeToggle />
        </nav>
    </>
    )
}

export default Sidebar
