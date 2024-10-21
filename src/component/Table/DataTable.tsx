import { Label } from '@/components/ui/label';
import { ChevronsUpDown } from 'lucide-react';
import React from 'react';
import ProfileAvatar from '../Avatar/ProfileAvatar';
import ActionButton from '../Button/ActionButton';
import useSort from '@/src/hooks/useSort';
import useTimeFormatter from '@/src/hooks/useTimeFormatter';

const tableHeadItem = [
  { id: 1, name: 'Emp. ID', key: 'id' },
  { id: 2, name: 'User', key: 'name' },
  { id: 3, name: 'In Time', key: 'inTime' },
  { id: 4, name: 'Out Time', key: 'outTime' },
  { id: 5, name: 'Work Time', key: 'workTime' },
  { id: 6, name: 'Break Time', key: 'breakTime' },
  { id: 7, name: 'Over Time', key: 'overTime' },
  { id: 8, name: 'Action', key: '' },
];

const DataTable = ({ dataTableTeamActivities }: { dataTableTeamActivities: any; }) => {
  const { sortedData, requestSort, sortConfig } = useSort(dataTableTeamActivities);

  return (
    <table className="min-w-full bg-white dark:bg-[#4a7dff]/10 ">
      <thead className="bg-gray-100 dark:bg-[#4a7dff]/10  whitespace-nowrap ">
        <tr>
          {tableHeadItem.map((item) => (
            <th key={item.id} className="p-3 text-left text-sm font-light text-muted-foreground space-x-2">
              <Label className='flex items-center justify-between' onClick={() => item.key && requestSort(item.key)}>
                {item.name}
                {item.key && (
                  <ChevronsUpDown
                    className={`transition-transform duration-200 ${sortConfig.key === item.key ? (sortConfig.direction === 'ascending' ? 'rotate-180' : '') : ''}`}
                  />
                )}
              </Label>
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="whitespace-nowrap divide-y divide-gray-200">
        {sortedData.map((item: any) => {
        const inTimeFormatted = useTimeFormatter(item.inTime);
        const outTimeFormatted = useTimeFormatter(item.outTime);
        const workTimeFormatted = useTimeFormatter(item.workTime);
        const breakTimeFormatted = useTimeFormatter(item.breakTime);
        const overTimeFormatted = useTimeFormatter(item.overTime);
        return(
          <tr key={item.id} className='text-muted-foreground'>
            <td className="p-4 text-sm">{item.id}</td>
            <td className="p-4 text-sm">
              <div className="flex items-center cursor-pointer w-max">
                <ProfileAvatar imgUrl={item.avatar} name={item.name} />
                <div className="ml-4">
                  <p className="text-sm text-black dark:text-muted-foreground">{item.name}</p>
                  <p className="text-xs text-muted-foreground dark:text-gray-500">{item.email}</p>
                </div>
              </div>
            </td>
            <td className="p-4 text-sm"><Label>{inTimeFormatted}</Label></td>
              <td className="p-4 text-sm"><Label>{outTimeFormatted}</Label></td>
              <td className="p-4 text-sm"><Label>{workTimeFormatted}</Label></td>
              <td className="p-4 text-sm"><Label>{breakTimeFormatted}</Label></td>
              <td className="p-4 text-sm"><Label>{overTimeFormatted}</Label></td>
            <td className="p-4 text-sm">
              <ActionButton />
            </td>
          </tr>
          )
        })}
      </tbody>
    </table>
  );
}

export default DataTable;
