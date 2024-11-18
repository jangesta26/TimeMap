'use client';
import { Label } from '@/components/ui/label';
import TeamStatsCard from '@/src/component/Card/TeamStatsCard';
import React, { useState } from 'react';
import { Coffee, CornerRightDown, CornerUpRight, Hourglass, Move, RefreshCcw, Search } from 'lucide-react';
import Today from './component/Today';
import SendReminder from '@/src/component/Alert/SendReminder';
import RequestCard from '@/src/component/Card/RequestCard';
import { leaveRequests } from './api/mock/leaveRequests';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import DataTable from '@/src/component/Table/DataTable';
import { teamActivityData } from './api/mock/dataTable';
import useSearch from '@/src/hooks/useSearch';
import useFiltering from '@/src/hooks/useFiltering';
import usePagination from '@/src/hooks/usePagination';
import Pagination from '@/src/component/Pagination/Pagination';

const TeamPage: React.FC = () => {
  const { searchTerm, onSearchChange } = useSearch();
  const filteredData = useFiltering(teamActivityData, searchTerm);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const { currentPage, totalPages, paginatedData, goToNextPage, goToPreviousPage, setCurrentPage } = usePagination(filteredData, itemsPerPage);

  return (
    <div className='w-full mt-10'>
      <div className='flex-col gap-6'>
        <div className='flex items-center justify-between'>
          <Label className='text-xl py-1.5'>Team Stats</Label>
          <Today />
        </div>
        <div className='flex flex-col gap-4 lg:grid lg:grid-cols-2 xl:grid-cols-4 sm:gap-10'>
          <TeamStatsCard time="9:16 AM" icon={CornerRightDown} averageDescription='Team&apos;s Average In Time' />
          <TeamStatsCard time="45 m" icon={Coffee} averageDescription='Team&apos;s Average Break Time' />
          <TeamStatsCard time="4 h 23 m" icon={Hourglass} averageDescription='Team&apos;s Average Work Time' />
          <TeamStatsCard time="-" icon={CornerUpRight} averageDescription='Team&apos;s Average Out Time' />
        </div>
      </div>
      <div className='mt-10'>
        <SendReminder 
        notifyDescription="Wade Warren was absent on 12 Apr 2024 without any intimation"
        btnLabel="Send Reminder"
        />
      </div>
      <div className='w-full mt-10 flex flex-col gap-6 xl:grid xl:grid-cols-2 xl:gap-12'>
        {leaveRequests.map(request => (
          <Card key={request.id} className="rounded-3xl shadow-lg p-6 bg-card/90">
            <RequestCard request={request} />
          </Card>
        ))}
      </div>
      {/* Data Table */}
      <Card className='mt-10 rounded-2xl p-8 px-6 pt-4 shadow-xl'>
        <div className='flex items-center justify-between'>
          <Label className='text-lg py-1.5 font-bold'>Team Activity</Label>
          <div className='flex items-center gap-2'>
            <Move className='text-[#4a7dff] font-light h-8 w-8 rotate-45' />
            <RefreshCcw className='text-[#4a7dff] font-light h-8 w-8' />
          </div>
        </div>
        <div className='w-full flex-wrap sm:flex sm:items-center sm:justify-between gap-10 mt-4'>
          <Input
            placeholder='Search by name or Employee id'
            className='sm:w-96 pl-10 ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-[#4a7dff]'
            suffix={<Search className='translate-x-8 translate-y-2 pr-1 border-r-[1px] -ml-6 text-slate-700' />}
            // value={searchTerm}
            // onChange={onSearchChange}
          />
          <Today />
        </div>
        <div className='mt-2'>
          <div className="overflow-y-auto">
            <DataTable dataTableTeamActivities={paginatedData} />
            {/* Pagination control */}
            <Pagination 
              currentPage={currentPage} 
              totalPages={totalPages} 
              goToNextPage={goToNextPage} 
              goToPreviousPage={goToPreviousPage} 
              setCurrentPage={setCurrentPage} 
              itemsPerPage={itemsPerPage} 
              setItemsPerPage={setItemsPerPage}
              totalItems={filteredData.length} 
            />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default TeamPage;
