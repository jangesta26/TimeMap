import React from 'react';
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import ProfileAvatar from '../Avatar/ProfileAvatar';
import { Button } from '@/components/ui/button';

const AnniversaryEntry = ({ name, anniversary }:{name:any, anniversary:any}) => (
  <div className='w-full flex flex-col sm:flex-row items-center justify-between py-2'>
    <div className='flex items-center gap-2'>
      <ProfileAvatar />
      <span className="text-lg sm:text-sm md:text-xl">{name}</span>
    </div>
    <div className="text-sm text-muted-foreground mt-2 sm:mt-0">
      {anniversary}
    </div>
  </div>
);

const TodayIsCard = () => {
  return (
    <Card className='shadow-lg rounded-xl w-full h-[285px] mx-auto'>
      <CardContent className='divide-y p-6'>
        <AnniversaryEntry name="John Doe" anniversary="2nd Anniversary" />
        <AnniversaryEntry name="Jane Smith" anniversary="3rd Anniversary" />
        <AnniversaryEntry name="Alex Johnson" anniversary="1st Anniversary" />
      </CardContent>
      <CardFooter className='w-full flex items-center justify-center py-0 -mt-4'>
        <Button 
          variant="link"
          className='w-full h-full flex items-center justify-center gap-2 text-[#4a7dff] underline hover:font-semibold'
        >
          See All ...
        </Button>
      </CardFooter>
    </Card>
  );
}

export default TodayIsCard;
