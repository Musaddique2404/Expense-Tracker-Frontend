import React from 'react';

const Header = ({ currentMonth, onPreviousMonth, onNextMonth }) => {
  return (
    <div className="flex justify-between items-center bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-4">
      <button 
        onClick={onPreviousMonth}
        className="text-sm sm:text-base md:text-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-1 sm:p-2 rounded hover:bg-gray-300 dark:hover:bg-gray-700"
      >
        {"< Previous Month"}
      </button>
      <div className="text-lg sm:text-xl md:text-2xl">
        {currentMonth.format('MMMM YYYY')}
      </div>
      <button 
        onClick={onNextMonth}
        className="text-sm sm:text-base md:text-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-1 sm:p-2 rounded hover:bg-gray-300 dark:hover:bg-gray-700"
      >
        {"Next Month >"}
      </button>
    </div>
  );
};

export default Header;
