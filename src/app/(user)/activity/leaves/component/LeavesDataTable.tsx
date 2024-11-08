import React from 'react'
import { Label } from '@/components/ui/label';
import { ChevronsUpDown } from 'lucide-react';
import ActionButton from '@/src/component/Button/ActionButton';
import { Badge } from '@/components/ui/badge';

const tableHeadItem = [
    { id: 1, name: 'SNo.', key: 'sno' },
    { id: 2, name: 'Type', key: 'type' },
    { id: 3, name: 'From', key: 'fromDate' },
    { id: 4, name: 'To', key: 'toDate' },
    { id: 5, name: 'Days', key: 'days' },
    { id: 6, name: 'Reason', key: 'reason' },
    { id: 7, name: 'Status', key: 'status' },
    { id: 8, name: 'Action', key: 'action' },
  ];


interface LeavesItem {
    leavesId: number;
    type: string;
    fromDate: string;
    toDate: string;
    days: string;
    reason: string;
    status: string;
  }

interface LeavesItemDataTableProps {
    LeavesItemDataReports: LeavesItem[];
}

const LeavesDataTable = ({LeavesItemDataReports}:LeavesItemDataTableProps) => {
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
        {LeavesItemDataReports.length > 0 ? (
          LeavesItemDataReports.map((item, index) => (
            <tr key={`${item.leavesId}-${index}`} className="text-muted-foreground">
              <td className="p-4 text-sm">
                <Label>{item.leavesId}</Label>
              </td>
              <td className="p-4 text-sm">
                <Label>{item.type}</Label>
              </td>
              <td className="p-4 text-sm">
                <Label>{item.fromDate}</Label>
              </td>
              <td className="p-4 text-sm">
                <Label>{item.toDate}</Label>
              </td>
              <td className="p-4 text-sm">
                <Label>{item.days}</Label>
              </td>
              <td className="p-4 text-sm">
                <Label>{item.reason}</Label>
              </td>
              <td className="p-4">
                <Badge 
                variant='outline'
                className={`
                ${item.status === '0' && 'text-[#ff8800] bg-[#ff8800]/10'}
                ${item.status === '1' && 'text-[#51ce2c] bg-[#51ce2c]/10'}
                ${item.status === '2' && 'text-[#f93939] bg-[#f93939]/10'}
                text-center h-8 border-0 text-md
                 `}>
                    {item.status === '0' && <>Pending</>}
                    {item.status === '1' && <>Approved</>}
                    {item.status === '2' && <>Rejected</>}
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

export default LeavesDataTable
