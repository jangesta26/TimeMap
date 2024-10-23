'use client';
import React from 'react';

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
    <div className="md:flex m-4 items-center">
      <p className="text-sm text-gray-500 flex-1">
        Showing {((currentPage - 1) * itemsPerPage) + 1} to {Math.min(currentPage * itemsPerPage, totalItems)} of {totalItems} entries
      </p>
      
      <div className="flex items-center space-x-2">
        <p className="text-sm text-gray-500">Display:</p>
        <select 
          // value={itemsPerPage} 
          // onChange={handleItemsPerPageChange} // Handle change event
          className="text-sm text-gray-500 border border-gray-400 rounded h-7 mx-2 px-1 outline-none"
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
        </select>
      </div>
      
      <ul className="flex items-center space-x-1 ml-4">
        <li 
          onClick={goToPreviousPage} 
          className={`flex items-center justify-center cursor-pointer bg-blue-100 w-7 h-7 rounded ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-3 fill-gray-500" viewBox="0 0 55.753 55.753">
            <path d="M12.745 23.915c.283-.282.59-.52.913-.727L35.266 1.581a5.4 5.4 0 0 1 7.637 7.638L24.294 27.828l18.705 18.706a5.4 5.4 0 0 1-7.636 7.637L13.658 32.464a5.367 5.367 0 0 1-.913-.727 5.367 5.367 0 0 1-1.572-3.911 5.369 5.369 0 0 1 1.572-3.911z" />
          </svg>
        </li>

        {Array.from({ length: totalPages }, (_, index) => (
          <li 
            key={index} 
            className={`flex items-center justify-center cursor-pointer text-sm w-7 h-7 rounded ${currentPage === index + 1 ? 'bg-[#007bff] text-white' : 'text-gray-500'}`} 
            onClick={() => setCurrentPage(index+1)}
          >
            {index + 1}
          </li>
        ))}
        
        <li 
          onClick={goToNextPage} 
          className={`flex items-center justify-center cursor-pointer bg-blue-100 w-7 h-7 rounded ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-3 fill-gray-500 rotate-180" viewBox="0 0 55.753 55.753">
            <path d="M12.745 23.915c.283-.282.59-.52.913-.727L35.266 1.581a5.4 5.4 0 0 1 7.637 7.638L24.294 27.828l18.705 18.706a5.4 5.4 0 0 1-7.636 7.637L13.658 32.464a5.367 5.367 0 0 1-.913-.727 5.367 5.367 0 0 1-1.572-3.911 5.369 5.369 0 0 1 1.572-3.911z" />
          </svg>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
