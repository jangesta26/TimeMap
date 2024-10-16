import React from 'react'
import { ChevronDown} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const MyRequest = () => {
  return (
    <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button
            variant="ghost"
            className="flex items-center justify-center w-full h-12 font-semibold focus-visible:ring-0 focus-visible:ring-offset-0 rounded-none gap-2"
            >
            My Rquest
            <ChevronDown className='h-4'/>
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className='w-72 p-4 mt-1'>
            <DropdownMenuItem className='text-md font-light'>
                My Leaves
            </DropdownMenuItem>
            <DropdownMenuItem className='text-md font-light'>
                My Certificates of Attendance
            </DropdownMenuItem>
            <DropdownMenuItem className='text-md font-light'>
                My Schedule Adjustments
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className='text-md font-light'>
                My Overtimes
            </DropdownMenuItem>
            <DropdownMenuItem className='text-md font-light'>
                My Undertimes
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className='text-md font-light'>
                My Official Businesses
            </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default MyRequest
