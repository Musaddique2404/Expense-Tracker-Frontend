// src/components/Navbar.jsx
import React from 'react';

const Navbar = () => {
  
  return (
    <nav className="bg-gray-100 dark:bg-gray-900 ">
      <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
        <div className="text-gray-900 dark:text-gray-100">
          <span className="text-2xl font-bold">ExpenseTracker</span>
        </div>
      
      </div>
    </nav>
  );
};

export default Navbar;
