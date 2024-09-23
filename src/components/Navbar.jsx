// src/components/Navbar.jsx
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-[#DDD0C8]">
      <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
        <div className="text-[#323232]">
          <span className="text-2xl font-bold">ExpenseTracker</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
