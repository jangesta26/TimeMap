import React from 'react'
import { ChevronDown, Plus, PlusCircle} from "lucide-react"
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
            variant="outline"
            size="sm"
            className="rounded-md flex items-center justify-center focus-visible:ring-0 focus-visible:ring-offset-0"
            >
            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">My Request</span>
            <PlusCircle className='h-4'/>
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className='w-72 p-4'>
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
