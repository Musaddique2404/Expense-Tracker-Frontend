import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import EditTransactionForm from "./EditTransactionForm";
import NoDataMessage from "./NoDataMessage";

const formatTime = (time) => {
  const [hours, minutes] = time.split(":").map(Number);
  const formattedHours = hours % 12 || 12; // Convert to 12-hour format
  const period = hours < 12 ? "AM" : "PM"; // Determine AM/PM
  return `${formattedHours}:${minutes < 10 ? "0" : ""}${minutes} ${period}`;
};

const TransactionTable = ({ searchTerm, currentMonth }) => {
  const [transactions, setTransactions] = useState([]);
  const [error, setError] = useState("");
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await axios.get(
          "https://expense-tracker-backend-es67.onrender.com/api/transactions/"
        );
        setTransactions(response.data);
      } catch (err) {
        setError(`Failed to fetch transactions: ${err.message}`);
        console.error("Fetch error:", err);
      }
    };

    fetchTransactions();
  }, [transactions]);

  const filteredTransactions = transactions.filter(
    (transaction) =>
      transaction.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      moment(transaction.date).isSame(currentMonth, "month")
  );

  const dates = Array.from(
    new Set(
      filteredTransactions.map((t) => moment(t.date).format("YYYY-MM-DD"))
    )
  ).sort((a, b) => moment(b).diff(moment(a)));

  const handleEdit = (transaction) => {
    setSelectedTransaction(transaction);
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    setSelectedTransaction(null);
    fetchTransactions();
  };

  const handleCancel = () => {
    setIsEditing(false);
    setSelectedTransaction(null);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `https://expense-tracker-backend-es67.onrender.com/api/transactions/${id}`
      );
      setTransactions(
        transactions.filter((transaction) => transaction._id !== id)
      );
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="p-4 bg-gray-100 dark:bg-gray-900">
      {error && <p className="text-red-500">{error}</p>}
      {isEditing && selectedTransaction && (
        <EditTransactionForm
          transaction={selectedTransaction}
          onSave={handleSave}
          onCancel={handleCancel}
        />
      )}
      {dates.length === 0 ? (
        <NoDataMessage />
      ) : (
        dates.map((day) => (
          <div key={day} className="mb-6">
            <div className="font-bold text-xl mb-2 text-gray-900 dark:text-gray-100">
              {day}
            </div>
            <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden border border-gray-300 dark:border-gray-700">
              <div className="grid grid-cols-5 gap-4 p-4 border-b font-semibold text-gray-900 dark:text-gray-100">
                <div className="text-xs sm:text-sm md:text-base">Time</div>
                <div className="text-xs sm:text-sm md:text-base">Title</div>
                <div className="text-xs sm:text-sm md:text-base">Amount</div>
                <div className="text-xs sm:text-sm md:text-base">Category</div>
                <div className="text-xs sm:text-sm md:text-base">Actions</div>
              </div>

              {filteredTransactions
                .filter(
                  (transaction) =>
                    moment(transaction.date).format("YYYY-MM-DD") === day
                )
                .sort((a, b) => moment(b.date).diff(moment(a.date)))
                .map((transaction) => (
                  <div
                    key={transaction._id}
                    className="grid grid-cols-5 gap-4 p-4 border-b border-gray-300 dark:border-gray-700"
                  >
                    <div className="text-sm sm:text-base dark:text-gray-100">
                      {formatTime(transaction.time)}
                    </div>
                    <div className="text-sm sm:text-base dark:text-gray-100">
                      {transaction.title}
                    </div>
                    <div className="text-sm sm:text-base dark:text-gray-100">
                      ₹{transaction.amount}
                    </div>
                    <div className="text-sm sm:text-base dark:text-gray-100">
                      {transaction.category}
                    </div>
                    <div className="text-sm sm:text-xs dark:text-gray-100 flex flex-col sm:flex-row">
                      <span
                        onClick={() => handleEdit(transaction)}
                        className="cursor-pointer text-blue-500 hover:underline mb-1 sm:mb-0 sm:mr-2"
                      >
                        Edit
                      </span>
                      <span
                        onClick={() => handleDelete(transaction._id)}
                        className="cursor-pointer text-red-500 hover:underline"
                      >
                        Delete
                      </span>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default TransactionTable;
