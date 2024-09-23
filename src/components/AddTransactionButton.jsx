import React, { useState } from 'react';
import axios from 'axios';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from 'date-fns';
import { PlusIcon, XIcon, CalendarIcon } from 'lucide-react';

export default function AddTransactionButton() {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [formType, setFormType] = useState('expense');
  const [date, setDate] = useState(new Date());
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [title, setTitle] = useState('');
  const [notes, setNotes] = useState('');

  const toggleFormVisibility = () => setIsFormVisible(!isFormVisible);

  const handleFormTypeChange = (type) => setFormType(type);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formattedDate = format(date, 'yyyy-MM-dd');
      const response = await axios.post('https://expense-tracker-backend-es67.onrender.com/api/transactions/', {
        date: formattedDate,
        time: new Date().toLocaleTimeString(),
        title,
        amount,
        category,
        notes,
      });
      console.log('Transaction added:', response.data);
      setDate(new Date());
      setAmount('');
      setCategory('');
      setTitle('');
      setNotes('');
      toggleFormVisibility();
    } catch (error) {
      console.error('Error adding transaction:', error);
    }
  };

  return (
    <div className="relative">
      <button
        onClick={toggleFormVisibility}
        className="fixed bottom-4 right-4 bg-[#323232] hover:bg-opacity-90 text-[#DDD0C8] rounded-full w-16 h-16 flex items-center justify-center text-3xl shadow-lg transition-colors duration-200"
        aria-label="Add transaction"
      >
        <PlusIcon className="w-8 h-8" />
      </button>

      {isFormVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-[#DDD0C8] bg-opacity-95 p-6 rounded-lg shadow-xl w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-[#323232]">
                {formType.charAt(0).toUpperCase() + formType.slice(1)} Transaction
              </h2>
              <button onClick={toggleFormVisibility} className="text-[#323232] hover:text-opacity-80">
                <XIcon className="w-6 h-6" />
              </button>
            </div>
            <div className="flex mb-4 space-x-2">
              <button
                onClick={() => handleFormTypeChange('expense')}
                className={`flex-1 py-2 px-4 rounded-md transition-colors duration-200 ${
                  formType === 'expense'
                    ? 'bg-[#323232] text-[#DDD0C8]'
                    : 'bg-[#DDD0C8] text-[#323232] border border-[#323232]'
                }`}
              >
                Expense
              </button>
              <button
                onClick={() => handleFormTypeChange('income')}
                className={`flex-1 py-2 px-4 rounded-md transition-colors duration-200 ${
                  formType === 'income'
                    ? 'bg-[#323232] text-[#DDD0C8]'
                    : 'bg-[#DDD0C8] text-[#323232] border border-[#323232]'
                }`}
              >
                Income
              </button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-[#323232] mb-1">
                  Date
                </label>
                <div className="relative">
                  <DatePicker
                    selected={date}
                    onChange={(date) => setDate(date)}
                    className="w-full p-2 pr-10 border border-[#323232] rounded-md bg-[#DDD0C8] text-[#323232]"
                    dateFormat="yyyy-MM-dd"
                  />
                  <CalendarIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#323232] w-5 h-5" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-[#323232] mb-1">
                  Amount
                </label>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="Amount"
                  className="w-full p-2 border border-[#323232] rounded-md bg-[#DDD0C8] text-[#323232]"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#323232] mb-1">
                  Category
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full p-2 border border-[#323232] rounded-md bg-[#DDD0C8] text-[#323232]"
                  required
                >
                  <option value="" disabled>Select Category</option>
                  {formType === 'expense' ? (
                    <>
                      <option>Food</option>
                      <option>Housing</option>
                      <option>Utilities</option>
                      <option>Other</option>
                    </>
                  ) : (
                    <>
                      <option>Salary</option>
                      <option>Freelance</option>
                      <option>Investment</option>
                      <option>Other</option>
                    </>
                  )}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-[#323232] mb-1">
                  Title
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Transaction Title"
                  className="w-full p-2 border border-[#323232] rounded-md bg-[#DDD0C8] text-[#323232]"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#323232] mb-1">
                  Notes
                </label>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Additional notes"
                  className="w-full p-2 border border-[#323232] rounded-md bg-[#DDD0C8] text-[#323232] h-24 resize-none"
                />
              </div>
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={toggleFormVisibility}
                  className="px-4 py-2 bg-[#DDD0C8] text-[#323232] hover:bg-opacity-80 border border-[#323232] rounded-md transition-colors duration-200"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#323232] hover:bg-opacity-90 text-[#DDD0C8] rounded-md transition-colors duration-200"
                >
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}