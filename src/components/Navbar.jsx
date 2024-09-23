import React, { useState } from 'react';
import { Home, DollarSign, PlusCircle } from 'lucide-react'; // Import the icons

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage mobile menu

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle menu visibility
  };

  return (
    <nav className="bg-[#323232] shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-[#faf0e6] text-2xl font-bold">
          ExpenseTracker
        </div>
        <div className="hidden md:flex space-x-8 ml-auto">
          <a href="/" className="flex items-center text-[#faf0e6] hover:text-[#FA8072] transition duration-300">
            <Home className="mr-2 text-[#faf0e6]" /> Home
          </a>
          <a href="/TransactionTable" className="flex items-center text-[#faf0e6] hover:text-[#FA8072] transition duration-300">
            <DollarSign className="mr-2 text-[#faf0e6]" /> Transactions
          </a>
          <a href="/AddTransactionButton" className="flex items-center text-[#faf0e6] hover:text-[#FA8072] transition duration-300">
            <PlusCircle className="mr-2 text-[#faf0e6]" /> Add Transaction
          </a>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-[#faf0e6] focus:outline-none">
            <svg
              className="w-6 h-6 text-[#faf0e6]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#323232] text-[#faf0e6] p-4">
          <a href="/" className="block py-2 hover:text-[#FA8072] transition duration-300">
            <Home className="mr-2 inline" /> Home
          </a>
          <a href="/" className="block py-2 hover:text-[#FA8072] transition duration-300">
            <DollarSign className="mr-2 inline" /> Transactions
          </a>
          <a href="/" className="block py-2 hover:text-[#FA8072] transition duration-300">
            <PlusCircle className="mr-2 inline" /> Add Transaction
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
