'use client'
import React from 'react'
import Link from 'next/link';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { usePathname  } from 'next/navigation';

const TooltipLink = ({ 
    href, 
    icon: Icon, 
    label
 } : {
    href: string
    icon: React.ElementType;
    label: string
}) => {
const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            href={href}
            className={`flex h-10 w-10 items-center justify-center rounded-lg transition-colors ${isActive ? 'bg-[#4a7dff] text-white' : 'bg-[#f2f3f7] dark:bg-[#4a7dff]/10 text-muted-foreground hover:text-foreground'}`}
          >
            <Icon className={`h-5 w-5 ${isActive ? 'text-white' : 'text-muted-foreground '}`} />
            <span className="sr-only">{label}</span>
          </Link>
        </TooltipTrigger>
        <TooltipContent 
        side="right"
        className='transition ease-in-out duration-75'
        >
            {label}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export default TooltipLink
