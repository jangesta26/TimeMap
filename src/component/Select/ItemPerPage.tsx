import React from 'react'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

const ItemPerPage = ({itemPerPage}:{itemPerPage:any}) => {
  return (
    <Select >
        <SelectTrigger className="w-16 h-8 dark:bg-[#4a7dff]/10 bg-[#f2f3f7] rounded-sm focus-visible:ring-[#4a7dff]">
            <SelectValue 
            placeholder="5"
            />
        </SelectTrigger>
        <SelectContent>
            <SelectGroup>
                {
                  itemPerPage.map((item:any, index:any)=>(
                    <SelectItem key={index} value={item.value}>{item.label}</SelectItem>
                  ))  
                }
            </SelectGroup>
        </SelectContent>
    </Select>
  )
}

export default ItemPerPage
