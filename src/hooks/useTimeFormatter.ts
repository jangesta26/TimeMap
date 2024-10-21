import { useMemo } from 'react';

const useTimeFormatter = (timeString: string) => {
  return useMemo(() => {
    const date = new Date(timeString);
    const hours = date.getUTCHours();
    const minutes = date.getUTCMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12; 
    const formattedMinutes = minutes.toString().padStart(2, '0'); 
    return `${formattedHours}:${formattedMinutes} ${ampm}`;
  }, [timeString]);
};

export default useTimeFormatter;
