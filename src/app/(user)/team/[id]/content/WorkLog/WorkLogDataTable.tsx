import React from 'react'
import { Label } from '@/components/ui/label';
import { ChevronsUpDown } from 'lucide-react';
import ActionButton from '@/src/component/Button/ActionButton';
import { Badge } from '@/components/ui/badge';

const tableHeadItem = [
    { id: 1, name: 'SNo.', key: 'sno' },
    { id: 2, name: 'Name', key: 'name' },
    { id: 3, name: 'Project', key: 'project' },
    { id: 4, name: 'Date', key: 'date' },
    { id: 5, name: 'Start Time', key: 'startTime' },
    { id: 6, name: 'End Time', key: 'endTime' },
    { id: 7, name: 'Time Spent', key: 'timeSpent' },
    { id: 8, name: 'Tags', key: 'tags' },
    { id: 9, name: 'Action', key: 'action' },
  ];


  interface WorkLogItem {
    workLogsId: number;
    name: string;
    project: string;
    date: string;
    startTime: string;
    endTime: string;
    timeSpent: string;
    tags: string;
    status: string;
  }

interface WorkLogDataTableProps {
workLogDataReports: WorkLogItem[];
}

const WorkLogDataTable = ({workLogDataReports}:WorkLogDataTableProps) => {
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
        {workLogDataReports.length > 0 ? (
          workLogDataReports.map((item, index) => (
            <tr key={`${item.workLogsId}-${index}`} className="text-muted-foreground">
              <td className="p-4 text-sm">
                <Label>{item.status !== "0" &&  item.workLogsId}</Label>
              </td>
              <td className="p-4 text-sm">
                <Label>{item.status !== "0" &&  item.name}</Label>
              </td>
              <td className="p-4 text-sm">
                <Label>{item.status !== "0" &&  item.project}</Label>
              </td>
              <td className="p-4 text-sm">
                <Label>{item.status !== "0" && item.date}</Label>
              </td>
              <td className="p-4 text-sm">
                <Label>{item.status !== "0" && item.startTime}</Label>
              </td>
              <td className="p-4 text-sm">
                <Label>{item.status !== "0" &&  item.endTime}</Label>
              </td>
              <td className="p-4 text-sm">
                <Label>{item.status !== "0" && item.timeSpent}</Label>
              </td>
              <td className="p-4 text-sm">
                <Badge 
                variant='outline'
                className={`
                ${item.tags === 'UI design' && 'text-[#ff8800] bg-[#ff8800]/10'}
                ${item.tags === 'Branding' && 'text-[#51c32c] bg-[#51c32c]/10'}
                ${item.tags === 'UX design' && 'text-purple-600 bg-purple-600/10'}
                text-center h-8
                 `}>
                    #{item.status === "0" ? '' : item.tags}
                    
                </Badge>
              </td>
              <td className="p-4 text-sm">
                <ActionButton />
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
  )
}

export default WorkLogDataTable
