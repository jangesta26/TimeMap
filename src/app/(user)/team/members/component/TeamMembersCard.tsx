import React from 'react';
import { Label } from '@/components/ui/label';
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar";
import { Badge } from '@/components/ui/badge';
import TimeInOutCard from './TimeInOutCard';
import Link from 'next/link';

type TeamMemberStatus = 0 | 1;

const TeamMembersCard = ({
  userId,
  name,
  imgUrl,
  job,
  teamMemberStatus,
  teamMemberLeaveTitle,
  inTime,
  outTime,
  workTime,
  breakTime
}:{
  userId:string;
  name: string;
  imgUrl: string;
  job: string;
  teamMemberStatus:any;
  teamMemberLeaveTitle: any;
  inTime: string;
  outTime: string;
  workTime: string;
  breakTime: string;
}) => {
  return (
    <div className='space-y-10'>
      <div className='flex sm:flex-row items-center justify-between sm:gap-8'>
        <div className='flex items-start justify-between gap-4'>
          <Avatar className='w-14 h-14'>
            <AvatarImage src={imgUrl} alt={name} />
            <AvatarFallback>pic</AvatarFallback>
          </Avatar>
          <div className='flex flex-col'>
            <Link href={`/team/${userId}`} className='hover:underline hover:cursor-pointer text-xl font-semibold'>
              {name}
            </Link>
            <Label className='text-sm font-light text-muted-foreground'>{job}</Label>
            <div className='block sm:hidden'>
              <Badge variant='outline' className={`${teamMemberStatus === 1 ? 'text-[#51ce2c] bg-[#51ce2c]/10':'text-[#f93939] bg-[#f93939]/10'} w-14 h-6 text-[12px] px-2 py-2 font-light border-0`}>
              {
                teamMemberStatus === 1 ? 'Present' : 'Absent'
              }
              </Badge>
            </div>
          </div>
        </div>
        <div className='hidden sm:block'>
          <Badge variant='outline' className={`${teamMemberStatus === 1 ? 'text-[#51ce2c] bg-[#51ce2c]/10':'text-[#f93939] bg-[#f93939]/10'} w-20 h-10 text-sm p-4 py-2 font-light border-0`}>
            {
              teamMemberStatus === 1 ? 'Present' : 'Absent'
            }
          </Badge>
        </div>
      </div>
      {
         teamMemberStatus === 1
         ? (
          <div className='grid grid-cols-2 md:grid md:grid-cols-4 gap-2 md:gap-4'>
              <TimeInOutCard title="In Time" time={inTime}/>
              <TimeInOutCard title="Break Time" time={breakTime}/>
              <TimeInOutCard title="Work Time" time={workTime}/>
              <TimeInOutCard title="Out Time" time={outTime}/>
          </div>
         ):(
          <div className='ml-2 w-full flex flex-col items-start gap-1'>
            <Label className='text-sm font-light text-muted-foreground'>At the moment</Label>
            <p className=' text-lg font-semibold sm:text-2xl'>{teamMemberLeaveTitle}</p>
          </div>
         )
      }

    </div>
  )
}

export default TeamMembersCard
