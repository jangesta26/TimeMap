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
    <Breadcrumb className="md:flex">
      <BreadcrumbList>
        <BreadcrumbItem>
          <span className='font-semibold text-xl text-black dark:text-[#f2f3f7]'>{title}</span>
        </BreadcrumbItem>
        
        {subItem && subItem.map((item, index) => (
          <React.Fragment key={item.id}>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link 
                  href={item.pathnameUrl}
                  className={pathname === item.pathnameUrl ? 'font-semibold text-[#4a4dff] underline' : ''}
                >
                  {item.tabItem}
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            {index < subItem.length - 1 && <BreadcrumbSeparator />}
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default Breadcrums;
