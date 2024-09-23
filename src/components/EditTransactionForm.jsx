// src/components/EditTransactionForm.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";

const EditTransactionForm = ({ transaction, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    time: "",
    title: "",
    amount: "",
    category: "",
  });

  useEffect(() => {
    if (transaction) {
      setFormData({
        time: transaction.time,
        title: transaction.title,
        amount: transaction.amount,
        category: transaction.category,
      });
    }
  }, [transaction]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`https://expense-tracker-backend-es67.onrender.com/api/transactions/${transaction._id}`, formData);
      onSave();
    } catch (err) {
      console.error("Update error:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white dark:bg-gray-800 shadow-md rounded-lg">
      <div className="mb-4">
        <label className="block text-gray-700 dark:text-gray-300">Time</label>
        <input
          type="text"
          name="time"
          value={formData.time}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 dark:border-gray-700 rounded-md"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 dark:text-gray-300">Title</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 dark:border-gray-700 rounded-md"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 dark:text-gray-300">Amount</label>
        <input
          type="number"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 dark:border-gray-700 rounded-md"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 dark:text-gray-300">Category</label>
        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 dark:border-gray-700 rounded-md"
        />
      </div>
      <div className="flex justify-end">
        <button type="submit" className="px-4 py-2 bg-green-700 text-white rounded-md mr-2">
          Save
        </button>
        <button type="button" onClick={onCancel} className="px-4 py-2 bg-gray-500 text-white rounded-md">
          Cancel
        </button>
      </div>
    </form>
  );
};

export default EditTransactionForm;
