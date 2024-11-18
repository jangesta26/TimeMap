import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import React from 'react'

const ProfileAvatarForm = () => {
  return (
    <div className='w-full flex flex-col items-center justify-start space-y-6'>
        <div className="relative w-[140px] h-[140px] lg:w-[200px] lg:h-[200px] p-1 border-dashed border-2 rounded-full hover:border-gray-400/50 cursor-pointer transition-all duration-500 z-0">
            <Avatar className="w-full bg-white h-full flex items-center justify-center rounded-full active:scale-95 hover:scale-95 object-cover transition-all duration-500">
            <AvatarImage
                src="https://res.cloudinary.com/duwr4xret/image/upload/v1723471521/zsdz6exj1xxlqgvh3jhe.png"
                width={300}
                height={300}
                alt="Profile Picture"
                fetchPriority="high"
                decoding="async"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 150px, 200px"
                className="rounded-full dark:filter transition ease"
            />
            <AvatarFallback className='text-2xl font-bold'>JK</AvatarFallback>
            </Avatar>
        </div>
        <Button variant="outline" className='text-primary outline-none border-0 hover:bg-transparent'>
            Edit Avatar
        </Button>
    </div>
  )
}

export default ProfileAvatarForm
