import { ListFilter } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface DateFilterDropDownProps {
  selectedFilter: 'today' | 'week' | 'month' | 'year';
  onFilterChange: (filter: 'today' | 'week' | 'month' | 'year') => void;
}

const DateFilterDropDown: React.FC<DateFilterDropDownProps> = ({ selectedFilter, onFilterChange }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="gap-1 focus-visible:ring-0 focus-visible:ring-offset-0">
          <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">Filter</span>
          <ListFilter className="h-3.5 w-3.5 " />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Filter by</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {['today', 'week', 'month', 'year'].map(filter => (
          <DropdownMenuCheckboxItem
            key={filter}
            checked={selectedFilter === filter}
            onCheckedChange={() => onFilterChange(filter as 'today' | 'week' | 'month' | 'year')}
          >
            {filter.charAt(0).toUpperCase() + filter.slice(1)}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default DateFilterDropDown
