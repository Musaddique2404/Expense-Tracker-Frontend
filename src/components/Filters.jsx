import React from 'react';

const Filters = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="flex flex-col p-4 bg-[#DDD0C8]">
      <div className="flex flex-col gap-4 sm:flex-row sm:gap-4 sm:justify-between">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search by Title"
          className="w-full p-2 border border-[#323232] rounded bg-white text-[#323232] placeholder-[#323232] focus:outline-none focus:ring-2 focus:ring-[#323232]"
        />
      </div>
    </div>
  );
};

export default Filters;
