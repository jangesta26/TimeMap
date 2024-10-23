import React from 'react';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Label,
  Rectangle,
  ReferenceLine,
  XAxis,
  YAxis,
  ResponsiveContainer
} from 'recharts';
import {
  Card,
  CardContent,
} from '@/components/ui/card';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import useChartDimensions from '@/src/hooks/useChartDimensions';

interface WorkHoursCardProps {
  filter: 'today' | 'week' | 'month' | 'year';
}

const WorkHoursCard: React.FC<WorkHoursCardProps> = ({ filter }) => {
  const { width, height } = useChartDimensions();
  const data = {
    today: Array.from({ length: 24 }, (_, i) => ({
      date: `${i}:00`,
      average: Math.floor(Math.random() * 10) + 1,
    })),
    week: Array.from({ length: 7 }, (_, i) => ({
      date: `2024-10-${14 + i}`,
      average: Math.floor(Math.random() * 10) + 1,
    })),
    month: Array.from({ length: 30 }, (_, i) => ({
      date: `2024-10-${i + 1}`,
      average: Math.floor(Math.random() * 10) + 1,
    })),
    year: Array.from({ length: 12 }, (_, i) => ({
      date: new Date(2024, i, 1).toLocaleString('default', { month: 'long' }),
      average: Math.floor(Math.random() * 10) + 1,
    })),
  };

  const currentData = data[filter];

  const getBarColor = (average: number) => {
    if (average === 10) {
      return '#4a7dff';
    } else if (average === 9) {
      return '#656b7b';
    } else {
      return '#ff8800';
    }
  };

  return (
    <Card className="w-full shadow-xl bg-card/90 ">
      <CardContent className='overflow-hidden h-auto p-2 py-3.5'>
          <ChartContainer
            config={{
              average: {
                label: 'Average',
                color: 'hsl(var(--chart-1))',
              },
            }}
          >
            <BarChart
            width={width}
            height={height}
            accessibilityLayer 
            data={currentData}
            margin={{ left: -30, top: 40, bottom: 10, right: 180}}
            >
              <CartesianGrid vertical={false} />
              <Bar
                dataKey="average"
                radius={5}
                fillOpacity={0.6}
                shape={(props: any) => (
                  <Rectangle
                    {...props}
                    fill={getBarColor(props.payload.average)}
                  />
                )}
              />
              <XAxis
                dataKey="date"
                tickLine={false}
                axisLine={false}
                tickMargin={10}
                tickFormatter={(value) => {
                  return filter === 'today' ? value :
                         filter === 'month' ? new Date(value).getDate() :
                         filter === 'year' ? value :
                         new Date(value).toLocaleDateString('en-US', { weekday: 'short' });
                }}
              />
              <YAxis
                domain={[0, 10]}
                tickFormatter={(value) => value.toLocaleString()}
              />
              <ChartTooltip
                cursor={false}
                content={
                  <ChartTooltipContent
                    hideIndicator
                    labelFormatter={(value) => {
                      return new Date(value).toLocaleDateString('en-US', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                      });
                    }}
                  />
                }
              />
              <ReferenceLine
                y={8}
                stroke="#f93939"
                strokeDasharray="3 3"
                strokeWidth={1}
              >
                <Label
                  position="insideBottomLeft"
                  value="Target 8"
                  offset={10}
                  fill="#f93939"
                />
              </ReferenceLine>
              <ReferenceLine
                y={4}
                stroke="#4a4dff"
                strokeDasharray="3 3"
                strokeWidth={1}
              >
                <Label
                  position="insideBottomLeft"
                  value="Target 4"
                  offset={10}
                  fill="#4a4dff"
                />
              </ReferenceLine>
            </BarChart>
          </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default WorkHoursCard;
