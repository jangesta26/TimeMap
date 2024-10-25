import React from 'react';

const TabItem = ({ 
    icon: Icon, 
    label, 
    isActive, 
    onClick 
}: {
    icon: React.ElementType;
    label: string;
    isActive: boolean;
    onClick: () => void;
}) => {
  return (
    <li 
      onClick={onClick} 
      className={`flex items-center justify-center gap-1 text-[11px] md:text-sm py-2 px-2 md:px-5 cursor-pointer relative transition-colors duration-200 ${
        isActive ? 'text-[#4a7dff] font-bold' : 'text-muted-foreground'
      }`}
    >
      <div className={`absolute bottom-0 left-0 right-0 h-0.5 transition-all duration-200 ${isActive ? 'bg-[#4a7dff]' : 'bg-transparent'}`} />
      <Icon className={`h-4 ${isActive ? 'text-[#4a7dff]' : 'text-muted-foreground'}`} />
      {label}
    </li>
  );
}

export default TabItem;
