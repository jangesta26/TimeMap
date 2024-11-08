import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

ChartJS.register(ArcElement, Tooltip, Legend);

interface ChartData {
  task: string;
  hours: number;
  percentage: number;
  fill: string;
}

interface PieChartProps {
  data: ChartData[];
  totalHours: number;
  totalEntries: number;
}

const PieChart: React.FC<PieChartProps> = ({ data, totalHours, totalEntries }) => {
  const chartData = {
    labels: data.map(item => item.task),
    datasets: [
      {
        data: data.map(item => item.hours),
        backgroundColor: data.map(item => item.fill),
        borderWidth: 0,
      },
    ],
  };

  const options = {
    cutout: '88%',
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="w-full flex flex-col sm:flex-row md:flex-col xl:flex-row space-y-0 sm:space-y-6 items-center justify-center">
      {/* Pie Chart */}
      <div className="w-full sm:w-2/4 md:w-2/3 lg:w-full xl:w-2/5 relative flex items-center justify-center">
        <div className="w-full max-w-[310px] h-auto mt-4" style={{ height: '310px' }}>
          <Doughnut data={chartData} options={options} />
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h2 className="text-sm md:text-[14px] font-light text-muted-foreground">Hours Tracked</h2>
          <p className="text-xl font-semibold">
            {Math.floor(totalHours)} hrs {Math.round((totalHours % 1) * 60)} mins
          </p>
          <hr className="my-2" />
          <h3 className="text-[14px] font-light text-muted-foreground">Time Entries</h3>
          <p className="text-xl">{totalEntries}</p>
        </div>
      </div>

      {/* Pie Chart Items */}
      <div className="w-full flex flex-col items-center justify-center gap-6 lg:grid lg:grid-cols-2 md:grid-rows-5 md:grid-flow-col">
        {data.map((item, index) => (
          <div key={index} className="w-full text-muted-foreground">
            <div className="w-full flex items-center justify-center md:grid md:grid-cols-4 md:auto-cols-max gap-x-2 md:gap-x-6">
              <Input
                type="text"
                value={Math.floor(item.hours)}
                className="hidden sm:block text-center w-10 p-2 bg-muted rounded-sm h-8"
                disabled
              />
              <p className="text-sm md:text-base">{item.percentage}%</p>
              <p className="text-sm md:text-base">{item.task}</p>
              <Badge
                variant="outline"
                className="flex items-center justify-center rounded-sm h-8 w-28 text-xs sm:text-sm p-1 text-[#f2f3f7] font-light"
                style={{ backgroundColor: item.fill }}
              >
                {Math.floor(item.hours)} hrs {Math.round((item.hours % 1) * 60)} mins
              </Badge>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default PieChart;
