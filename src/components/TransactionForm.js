// TransactionForm.js
import React, { useState } from 'react';

const TransactionForm = ({ addTransaction }) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const[date,setDate]=useState('')
  const handleSubmit = (e) => {
    e.preventDefault();
    addTransaction(description, amount);
    setDescription('');
    setAmount('');
    setAmount('')
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />
       <input
        type="Date"
        placeholder="Date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
     
      <button type="submit">Add Transaction</button>
    </form>
  );
};

export default TransactionForm;
