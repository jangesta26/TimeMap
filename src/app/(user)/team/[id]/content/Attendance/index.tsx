import React from 'react'
import { Card } from '@/components/ui/card';
import AttendanceTodayIs from './AttendanceTodayIs';
import AttendanceWorkHours from './AttendanceWorkHours';
import AttendanceDataTable from './AttendanceDataTable';
import { attendanceReport } from './attendanceReports';

const AttendanceTabItem = () => {
  return (
    <div className='w-full flex flex-col gap-8 mt-10'>
        <div className='w-full xl:h-[400px] flex flex-col space-y-8 xl:space-y-0 xl:flex-row xl:gap-8'>
        {/* Today is */}
        <AttendanceTodayIs />
        {/* Work Hours */}
        <AttendanceWorkHours />
        </div>
        
        <div className='mx-auto w-full'>
        {/* Data Table Reports */}
        <Card className='rounded-2xl p-8 px-6 pt-4 shadow-xl'>
            <div className="overflow-y-auto">
            <AttendanceDataTable attendanceDataReport={attendanceReport}/>
            </div>
        </Card>
        </div>
    </div>
  )
}

export default AttendanceTabItem
