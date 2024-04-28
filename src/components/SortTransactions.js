import React from 'react';

const SortTransactions = ({ onSort }) => {
  const handleSortChange = (e) => {
    onSort(e.target.value);
  };

  return (
    <div className="sort-container">
      <h2>Sort Transactions</h2>
      <select onChange={handleSortChange}>
        <option value="category">Sort by Category</option>
        <option value="description">Sort by Description</option>
      </select>
    </div>
  );
}

export default SortTransactions;
