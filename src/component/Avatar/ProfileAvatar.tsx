import React from 'react';
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar";

const ProfileAvatar = ({ name, imgUrl }: { name: string; imgUrl: string }) => {
    const getInitials = (name: string) => {
        const nameParts = name.split(' ');
        const initials = nameParts.map(part => part.charAt(0).toUpperCase()).join('');
        return initials;
    };

    const initials = getInitials(name);

    return (
        <Avatar>
            <AvatarImage 
            src={imgUrl}
            width={300}
            height={300}
            fetchPriority="high"
            decoding="async"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 150px, 200px"
            className="rounded-full dark:filter transition ease"
            alt="@profile"
            />
            <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>
    );
};

export default ProfileAvatar;