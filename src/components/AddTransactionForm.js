import React, { useState } from 'react';
import '../styles/AddTransactionForm.css';
const AddTransactionForm = ({ onAddTransaction }) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: Math.random(),
      date,
      description,
      amount,
      category
    };
    onAddTransaction(newTransaction);
    setDescription('');
    setAmount('');
    setCategory('');
    setDate('');
  };

  return (
    <>
      <h2>Add New Transaction</h2>
      <form onSubmit={handleSubmit}>
        <fieldset id='inputsBox'>
          <label>
            Date:
            <input id='datefield' type="date" placeholder="Date" value={date} onChange={(e) => setDate(e.target.value)} />
          </label>
          <input id = "descriptionfield" type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
          <input id='amountfield' type="number" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
          <input id='categoryfield' type="text" placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} />
          <button type="submit">Add Transaction</button>
        </fieldset>
      </form>
    </>
  );
}

export default AddTransactionForm;
