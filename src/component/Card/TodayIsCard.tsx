import React from 'react';
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import ProfileAvatar from '../Avatar/ProfileAvatar';
import { Button } from '@/components/ui/button';
import { todayIs } from '@/src/app/api/mock/today-is';

const EventsEntry = ({ imgUrl, name, events }:{ name:any, imgUrl:any, events:any }) => (
    <>
      <div className='flex items-center gap-2'>
        <ProfileAvatar imgUrl={imgUrl} name={name} />
        <span className="text-lg sm:text-sm">{name}</span>
      </div>
      <div className="text-sm text-muted-foreground mt-2">
        {events}
      </div>
    </>

);

const TodayIsCard = () => {
  return (
    <Card className='shadow-lg rounded-xl w-full mx-auto bg-card/90'>
      <CardContent className='divide-y px-10 pt-10 py-2 mb-1'>
        {
          todayIs.map((item)=>(
            <div key={item.id} className='w-full flex flex-col sm:flex-row items-center justify-between py-3.5'>
            <EventsEntry imgUrl={item.imgUrl} name={item.name} events={item.events} />
            </div>
          ))
        }
      </CardContent>
      <CardFooter className='w-full flex bg-[#f2f3f7] dark:bg-[#4a7dff]/10 p-2.5 rounded-b-xl'>
        <Button 
          variant="link"
          className='w-full h-auto text-[#4a7dff] hover:font-semibold'
        >
          See All ...
        </Button>
      </CardFooter>
    </Card>
  );
}

export default TodayIsCard;
