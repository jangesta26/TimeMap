import * as React from "react";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import PieChartDonut from "@/src/component/Chart/PieChart";
import { chartData } from "@/src/utils/chartData";
import WorkLogDataTable from "./WorkLogDataTable";
import { workLogsReports } from "./workLogsReports";
import Pagination from "./Pagination";
import SelectDisplay from "./SelectDisplay";
import { Label } from "@/components/ui/label";


const WorkLog = () => {

  return (
    <div className="w-full flex flex-col gap-8 mt-10">
      <Card className="w-full rounded-2xl shadow-xl bg-card/90 p-4">
        <CardContent>
          <PieChartDonut data={chartData} totalHours={164} totalEntries={56}/>
        </CardContent>
      </Card>
      <Card className='rounded-2xl p-8 px-6 pt-4 shadow-xl'>
        <div className="overflow-y-auto p-2">
          <WorkLogDataTable workLogDataReports={workLogsReports[0]?.workLogs || []}/>
        </div>
        <div className='w-full flex flex-col items-center justify-center gap-4 xl:flex-row xl:items-center xl:justify-between px-2 mt-6'>
          {/* select */}
          <div className="flex items-center gap-2 text-slate-500">
            <SelectDisplay />
            <Label>of {120} Entries</Label>
          </div>
          {/* Pagination */}
          <Pagination />
        </div>
      </Card>
    </div>
  );
};

export default WorkLog;
