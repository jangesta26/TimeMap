'use client';
import React, { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { CalendarDays, ListCollapse, Logs, TicketsPlane } from 'lucide-react';
import TabItem from './component/TabItem';
import AttendanceTabItem from './content/Attendance';

const ViewTeamMemberPage = ({ params }: { params: Promise<{ id: string }> }) => {
  const unwrappedParams = React.use(params);
  const memberId = unwrappedParams.id;

  const [activeTab, setActiveTab] = useState('Attendance');


  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };
  
  return (
    <div className='w-full flex flex-col mt-10 items-center md:items-start'>
      <div className='flex flex-col items-center md:flex-row md:items-center gap-4 w-full'>
        <Avatar className='w-32 h-32 md:w-20 md:h-20'>
          <AvatarImage src="" alt={`Profile picture of ${memberId}`} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        
        <div className='flex flex-col'>
          <Label className='text-2xl font-semibold'>Name</Label>
          <p className='text-muted-foreground text-sm'>ID: {memberId}</p>
        </div>
      </div>
      
      <div className='w-full mt-10'>
        <Card className='shadow-xl'>
          <div className="p-2 -mb-2">
            <ul className="flex overflow-x-auto">
              <TabItem 
                icon={CalendarDays} 
                label="Attendance" 
                isActive={activeTab === "Attendance"} 
                onClick={() => handleTabClick("Attendance")} 
              />
              <TabItem 
                icon={Logs} 
                label="Logs" 
                isActive={activeTab === "Logs"} 
                onClick={() => handleTabClick("Logs")} 
              />
              <TabItem 
                icon={TicketsPlane} 
                label="Leave" 
                isActive={activeTab === "Leave"} 
                onClick={() => handleTabClick("Leave")} 
              />
              <TabItem 
                icon={ListCollapse} 
                label="Details" 
                isActive={activeTab === "Details"} 
                onClick={() => handleTabClick("Details")} 
              />
            </ul>
          </div>
        </Card>
      </div>
      {activeTab === 'Attendance' && (
            <AttendanceTabItem /> //Attendance Reports
          )}
          {activeTab === 'Logs' && (
            <div className='mt-10'>Coming soon...</div>
          )}
          {activeTab === 'Leave' && (
            <div className='mt-10'>Coming soon...</div>
          )}
          {activeTab === 'Details' && (
            <div className='mt-10'>Coming soon...</div>
          )}
      
    </div>
  );
}

export default ViewTeamMemberPage;
