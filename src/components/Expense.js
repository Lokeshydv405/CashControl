import React, { useState, useEffect } from 'react';

export default function Expense({ categoryData: initialCategoryData, setCategoryData }) {
  const [transactions, setTransactions] = useState(() => {
    const storedTransactions = localStorage.getItem('transactions');
    return storedTransactions ? JSON.parse(storedTransactions) : [];
  });
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState('expense');
  const [category, setCategory] = useState('');
  const [income, setIncome] = useState(() => parseFloat(localStorage.getItem('income')) || 0);
  const [expense, setExpense] = useState(() => parseFloat(localStorage.getItem('expense')) || 0);
  const [balance, setBalance] = useState(() => parseFloat(localStorage.getItem('balance')) || 0);
  const [categoryData, updateCategoryData] = useState(initialCategoryData);

  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(transactions));
    localStorage.setItem('income', income);
    localStorage.setItem('expense', expense);
    localStorage.setItem('balance', balance);
    // Update categoryData in App.js whenever transactions change
    updateCategoryData(calculateCategoryData());
    setCategoryData(calculateCategoryData());
  }, [transactions, income, expense, balance, setCategoryData]);

  // Function to calculate categoryData from transactions
  const calculateCategoryData = () => {
    const newCategoryData = { ...initialCategoryData };
    transactions.forEach(transaction => {
      if (transaction.type === 'expense') {
        newCategoryData[transaction.category] += transaction.amount;
      }
    });
    return newCategoryData;
  };

  const handleAddTransaction = () => {
    const newTransaction = {
      id: Math.random(),
      amount: parseFloat(amount),
      type: type,
      category: category
    };
    if (type === "income") {
      setIncome(income + parseFloat(amount));
      setBalance(balance + parseFloat(amount));
    }
    else {
      setExpense(expense + parseFloat(amount));
      setBalance(balance - parseFloat(amount));
    }
    setTransactions([...transactions, newTransaction]);
    setAmount(0);
    setCategory('');
  };

  const clearTransactions = () => {
    setTransactions([]);
  };
  const handleReset = () => {
    setTransactions([]);
    setAmount(0);
    setType('expense');
    setCategory('');
    setIncome(0);
    setExpense(0);
    setBalance(0);
    setCategoryData({ ...initialCategoryData });
  };
  return (
    <div className='container my-6'>
      <h1 className="text-center text-capitalize " style={{ margin: '80px 0px', fontSize: '4rem' }}>
        Cash Manager
      </h1>
      <div className='App-E-d'>
        <span className="App-E-b">Income: &#8377;{income}</span>
        <span className="App-E-b">Balance: &#8377;{balance}</span>
        <span className="App-E-b" >Expense: &#8377;{expense}</span>
      </div>
      <div className="App-E-d">
        <div>
          <label htmlFor="amount">Amount:</label>
          <input
            type="number"
            id="amount"
            value={amount}
            required
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="type">Type:</label>
          <select
            className="App-select"
            id="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="expense">Expense</option>
            <option value="income">Income</option>
          </select>
        </div>

        <div>
          <label htmlFor="category">Category:</label>
          <select
            id="category"
            value={category}
            className="App-select"
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Select Category</option>
            <option value="food">Food</option>
            <option value="stationary">Stationary</option>
            <option value="travel">Travel</option>
            <option value="rent">Rent</option>
            <option value="recharges">Recharges</option>
            <option value="others">Others</option>
          </select>
        </div>

        <button
          className="App-E-but"
          onClick={handleAddTransaction}
          disabled={parseFloat(amount) === 0}
        >
          Add Transaction
        </button>
        <button className="App-E-but" onClick={clearTransactions}>Clear Transactions</button>
        <button className="App-E-but" onClick={handleReset}>Reset</button>

      </div>
      <div className="App-E-T">
        <h3>Transaction History</h3>
        <ol >
          {transactions.map((transaction) => (
            <li key={transaction.id}>
              {transaction.type === 'expense' ? '-' : '+'} &#8377;{transaction.amount} ({transaction.category})
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
