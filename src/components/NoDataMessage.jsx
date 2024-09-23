import React from 'react';

const NoDataMessage = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-md">
      <div className="text-center">
        <svg
          className="w-16 h-16 text-gray-400 dark:text-gray-600 mx-auto"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 10h18M3 6h18M3 14h18m-7 4h-4m1-5a5 5 0 01-1.35-4.87A4.98 4.98 0 0112 8a4.98 4.98 0 014.35 2.13A5 5 0 0115 15h-3z"
          />
        </svg>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mt-4">
          No Transactions Found
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          It looks like you don't have any transactions for this period. Add a new transaction to get started.
        </p>
      </div>
    </div>
  );
};

export default NoDataMessage;
