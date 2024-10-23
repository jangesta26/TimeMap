'use client'
import { useState, useEffect } from 'react';

const useDebounce = (value: string, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

const useSearch = (initialValue: string = '', debounceDelay: number = 300) => {
  const [searchTerm, setSearchTerm] = useState<string>(initialValue);
  const debouncedSearchTerm = useDebounce(searchTerm, debounceDelay);

  const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return {
    searchTerm: debouncedSearchTerm,
    onSearchChange,
    resetSearch: () => setSearchTerm(''), 
  };
};

export default useSearch;
