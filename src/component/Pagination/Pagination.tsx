'use client';
import React from 'react';
import ItemPerPage from '../Select/ItemPerPage';

const options = [
  { value: 5, label: '5' },
  { value: 10, label: '10' },
  { value: 20, label: '20' },
  { value: 50, label: '50' },
  { value: 100, label: '100' },
];

const Pagination = ({
  currentPage,
  totalPages,
  goToNextPage,
  goToPreviousPage,
  setCurrentPage,
  itemsPerPage,
  setItemsPerPage, 
  totalItems,
}: {
  currentPage: number;
  totalPages: number;
  goToNextPage: () => void;
  goToPreviousPage: () => void;
  setCurrentPage: (page: number) => void;
  itemsPerPage: number;
  setItemsPerPage: (items: number) => void;
  totalItems: number;
}) => {
  const handleItemsPerPageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newItemsPerPage = Number(event.target.value);
    setItemsPerPage(newItemsPerPage);
    setCurrentPage(1);
  };

  return (
    <div className="sm:flex mt-6 mb-4 sm:items-center space-y-2 flex-wrap w-full items-center">
      <p className="text-sm text-gray-500 flex-1">
        Showing {((currentPage - 1) * itemsPerPage) + 1} to {Math.min(currentPage * itemsPerPage, totalItems)} of {totalItems} entries
      </p>
      
      <div className="flex items-center space-x-2">
        <p className="text-sm text-gray-500">Display:</p>
        <ItemPerPage itemPerPage={options}/>
      </div>
      
      <ul className="flex items-center space-x-1 sm:ml-4">
        <li 
          onClick={goToPreviousPage} 
          className={`flex items-center justify-center cursor-pointer bg-[#4a7dff]/10 w-7 h-7 rounded ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-3 fill-[#4a7dff]" viewBox="0 0 55.753 55.753">
            <path d="M12.745 23.915c.283-.282.59-.52.913-.727L35.266 1.581a5.4 5.4 0 0 1 7.637 7.638L24.294 27.828l18.705 18.706a5.4 5.4 0 0 1-7.636 7.637L13.658 32.464a5.367 5.367 0 0 1-.913-.727 5.367 5.367 0 0 1-1.572-3.911 5.369 5.369 0 0 1 1.572-3.911z" />
          </svg>
        </li>

        {Array.from({ length: totalPages }, (_, index) => (
          <li 
            key={index} 
            className={`flex items-center justify-center cursor-pointer text-sm w-7 h-7 rounded ${currentPage === index + 1 ? 'bg-[#4a7dff]/10 text-[#4a7dff]' : 'text-gray-500'}`} 
            onClick={() => setCurrentPage(index+1)}
          >
            {index + 1}
          </li>
        ))}
        
        <li 
          onClick={goToNextPage} 
          className={`flex items-center justify-center cursor-pointer bg-[#4a7dff]/10 w-7 h-7 rounded ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-3 fill-[#4a7dff] rotate-180" viewBox="0 0 55.753 55.753">
            <path d="M12.745 23.915c.283-.282.59-.52.913-.727L35.266 1.581a5.4 5.4 0 0 1 7.637 7.638L24.294 27.828l18.705 18.706a5.4 5.4 0 0 1-7.636 7.637L13.658 32.464a5.367 5.367 0 0 1-.913-.727 5.367 5.367 0 0 1-1.572-3.911 5.369 5.369 0 0 1 1.572-3.911z" />
          </svg>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
