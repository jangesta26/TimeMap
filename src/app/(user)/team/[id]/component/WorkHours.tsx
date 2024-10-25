'use client';
import { Bar, BarChart, LabelList, Cell, XAxis, ResponsiveContainer } from "recharts";
import { ChartContainer } from "@/components/ui/chart";
import { Card } from "@/components/ui/card";
import useChartDimensions from "@/src/hooks/useChartDimensions";

const WorkHours = ({ startDate, endDate }: { startDate: Date | undefined; endDate: Date | undefined }) => {
  const chartData = [
    { day: "1", hours: 8 },
    { day: "2", hours: 7.5 },
    { day: "3", hours: 9 },
    { day: "4", hours: 10 },
    { day: "5", hours: 8 },
    { day: "6", hours: 6 },
    { day: "7", hours: 0 },
    { day: "8", hours: 8 },
    { day: "9", hours: 7.5 },
    { day: "10", hours: 8 },
    { day: "11", hours: 7 },
    { day: "12", hours: 9 },
    { day: "13", hours: 10 },
    { day: "14", hours: 8 },
    { day: "15", hours: 0 },
    { day: "16", hours: 8 },
    { day: "17", hours: 8 },
    { day: "18", hours: 9 },
    { day: "19", hours: 10 },
    { day: "20", hours: 8 },
    { day: "21", hours: 7.5 },
    { day: "22", hours: 6 },
    { day: "23", hours: 0 },
    { day: "24", hours: 8 },
    { day: "25", hours: 9 },
    { day: "26", hours: 10 },
    { day: "27", hours: 8 },
    { day: "28", hours: 7 },
    { day: "29", hours: 9 },
    { day: "30", hours: 10 },
    { day: "31", hours: 0 },
  ];

  const filterData = () => {
    if (!startDate || !endDate) return chartData;

    const startDay = startDate.getDate();
    const endDay = endDate.getDate();

    return chartData.filter(item => {
      const day = parseInt(item.day, 10);
      return day >= startDay && day <= endDay;
    });
  };

  const filteredData = filterData();

  const getBarColor = (hours: number) => {
    if (hours >= 10) return '#4a7dff';
    if (hours >= 7.6) return '#656b7b';
    return '#ff8800';
  };

  const { width, height } = useChartDimensions();

  return (
    <Card className="shadow-xl xl:h-[355px]">
      <div className="md:block hidden">
        <ChartContainer config={{}} className='w-full flex items-center'>
            <BarChart 
            data={filteredData} 
            width={width} 
            height={height}
            margin={{ left: 50, top: 50, bottom: 120, right: 50}}
            >
              <XAxis dataKey="day" />
              <Bar dataKey="hours" radius={4}>
                <LabelList dataKey="hours" position="top" />
                {filteredData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={getBarColor(entry.hours)} />
                ))}
              </Bar>
            </BarChart>
        </ChartContainer>
      </div>
      <div className="md:hidden block">
        <ChartContainer config={{}} className='w-full flex items-center'>
            <BarChart 
            data={filteredData} 
            width={width} 
            height={height}
            margin={{ left: 20, top: 50, bottom: 50, right: 60}}
            >
              <XAxis dataKey="day" />
              <Bar dataKey="hours" radius={4}>
                <LabelList dataKey="hours" position="top" />
                {filteredData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={getBarColor(entry.hours)} />
                ))}
              </Bar>
            </BarChart>
        </ChartContainer>
      </div>
    </Card>
  );
};

export default WorkHours;
