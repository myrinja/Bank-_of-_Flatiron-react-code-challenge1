// TransactionTable.js
import React from 'react';

const TransactionTable = ({ transactions }) => (
  <table >
    <thead>
      <tr className='table'>
        <th className='th1'>Date</th>
        <th className='th2'>Description</th>
        <th className='th3'>Category</th>
        <th className='th4'>Amount</th>
      </tr>
    </thead>
    <tbody>
      {transactions.map((transaction) => (
        <tr key={transaction.id}>
          <td>{transaction.date}</td>
          <td>{transaction.description}</td>
          <td>{transaction.category}</td>
          <td>{transaction.amount}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default TransactionTable;
