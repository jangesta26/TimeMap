'use client'
import React, { useState } from 'react';
import TeamMembersCard from './component/TeamMembersCard';
import { Card } from '@/components/ui/card';
import { teamActivityData } from '../api/mock/dataTable';

const MembersPage = () => {
  const [visibleMembers, setVisibleMembers] = useState(4);

  const loadMoreMembers = () => {
    setVisibleMembers((prev) => prev + 4);
  };

  return (
  <>
    <div className='flex-wrap xl:grid xl:grid-cols-2 space-y-8 md:space-y-8 xl:space-y-0 sm:gap-8 mt-10'>
      {teamActivityData.slice(0, visibleMembers).map((item) => (
        <Card key={item.id} className="rounded-3xl shadow-lg p-6 bg-card/90">
          <TeamMembersCard
            name={item.name}
            imgUrl={item.avatar}
            job={item.jobTitle}
            teamMemberStatus={item.status}
            teamMemberLeaveTitle={item.leaveTitle}
            inTime={item.inTime}
            outTime={item.outTime}
            workTime={item.workTime}
            breakTime={item.breakTime}
          />
        </Card>
      ))}
    </div>
          {visibleMembers < teamActivityData.length && (
            <div className='w-full flex items-center justify-center mt-10'>
              <button
                onClick={loadMoreMembers}
                className='bg-[#4a7dff] dark:bg-[#4a7dff]/10 text-white dark:text-[#4a7dff] py-2 px-4 rounded'
              >
                Load More
              </button>
            </div>
          )}
    
          <div className='h-[210px]'></div>
    </>
  );
};

export default MembersPage;
