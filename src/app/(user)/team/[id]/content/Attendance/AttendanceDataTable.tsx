import { Label } from '@/components/ui/label';
import { ChevronsUpDown } from 'lucide-react';
import React from 'react';

const tableHeadItem = [
  { id: 1, name: 'SNo.', key: 'sno' },
  { id: 2, name: 'Date', key: 'date' },
  { id: 3, name: 'Day of Week', key: 'd_week' },
  { id: 4, name: 'In Time', key: 'inTime' },
  { id: 5, name: 'Out Time', key: 'outTime' },
  { id: 6, name: 'Work Time', key: 'workTime' },
  { id: 7, name: 'Break Time', key: 'breakTime' },
  { id: 8, name: 'Over Time', key: 'overTime' },
];

const AttendanceDataTable = ({ attendanceDataReport }: { attendanceDataReport: any[] }) => {
  const attendanceData = Array.isArray(attendanceDataReport) && attendanceDataReport.length > 0
    ? attendanceDataReport[0].attendance
    : [];

  return (
    <table className="min-w-full bg-white dark:bg-[#4a7dff]/10">
      <thead className="bg-gray-100 dark:bg-[#4a7dff]/10">
        <tr>
          {tableHeadItem.map((item, index) => (
            <th
              key={item.id}
              className={`p-3 text-left text-xl font-light text-muted-foreground ${index === 0 ? 'rounded-l-lg' : ''} ${index === tableHeadItem.length - 1 ? 'rounded-r-lg' : ''}`}
            >
              <Label className='flex items-center justify-between'>
                {item.name}
                <ChevronsUpDown />
              </Label>
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200">
        {attendanceData.length > 0 ? (
          attendanceData.map((item: any) => (
            <tr key={item.logId} className='text-muted-foreground'>
              <td className="p-4 text-sm">
                <Label>{item.status === "0" ? '' : item.logId}</Label>
              </td>
              <td className="p-4 text-sm">
                <Label>{item.status === "0" ? '' : item.date}</Label>
              </td>
              <td className="p-4 text-sm">
                <Label>{item.status === "0" ? '' : item.d_week}</Label>
              </td>
              <td className="p-4 text-sm">
                <Label>{item.status === "0" ? '' : item.inTime}</Label>
              </td>
              <td className="p-4 text-sm">
                <Label>{item.status === "0" ? '' : item.outTime}</Label>
              </td>
              <td className="p-4 text-sm">
                <Label>{item.status === "0" ? '' : item.workTime}</Label>
              </td>
              <td className="p-4 text-sm">
                <Label>{item.status === "0" ? '' : item.breakTime}</Label>
              </td>
              <td className="p-4 text-sm text-center">
                <Label className='text-sm'>
                  {item.status === "0" ? <>Absent (No Intimation)</> : item.overTime}
                </Label>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={8} className="text-center p-6 text-sm text-gray-500">
              No data available
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default AttendanceDataTable;
