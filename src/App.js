// App.js
import React, { useState, useEffect } from 'react';
import TransactionForm from './components/TransactionForm';
import TransactionTable from './components/TransactionTable';
import './App.css'

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('http://localhost:8001/transactions') 
      .then(response => response.json())
      .then(data => {
        setTransactions(data);
      })
     
  }, []);

  const addTransaction = (description, amount) => {
    const newTransaction = {
      description,
      amount: parseFloat(amount),
    };
    
    setTransactions([...transactions, newTransaction]);
  };

  const filterTransactions = transactions.filter(transaction =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div class="home">
      <h1 className='h1'>Transaction App</h1>
      <input
        type="text"
        placeholder="Search by description"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <TransactionForm addTransaction={addTransaction} />
      <TransactionTable transactions={filterTransactions}  />
    </div>
  );
};



export default App;
