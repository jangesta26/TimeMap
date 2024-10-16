'use client'
import React from 'react'
import Link from "next/link"
import {
CalendarDays,
Clock,
Fingerprint,
LineChart,
MegaphoneIcon,
Settings,
Users2,
} from "lucide-react"
import TooltipLink from './TooltipLink'
import LogoutButton from '../Button/LogoutButton'

const Sidebar = () => {
    return (
    <>
        <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
            <Link
            href="#"
            className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-[#4a7dff] text-lg font-semibold text-primary-foreground md:text-base mb-4"
            >
            <Fingerprint className="h-6 w-6 transition-all group-hover:scale-110" />
            <span className="sr-only">TimeMap</span>
            </Link>
            <TooltipLink href="/" icon={LineChart} label="Dashboard" />
            <TooltipLink href="/team" icon={Users2} label="Team" />
            <TooltipLink href="/activity" icon={Clock} label="Activity" />
            <TooltipLink href="/announcement" icon={MegaphoneIcon} label="Announcement" />
            <TooltipLink href="/calendar" icon={CalendarDays} label="Calendar" />
            <TooltipLink href="/settings" icon={Settings} label="Settings" />
        </nav>
        <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
            <LogoutButton />
        </nav>
    </>
    )
}

export default Sidebar
