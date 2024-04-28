import React, { useState } from 'react';
import '../styles/FilterTransactions.css';

const FilterTransactions = ({ onFilter }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    onFilter(term);
  };

  return (
    <div>
      <input 
        id='filterbox'
        type="text" 
        placeholder="Search your Recent Transactions" 
        value={searchTerm} 
        onChange={handleSearch} 
      />
    </div>
  );
}

export default FilterTransactions;
