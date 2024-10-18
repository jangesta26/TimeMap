import React from 'react'
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { BriefcaseBusiness, HandCoins, Hourglass, MonitorX, MoveRight, ThermometerSnowflake, TicketsPlane } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

const MyStuffCard = () => {
  return (
    <Card className='shadow-lg rounded-xl w-full mx-auto bg-card/90'>
      <div className='mx-auto flex flex-col px-2 py-0'>
        <div className='w-full flex items-center justify-between px-4 sm:px-6'>
          <div>
            <CardHeader className="pb-1 px-0">
              <CardTitle className="text-xl sm:text-2xl">Pending Requests</CardTitle>
            </CardHeader>
            <CardContent className='px-0'>
              <div className="text-xs md:text-lg text-muted-foreground">
                All your requests are approved.🤗
              </div>
            </CardContent>
          </div>
          <div className='flex items-center justify-center h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-[#4a7dff]/10'>
            <Hourglass className='h-8 sm:h-10 text-[#4a7dff]'/>
          </div>
        </div>
        <Separator />
        <div className='w-full flex items-center justify-between px-4 sm:px-6 -my-3'>
          <div>
            <CardHeader className="pb-1 px-0">
              <CardTitle className="text-xl sm:text-2xl">Leave Credits (5)</CardTitle>
            </CardHeader>
            <CardContent className='px-0'>
              <div className="text-xs md:text-lg text-muted-foreground">
                Service Incentive Leave (1 year services)
              </div>
            </CardContent>
          </div>
          <div className='flex items-center justify-center h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-[#4a7dff]/10'>
            <BriefcaseBusiness className='h-8 sm:h-10 text-[#4a7dff]'/>
          </div>
        </div>
        <Separator />
        {/* Bottom Row */}
        <div className='flex flex-col sm:flex-row sm:divide-x-[1px] divide-y sm:divide-y-0'>
          {/** Third Stat */}
          <div className='w-full flex items-center justify-between px-4 sm:px-6'>
            <div>
              <CardHeader className="pb-2 px-0">
                <CardTitle className="text-xl sm:text-2xl">3</CardTitle>
              </CardHeader>
              <CardContent className='px-0'>
                <div className="text-xs text-muted-foreground">
                Sick Leave
                </div>
              </CardContent>
            </div>
            <div className='flex items-center justify-center h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-[#4a7dff]/10'>
              <ThermometerSnowflake className='h-8 sm:h-10 text-[#4a7dff]'/>
            </div>
          </div>

          {/** Fourth Stat */}
          <div className='w-full flex items-center justify-between px-4 sm:px-6'>
            <div>
              <CardHeader className="pb-2 px-0">
                <CardTitle className="text-xl sm:text-2xl">0</CardTitle>
              </CardHeader>
              <CardContent className='px-0'>
                <div className="text-xs text-muted-foreground">
                  Unpaid Leave
                </div>
              </CardContent>
            </div>
            <div className='flex items-center justify-center h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-[#4a7dff]/10 '>
              <HandCoins className='h-8 sm:h-10 text-[#4a7dff] '/>
            </div>
          </div>
        </div>
        <Separator />
        {/* Bottom Row */}
        <div className='flex flex-col sm:flex-row sm:divide-x-[1px] divide-y sm:divide-y-0'>
          {/** Third Stat */}
          <div className='w-full flex items-center justify-between px-4 sm:px-6'>
            <div>
              <CardHeader className="pb-2 px-0">
                <CardTitle className="text-xl sm:text-2xl">2</CardTitle>
              </CardHeader>
              <CardContent className='px-0'>
                <div className="text-xs text-muted-foreground">
                  Vacation Leave
                </div>
              </CardContent>
            </div>
            <div className='flex items-center justify-center h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-[#4a7dff]/10'>
              <TicketsPlane className='h-8 sm:h-10 text-[#4a7dff]'/>
            </div>
          </div>

          {/** Fourth Stat */}
          <div className='w-full flex items-center justify-between px-4 sm:px-6'>
            <div>
              <CardHeader className="pb-2 px-0">
                <CardTitle className="text-xl sm:text-2xl">0</CardTitle>
              </CardHeader>
              <CardContent className='px-0'>
                <div className="text-xs text-muted-foreground">
                  Suspension
                </div>
              </CardContent>
            </div>
            <div className='flex items-center justify-center h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-[#4a7dff]/10'>
              <MonitorX className='h-8 sm:h-10 text-[#4a7dff]'/>
            </div>
          </div>
        </div>
      </div>
      <CardFooter className='bg-[#f2f3f7] dark:bg-[#4a7dff]/10 rounded-b-xl p-2'>
        <div className='w-full flex flex-col sm:grid sm:grid-cols-2 divide-x-0 sm:divide-x sm:divide-y-0 divide-y'>
        <Button 
          variant="link"
          className='w-full flex items-center justify-center gap-2 px-0 py-1 text-[#4a7dff] rounded-none'
        >
          Attendance Summary <MoveRight /> 
        </Button>
        <Button 
          variant="link"
          className='w-full flex items-center justify-center gap-2 px-0 py-1 text-[#4a7dff] rounded-none'
        >
          Payroll <MoveRight /> 
        </Button>
        </div>
      </CardFooter>
    </Card>
  )
}

export default MyStuffCard
