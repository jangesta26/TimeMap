import { Label } from '@/components/ui/label'
import TeamStatsCard from '@/src/component/Card/TeamStatsCard'
import React from 'react'
import { Coffee, CornerRightDown, CornerUpRight, Hourglass, Move, RefreshCcw } from 'lucide-react'
import Today from './component/Today'
import SendReminder from '@/src/component/Alert/SendReminder'
import RequestCard from '@/src/component/Card/RequestCard'
import { leaveRequests } from './api/mock/leaveRequests'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import DataTable from '@/src/component/Table/DataTable'

const TeamPage = () => {
  return (
    <div className='w-full mt-10'>
      <div className='flex-col gap-6'>
        <div className='flex items-center justify-between'>
          <Label className='text-lg py-1.5'>Team Stats</Label>
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
        <SendReminder />
      </div>
      <div className='w-full mt-10 flex flex-col gap-6 xl:grid xl:grid-cols-2 xl:gap-12'>
      {leaveRequests.map(request => (
        <RequestCard key={request.id} request={request} />
      ))}
      </div>
      {/* data table */}
      <Card className='mt-10 rounded-2xl p-8 px-6 pt-4 shadow-xl '>
        <div className='flex items-center justify-between'>
          <Label className='text-lg py-1.5 font-bold'>Team Activity</Label>
          <div className='flex items-center gap-2'>
              <Move className='text-[#4a7dff] font-light h-8 w-8 rotate-45'/>
              <RefreshCcw className='text-[#4a7dff] font-light h-8 w-8'/>
          </div>
        </div>
        <div className='w-full flex-wrap sm:flex sm:items-center sm:justify-between gap-10 mt-4'>
          <Input 
            placeholder='Search by name or Employee id'
            className='sm:w-1/5'
          />
          <Today/>
        </div>
        <div className='mt-2'>
          <DataTable />
        </div>
      </Card>
    </div>
  )
}

export default TeamPage
