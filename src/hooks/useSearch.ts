'use client'
import { useState } from 'react';

const useSearch = (initialValue: string = '') => {
  const [searchTerm, setSearchTerm] = useState<string>(initialValue);

  const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return {
    searchTerm,
    onSearchChange,
  };
};

export default useSearch;
