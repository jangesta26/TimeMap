import React from 'react'
import { Ellipsis, PlusCircle, SquarePen, Trash2, View} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const ActionButton = () => {
  return (
    <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button
            variant="outline"
            size="sm"
            className="bg-transparent border-0 px-0 hover:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
            >
            <Ellipsis />
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className='w-32 p-4 text-muted-foreground'>
            <DropdownMenuItem className='flex items-center gap-1.5 text-sm font-light hover:text-[#4a4dff]'>
               <View className='h-3.5'/> View
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className='flex items-center gap-1.5 text-sm font-light hover:text-[#4a4dff]'>
                <SquarePen className='h-3.5'/> Edit
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className='flex items-center gap-1.5 text-sm font-light hover:text-[#4a4dff]'>
                <Trash2 className='h-3.5'/> Delete
            </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default ActionButton
