import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
const LinkItem = ({
    href, 
    icon: Icon, 
    label
}:{
    href: string
    icon: React.ElementType;
    label: string
}) => {
    const pathname = usePathname();
    const isActive = pathname === href;
  return (
    <Link
    href={href}
    className={`flex items-center gap-4 px-2.5 ${isActive ? 'text-[#4a7dff]' : 'text-muted-foreground'}`}
    >
        <Icon className="h-5 w-5" />
        {label}
    </Link>
  )
}

export default LinkItem
