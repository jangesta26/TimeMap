'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React, { useState } from 'react'

const AccountForm = () => {

    const [formData, setFormData] = useState({
        firstName: 'James', 
        lastName: 'Kodak',   
        email: 'james.kodak@example.com',  
        designation: 'Software Engineer', 
        team: 'Development',  
        reportingManager: 'Jane Smith',
    })

    const handleInputChange = (e:any) => {
        const { name, value } = e.target
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }))
      }

  return (
    <form>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        {/* First Name */}
        <div className='space-y-1.5'>
            <Label className='text-gray-500'>First Name</Label>
            <Input 
            type='text' 
            name="firstname" 
            value={formData.firstName}
            onChange={handleInputChange}
            className='w-full'
            />
        </div>

        {/* Last Name */}
        <div className='space-y-1.5'>
            <Label className='text-gray-500'>Last Name</Label>
            <Input 
            type='text' 
            name="lastname" 
            value={formData.lastName}
            onChange={handleInputChange}
            className='w-full' />
        </div>

        {/* Email */}
        <div className='space-y-1.5'>
            <Label className='text-gray-500'>Email Address</Label>
            <Input 
            type='email' 
            value={formData.email}
            onChange={handleInputChange}
            className='w-full' />
        </div>
        
        {/* Verify Button (Mobile) */}
        <div className='block sm:hidden -mt-8 -mb-4'>
            <Button variant="outline" className='border-0 bg-transparent hover:bg-transparent underline text-primary p-0 px-1'>
                Verify email
            </Button>
        </div>

        {/* Verify Button (Desktop) */}
        <div className='mt-7 hidden sm:block'>
            <Button variant="outline" className='text-primary w-24'>
            Verify
            </Button>
        </div>

        {/* Designation */}
        <div className='space-y-1.5'>
            <Label className='text-gray-500'>Designation</Label>
            <Input 
            type='text' 
            name='designation'
            value={formData.designation}
            onChange={handleInputChange}
            className='w-full' />
        </div>

        {/* Team */}
        <div className='space-y-1.5'>
            <Label className='text-gray-500'>Team</Label>
            <Input 
            type='text' 
            name='team'
            value={formData.team}
            onChange={handleInputChange}
            className='w-full' 
            />
        </div>

        {/* Reporting Manager */}
        <div className='space-y-1.5'>
            <Label className='text-gray-500'>Reporting Manager</Label>
            <Input 
            type='text'
            name='reportingManager'
            value={formData.reportingManager}
            onChange={handleInputChange} 
            className='w-full' 
            />
        </div>
        </div>

        {/* Action Buttons */}
        <div className='w-full flex gap-4 mt-10'>
            <Button variant='outline' className='border-0 bg-transparent hover:bg-transparent hover:text-primary'>
            Cancel
            </Button>
            <Button className='w-24 h-9 hover:bg-[#4a7dff]/90'>
            Save
            </Button>
        </div>
    </form>
  )
}

export default AccountForm
