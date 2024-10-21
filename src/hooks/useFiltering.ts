'use client'
const useFiltering = <T>(data: T[], searchTerm: string) => {
    return data.filter(item =>
      (item as any).name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (item as any).id.includes(searchTerm)
    );
  };
  
  export default useFiltering;
  