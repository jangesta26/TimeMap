import React from 'react'
import { CalendarDays, CircleHelp, Fingerprint, LogOut, RectangleEllipsis, ShieldAlert, ShieldCheck, UserRound } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import ProfileAvatar from '../Avatar/ProfileAvatar'
import { Label } from '@radix-ui/react-dropdown-menu'

const ProfileDropdownMenu = () => {
  return (
    <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button
            variant="outline"
            size="icon"
            className="overflow-hidden rounded-full"
            >
            <ProfileAvatar/>
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className='w-72 mt-2'>
            <DropdownMenuLabel className='flex items-center gap-2 font-light'>
                <ProfileAvatar/>
                <Label>Shad CN</Label>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className='flex items-center gap-2'>
                <UserRound className='h-4'/>
                My Profile
            </DropdownMenuItem>
            <DropdownMenuItem className='flex items-center gap-2'>
                <CalendarDays className='h-4'/>
                My Attendance
            </DropdownMenuItem>
            <DropdownMenuItem className='flex items-center gap-2'>
                <Fingerprint className='h-4'/>
                My Biologs
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className='flex items-center gap-2'>
                <CircleHelp className='h-4'/>
                Help
            </DropdownMenuItem>
            <DropdownMenuItem className='flex items-center gap-2'>
                <RectangleEllipsis className='h-4'/>
                Change Password
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem 
            className='flex items-center gap-2'>
                <ShieldCheck className='h-4'/>
                Privacy Policy
            </DropdownMenuItem>
            <DropdownMenuItem 
            className='flex items-center gap-2'
            >
                <ShieldAlert className='h-4'/>
                Terms of Service
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem 
            className='flex items-center gap-2'
            > 
            <LogOut className='h-4'/> 
            Logout
            </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default ProfileDropdownMenu
