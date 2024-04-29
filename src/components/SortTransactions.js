import React from 'react';
import "../styles/SortTransactions.css"

const SortTransactions = ({ onSort }) => {
  const handleSortChange = (e) => {
    onSort(e.target.value);
  };

  return (
    <div id="sortcontainer">
      <h2>Sort Transactions Alphabetically:</h2>
      <div >
      <select onChange={handleSortChange}>
        <option value="category">Sort alphabetically by Category</option>
        <option value="description">Sort alphabetically by Description</option>
      </select>
      </div>
      
    </div>
  );
}

export default SortTransactions;
