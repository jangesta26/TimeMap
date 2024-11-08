'use client'
import React, { useEffect, useState } from 'react'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

  type SelectItemType = {
    id: number;
    Description: string;
    value: string;
  };
  interface LeavesDropdownItemFilteringProps {
    placeholder: string;
    selectItems: SelectItemType[];
  }

const LeavesDropdownItemFiltering: React.FC<LeavesDropdownItemFilteringProps> = ({placeholder,selectItems}) => {
  const [selectedValue, setSelectedValue] = useState<string>('');

  useEffect(() => {
    
    if (!selectedValue && selectItems.length > 0) {
      setSelectedValue(''); 
    }
  }, [selectItems, selectedValue]);

  const handleChange = (value: string) => {
    setSelectedValue(value);
  };

  return (
    <Select value={selectedValue} onValueChange={handleChange}>
      <SelectTrigger className="w-full text-slate-500">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {selectItems.map((item) => (
            <SelectItem key={item.id} value={item.value}>
              {item.Description}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

export default LeavesDropdownItemFiltering
