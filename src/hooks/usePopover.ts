import { useState, useEffect, useRef } from 'react';

const usePopover = () => {
  const [popoverEventDay, setPopoverEventDay] = useState<number | null>(null);
  const popoverRef = useRef<HTMLDivElement | null>(null);

  const togglePopover = (day: number) => {
    if (popoverEventDay === day) {
      setPopoverEventDay(null); // Close the popover if it's already open for that day
    } else {
      setPopoverEventDay(day); // Open the popover for the selected day
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
      setPopoverEventDay(null); // Close the popover when clicking outside
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return { popoverEventDay, togglePopover, popoverRef };
};

export default usePopover;
