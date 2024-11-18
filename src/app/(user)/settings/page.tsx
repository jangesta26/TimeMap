import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'
import AccountForm from './component/AccountForm'
import ProfileAvatarForm from './component/ProfileAvatarForm'

const SettingsAccountPage = () => {
  return (
    <div className='mt-10'>
      <Card className='shadow-xl p-6 bg-card/90 rounded-2xl'>
        <div className='w-full flex flex-col items-center justify-center lg:flex-row lg:items-start gap-8 py-10'>
          {/* Avatar Section */}
          <div className='flex-none w-full max-w-xs'>
            <ProfileAvatarForm />
          </div>

          {/* Form Section */}
          <div className='w-full lg:max-w-2xl'>
            <AccountForm />
          </div>
        </div>
      </Card>
    </div>
  )
}

export default SettingsAccountPage
