import React from 'react';

const Header = ({ currentMonth, onPreviousMonth, onNextMonth }) => {
  return (
    <div className="flex justify-between items-center bg-[#DDD0C8] text-[#323232] p-4">
      <button 
        onClick={onPreviousMonth}
        className="text-sm sm:text-base md:text-xl bg-white text-[#323232] p-1 sm:p-2 rounded hover:bg-[#D0C0B8] transition duration-200"
      >
        {"< Previous Month"}
      </button>
      <div className="text-lg sm:text-xl md:text-2xl">
        {currentMonth.format('MMMM YYYY')}
      </div>
      <button 
        onClick={onNextMonth}
        className="text-sm sm:text-base md:text-xl bg-white text-[#323232] p-1 sm:p-2 rounded hover:bg-[#D0C0B8] transition duration-200"
      >
        {"Next Month >"}
      </button>
    </div>
  );
};

export default Header;
