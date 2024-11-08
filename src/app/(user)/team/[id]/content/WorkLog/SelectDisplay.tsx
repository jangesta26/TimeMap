import React from 'react'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

const SelectDisplay = () => {
  return (
    <Select defaultValue="10">
      <SelectTrigger className="w-20 focus-visible:ring-[#4a7dff] ">
        <SelectValue placeholder={`${10}`}/>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Display</SelectLabel>
          <SelectItem value="10">10</SelectItem>
          <SelectItem value="25">25</SelectItem>
          <SelectItem value="50">50</SelectItem>
          <SelectItem value="75">75</SelectItem>
          <SelectItem value="100">100</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

export default SelectDisplay
