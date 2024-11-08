"use client"
 
import { Checkbox } from "@/components/ui/checkbox"

const CheckboxItems = ({tabItems}:{tabItems:string}) => {
  return (
    <div className="items-top flex items-center space-x-4">
    <Checkbox className="focus-visible:ring-[#4a7dff] border-slate-300 border-2 data-[state=checked]:bg-[#4a7dff] data-[state=checked]:text-primary-foreground w-5 h-5" id="terms1" />
    <div className="grid gap-1.5 leading-none">
      <label
        htmlFor="terms1"
        className="text-lg font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {tabItems}
      </label>
    </div>
  </div>
  )
}

export default CheckboxItems
