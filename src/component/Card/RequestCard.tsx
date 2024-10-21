import React from 'react';
import { Card } from "@/components/ui/card";
import { Label } from '@/components/ui/label';
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar";
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MessageSquareText } from 'lucide-react';

const RequestCard = ({ request }:{request:any}) => {
  return (
    <div className='space-y-4'>
      <div className='flex flex-col sm:flex-row items-center justify-between gap-8'>
        <div className='flex items-start gap-2'>
          <Avatar className='w-14 h-14'>
            <AvatarImage src={request.imgUrl} alt={request.name} />
            <AvatarFallback>{request.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className='flex flex-col'>
            <Label className='text-xl font-semibold'>{request.name}</Label>
            <Label className='text-sm font-light text-muted-foreground'>{request.job}</Label>
            <div className='block sm:hidden'>
              <span className='flex items-center gap-1 mt-2 text-[#4a7dff]'>
                <Label className='text-xs'>Message</Label>
                <MessageSquareText className='h-3.5 w-3.5' />
              </span>
            </div>
          </div>
        </div>
        <div className='flex sm:gap-6 gap-2.5'>
          <Badge variant='outline' className='w-20 h-10 text-[#4a7dff] bg-[#4a7dff]/10 text-sm p-4 py-2 font-light border-0'>
            {request.leaveType}
          </Badge>
          <Badge variant='outline' className='w-20 h-10 text-[#4a7dff] bg-[#4a7dff]/10 text-sm p-4 py-2 font-light border-0'>
            {request.duration}
          </Badge>
        </div>
      </div>
      <div className='flex items-center justify-center sm:justify-start'>
        <Label className='text-sm sm:text-2xl font-semibold'>{request.description}</Label>
      </div>
      <div className='flex flex-col items-center justify-center sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0'>
        <Label className='text-muted-foreground text-center sm:text-left'>{request.dateRange.start} - {request.dateRange.end}</Label>
        <div className='flex items-center gap-2'>
          <div className='hidden sm:inline'>
            <Button
              variant='outline'
              className='bg-transparent border-0 font-semibold text-[#4a7dff] hover:text-[#4a7dff]'
            >
              <MessageSquareText />
            </Button>
          </div>
          <Button
            variant='outline'
            className='bg-[#4a7dff]/10 border-0 font-semibold text-[#4a7dff] hover:bg-[#f93939] hover:text-white dark:hover:bg-[#f93939]'
          >
            Decline
          </Button>
          <Button
            value='outline'
            className='bg-[#4a7dff]/10 text-[#4a7dff] dark:bg-[#4a7dff]/10 font-semibold hover:text-[#f2f3f7] hover:bg-[#4a7dff] dark:hover:bg-[#4a7dff]'
          >
            Approve
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RequestCard;
