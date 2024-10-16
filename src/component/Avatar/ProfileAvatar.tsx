import React from 'react'
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
  
const ProfileAvatar = () => {
  return (
    <Avatar>
        <AvatarImage src="" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  )
}

export default ProfileAvatar
