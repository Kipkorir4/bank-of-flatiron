import React, { useState } from 'react';
import TransactionList from './components/TransactionList';
import AddTransactionForm from './components/AddTransactionForm';
import FilterTransactions from './components/FilterTransactions';
import SortTransactions from './components/SortTransactions';
import './App.css';

function App() {
  const [transactions, setTransactions] = useState([
    { id: 1, date: '2024-04-01', description: 'Wi-Fi', amount: 500, category: 'Rent' },
    { id: 2, date: '2024-04-02', description: 'Unga', amount: 400, category: 'Shopping' },    
    { id: 3, date: '2024-04-02', description: 'Chapo ya Mathee', amount: 500, category: 'Food' },    
    { id: 4, date: '2024-04-02', description: 'Rent', amount: 6500, category: 'Rent' },    
    { id: 5, date: '2024-04-02', description: 'Nyama', amount: 1200, category: 'Food' },    
    { id: 6, date: '2024-04-02', description: 'Nyama Pro Max', amount: 3000, category: 'Shopping' },    
    { id: 7, date: '2024-04-02', description: 'Mayai-Pasua', amount: 1100, category: 'Food' },    
    { id: 8, date: '2024-04-02', description: 'Stima', amount: 400, category: 'Rent' },    
    { id: 9, date: '2024-04-02', description: 'ETC', amount: 3000, category: 'Others' },    
  ]);

  const [filteredTransactions, setFilteredTransactions] = useState(transactions);

  const addTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
    setFilteredTransactions([...transactions, newTransaction]);
  };

  const filterTransactions = (searchTerm) => {
    if (searchTerm === '') {
      setFilteredTransactions(transactions);
    } else {
      const filtered = transactions.filter(transaction =>
        transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredTransactions(filtered);
    }
  };

  const sortTransactions = (criteria) => {
    const sorted = [...filteredTransactions].sort((a, b) => {
      if (criteria === 'category') {
        return a.category.localeCompare(b.category);
      } else if (criteria === 'description') {
        return a.description.localeCompare(b.description);
      }
    });
    setFilteredTransactions(sorted);
  };

  return (
    <div id='bodyContainer'>
      <h1>The Royal Bank of Flatiron</h1>
      <FilterTransactions onFilter={filterTransactions} />
      <AddTransactionForm onAddTransaction={addTransaction} />
      <SortTransactions onSort={sortTransactions} />
      <TransactionList transactions={filteredTransactions} />
    </div>
  );
}

export default App;
