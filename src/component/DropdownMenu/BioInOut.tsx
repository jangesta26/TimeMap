import React from 'react'
import { Clock, LogIn, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const BioInOut = () => {
  return (
    <DropdownMenu>
        <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="gap-1 focus-visible:ring-0 focus-visible:ring-offset-0">
          <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">Clock In/Out</span>
          <Clock className="h-3.5 w-3.5 " />
        </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
            <DropdownMenuItem className='flex items-center gap-2'>
                <LogIn className='h-4 text-[#4a7dff]'/>
                Time In
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className='flex items-center gap-2'>
                <LogOut className='h-4 text-[#ff8800]'/>
                Time Out
            </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default BioInOut
