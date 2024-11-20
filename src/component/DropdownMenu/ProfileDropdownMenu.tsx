'use client'
import React, { useState } from 'react'
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
import { useRouter } from 'next/navigation'
import { useTheme } from 'next-themes'
import LoadingDot from '../Common/LoadingDot'

const ProfileDropdownMenu = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const { setTheme } = useTheme();

    const handleLogout = () => {
        setLoading(true);
        router.push('/signin');
        setTheme('light');
    }
  return (
    <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button
            variant="outline"
            size="icon"
            className="overflow-hidden rounded-full focus-visible:ring-[#4a7dff] "
            >
            <ProfileAvatar imgUrl='https://res.cloudinary.com/duwr4xret/image/upload/v1723471521/zsdz6exj1xxlqgvh3jhe.png' name='James Kodak'/>
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className='w-72 mt-2'>
            <DropdownMenuLabel className='flex items-center gap-2 font-light'>
            <ProfileAvatar imgUrl='https://res.cloudinary.com/duwr4xret/image/upload/v1723471521/zsdz6exj1xxlqgvh3jhe.png' name='James Kodak'/>
                <Label>James Kodak</Label>
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
            onClick={handleLogout}
            > 
             { loading ? (
              <LoadingDot/>
            ) : (
              <>
                <LogOut className='h-4'/> 
                Logout
              </>
            )}
            
            </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default ProfileDropdownMenu
