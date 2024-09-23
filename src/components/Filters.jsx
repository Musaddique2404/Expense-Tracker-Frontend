import React from 'react';

const Filters = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="flex flex-col p-4 bg-gray-100 dark:bg-gray-900">
      <div className="flex flex-col gap-4 sm:flex-row sm:gap-4 sm:justify-between">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search by Title"
          className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-600"
        />
      </div>
    </div>
  );
};

export default Filters;
