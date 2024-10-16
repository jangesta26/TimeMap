import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { BriefcaseBusiness, Coffee, CornerRightDown, CornerUpRight, MoveRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

const MyStatsCard = () => {
  return (
    <Card className='shadow-lg rounded-xl w-full mx-auto'>
      <div className='mx-auto flex flex-col p-2'>
        {/* Top Row */}
        <div className='flex flex-col sm:flex-row sm:divide-x-[1px] divide-y-[1px] sm:divide-y-0'>
          {/** First Stat */}
          <div className='w-full flex items-center justify-between px-4 sm:px-6'>
            <div>
              <CardHeader className="pb-2 px-0">
                <CardTitle className="text-xl sm:text-2xl">8:00 AM</CardTitle>
              </CardHeader>
              <CardContent className='px-0'>
                <div className="text-xs text-muted-foreground">
                  Today's In Time*
                </div>
              </CardContent>
            </div>
            <div className='flex items-center justify-center h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-[#f2f3f7]'>
              <CornerRightDown className='h-8 sm:h-10 text-[#4a7dff]'/>
            </div>
          </div>
          {/** Second Stat */}
          <div className='w-full flex items-center justify-between px-4 sm:px-6'>
            <div>
              <CardHeader className="pb-2 px-0">
                <CardTitle className="text-xl sm:text-2xl">45 m</CardTitle>
              </CardHeader>
              <CardContent className='px-0'>
                <div className="text-xs text-muted-foreground">
                  Break Time*
                </div>
              </CardContent>
            </div>
            <div className='flex items-center justify-center h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-[#f2f3f7]'>
              <Coffee className='h-8 sm:h-10 text-[#4a7dff]'/>
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
                <CardTitle className="text-xl sm:text-2xl">4 h 23 m</CardTitle>
              </CardHeader>
              <CardContent className='px-0'>
                <div className="text-xs text-muted-foreground">
                  Work Time*
                </div>
              </CardContent>
            </div>
            <div className='flex items-center justify-center h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-[#f2f3f7]'>
              <BriefcaseBusiness className='h-8 sm:h-10 text-[#4a7dff]'/>
            </div>
          </div>

          {/** Fourth Stat */}
          <div className='w-full flex items-center justify-between px-4 sm:px-6'>
            <div>
              <CardHeader className="pb-2 px-0">
                <CardTitle className="text-xl sm:text-2xl">3</CardTitle>
              </CardHeader>
              <CardContent className='px-0'>
                <div className="text-xs text-muted-foreground">
                  Tasks In Progress*
                </div>
              </CardContent>
            </div>
            <div className='flex items-center justify-center h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-[#f2f3f7]'>
              <CornerUpRight className='h-8 sm:h-10 text-[#4a7dff]'/>
            </div>
          </div>
        </div>
      </div>

      <CardFooter className='bg-[#f2f3f7] w-full flex flex-col sm:grid sm:grid-cols-2 p-2 divide-x-0 sm:divide-x-[1px] sm:divide-y-0 divide-y-[1px]'>
        <Button 
          variant="link"
          className='w-full flex items-center justify-center gap-2 px-0 py-1 text-[#4a7dff]'
        >
          View My Tasks <MoveRight /> 
        </Button>
        <Button 
          variant="link"
          className='w-full flex items-center justify-center gap-2 px-0 py-1 text-[#4a7dff]'
        >
          View My Leaves <MoveRight /> 
        </Button>
      </CardFooter>
    </Card>
  )
}

export default MyStatsCard
