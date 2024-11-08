import { Card } from '@/components/ui/card'
import React from 'react'
import CardLeavesStats from './component/CardLeavesStats'
import NotificationAlert from './component/NotificationAlert'
import { CircleAlert } from 'lucide-react'
import LeavesDataTable from './component/LeavesDataTable'
import { leavesData } from './component/leavesDataApi'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import LeavesDropdownItemFiltering from './component/LeavesDropdownItemFiltering'
import LeavesSelectDisplay from './component/LeavesSelectDisplay'
import LeavesPagination from './component/LeavesPagination'

const LeavesPage = () => {
  return (
    <div className='w-full space-y-6'>
      <div className='w-full flex flex-col xl:flex xl:flex-row md:grid grid-cols-2 gap-6'>
        <CardLeavesStats 
        item='16'
        description='Available leaves'
        />
        <CardLeavesStats 
        item='08'
        description='Previous unused leaves'
        />
        <CardLeavesStats 
        item='02'
        description='Pending leaves request'
        />
        <CardLeavesStats 
        item='02'
        description='Reject request'
        />
      </div>
      {/* Notifications */}
      <NotificationAlert 
        notifyDescription='You were absent on 13 Oct 13 2024'
        btnLabel='Apply on duty'
        label='Apply leave'
        icon={CircleAlert}
      />
      <NotificationAlert 
        notifyDescription='You compensatory off will expire on Nov 31 2024'
        btnLabel='Apply leave'
        label='Read leave policy'
        icon={null}
      />
      <Card className="w-full rounded-2xl shadow-xl bg-card/90 p-6 px-8 space-y-6">
        <div className='flex items-center justify-between'>
          <Label className='text-xl py-1.5 font-bold'>Leaves</Label>
          <Button variant="outline" className='w-48 h-12 flex items-center hover:bg-[#4a7dff]/20 hover:text-[#4a7dff] font-semibold text-md bg-[#4a7dff] text-white'>New Task</Button>
        </div>
        <div className='flex items-center justify-between'>
          <div className='w-[280px]'>
            <LeavesDropdownItemFiltering
              placeholder='Select a time period'
              selectItems={[
                {
                  id:1,
                  Description:"Last 6 months",
                  value:"last6months"
                },
                {
                  id:2,
                  Description:"7 Days",
                  value:"7days"
                },
                {
                  id:3,
                  Description:"This month",
                  value:"thismonth"
                },
                {
                  id:4,
                  Description:"This year",
                  value:"thisyear"
                },
              ]}
            />
          </div>
          <div className='w-[180px]'>
            <LeavesDropdownItemFiltering
              placeholder='Status'
              selectItems={[
                {
                  id:1,
                  Description:"Approved",
                  value:"approved"
                },
                {
                  id:2,
                  Description:"Pending",
                  value:"pending"
                },
                {
                  id:3,
                  Description:"Rejected",
                  value:"rejected"
                },
              ]}
            />
          </div>
        </div>
        <div className="overflow-y-auto p-2">
          <LeavesDataTable
          LeavesItemDataReports={leavesData[0]?.leavesApply || []}
          />
        </div>
        <div className='w-full flex flex-col items-center justify-center gap-4 xl:flex-row xl:items-center xl:justify-between px-2 mt-6'>
          {/* select */}
          <div className="flex items-center gap-2 text-slate-500">
            <LeavesSelectDisplay />
            <Label>of {120} Entries</Label>
          </div>
          {/* Pagination */}
          <LeavesPagination />
        </div>
      </Card>
    </div>
  )
}

export default LeavesPage