import React from 'react';
import '../styles/SortTransactions.css';

const SortTransactions = ({ onSort }) => {
  const handleSort = (criteria) => {
    onSort(criteria);
  };

  return (
    <div>
      <h2>Sort Transactions</h2>
      <button onClick={() => handleSort('category')}>Sort by Category</button>
      <button onClick={() => handleSort('description')}>Sort by Description</button>
    </div>
  );
}

export default SortTransactions;
