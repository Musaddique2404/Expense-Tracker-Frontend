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
    <form onSubmit={handleSubmit} className="p-4 bg-[#faf0e6] shadow-xl rounded-lg">
      <div className="mb-4">
        <label className="block text-[#323232]">Time</label>
        <input
          type="text"
          name="time"
          value={formData.time}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-[#323232] rounded-md bg-[#faf0e6] text-[#323232]"
        />
      </div>
      <div className="mb-4">
        <label className="block text-[#323232]">Title</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-[#323232] rounded-md bg-[#faf0e6] text-[#323232]"
        />
      </div>
      <div className="mb-4">
        <label className="block text-[#323232]">Amount</label>
        <input
          type="number"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-[#323232] rounded-md bg-[#faf0e6] text-[#323232]"
        />
      </div>
      <div className="mb-4">
        <label className="block text-[#323232]">Category</label>
        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-[#323232] rounded-md bg-[#faf0e6] text-[#323232]"
        />
      </div>
      <div className="flex justify-end">
        <button type="submit" className="px-4 py-2 bg-[#323232] text-[#faf0e6] rounded-md mr-2 hover:bg-opacity-90">
          Save
        </button>
        <button type="button" onClick={onCancel} className="px-4 py-2 bg-[#faf0e6] text-[#323232] hover:bg-opacity-80 rounded-md">
          Cancel
        </button>
      </div>
    </form>
  );
};

export default EditTransactionForm;
