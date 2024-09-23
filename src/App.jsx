import React, { useState } from 'react';
import './index.css';
import Header from './components/Header';
import Filters from './components/Filters';
import TransactionTable from './components/TransactionTable';
import AddTransactionButton from './components/AddTransactionButton';
import Navbar from './components/Navbar';
import moment from 'moment';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentMonth, setCurrentMonth] = useState(moment());

  const handlePreviousMonth = () => {
    setCurrentMonth(currentMonth.clone().subtract(1, 'month'));
  };

  const handleNextMonth = () => {
    setCurrentMonth(currentMonth.clone().add(1, 'month'));
  };

  return (
    <div className="min-h-screen bg-[#DDD0C8] dark:bg-[#DDD0C8]">
      <div className="container mx-auto">
        <Navbar />
        <Header 
          currentMonth={currentMonth} 
          onPreviousMonth={handlePreviousMonth} 
          onNextMonth={handleNextMonth} 
        />
        <Filters searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <TransactionTable searchTerm={searchTerm} currentMonth={currentMonth} />
        <AddTransactionButton />
      </div>
    </div>
  );
};

export default App;
