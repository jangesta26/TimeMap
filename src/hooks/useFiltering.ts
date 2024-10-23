'use client';

interface FilterableItem {
  name: string;
  id: string;
}

const useFiltering = <T extends FilterableItem>(data: T[], searchTerm: string) => {
  if (!searchTerm) return data;

  return data.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.id.includes(searchTerm)
  );
};

export default useFiltering;
