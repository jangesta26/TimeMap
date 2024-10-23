import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import useTimeFormatter from '@/src/hooks/useTimeFormatter';

const TimeInOutCard = ({time, title}:{time: string; title: string;}) => {
    const useTimeFormat = useTimeFormatter(time);
  return (
    <Card className="rounded-xl p-1 bg-[#f2f3f7]/80 dark:bg-[#4a7dff]/10">
      <CardHeader className='px p-3 py-2'>
        <CardTitle className='text-sm font-light text-muted-foreground'>{title}</CardTitle>
      </CardHeader>
        <CardContent className='p-3 py-1 -mt-1'>
            <p className='text-md lg:text-xl font-semibold'>{useTimeFormat}</p>
        </CardContent>
    </Card>
  )
}

export default TimeInOutCard
