import React from 'react'
import { LogOut } from "lucide-react"
import {
Tooltip,
TooltipContent,
TooltipProvider,
TooltipTrigger,
} from "@/components/ui/tooltip"
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

const LogoutButton = () => {
    const router = useRouter();
  return (
    <TooltipProvider>
        <Tooltip>
            <TooltipTrigger asChild>
                <Button
                variant="ghost"
                onClick={()=>router.push('/signin')}
                className="flex h-10 w-10 px-0 py-0 items-center justify-center rounded-lg bg-[#f2f3f7] bg-[#4a7dff]/10 text-[#f93939] transition-colors hover:text-foreground"
                >
                <LogOut className="h-5 w-5 rotate-180" />
                <span className="sr-only">Logout</span>
                </Button>
            </TooltipTrigger>
            <TooltipContent side="right">Logout</TooltipContent>
        </Tooltip>
    </TooltipProvider>
  )
}

export default LogoutButton
