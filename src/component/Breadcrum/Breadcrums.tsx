'use client'
import React from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import { usePathname  } from 'next/navigation';

const Breadcrums = ({ title, subItem}: { title: string; subItem: Array<{ id: number; tabItem: string, pathnameUrl: string }> }) => {
  const pathname = usePathname();

  return (
    <Breadcrumb>
      <BreadcrumbList className='flex flex-col md:flex-row items-center gap-4 sm:space-x-4'>
        <BreadcrumbItem>
          <span className='font-semibold text-xl -tracking-tighter text-black dark:text-[#f2f3f7]'>{title}</span>
        </BreadcrumbItem>
        <div className=' flex items-center md:gap-4'>
        {subItem && subItem.map((item, index) => (
          <React.Fragment key={item.id}>
            <BreadcrumbItem className=''>
              <BreadcrumbLink asChild>
                <Link 
                  href={item.pathnameUrl}
                  className={pathname === item.pathnameUrl ? 'font-semibold text-sm lg:text-base text-[#4a7dff] border-b-2 border-[#4a7dff]' : 'text-sm lg:text-base'}
                >
                  {item.tabItem}
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            {index < subItem.length - 1 && <BreadcrumbSeparator />}
          </React.Fragment>
        ))}
        </div>
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default Breadcrums;
