import React,{ useState ,useEffect} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Expense from './components/Expense';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Profile from './components/Profile';
import News from './components/News';
import Information from './components/Information';
import BorrowList from './components/BorrowList';
import GoalManager from './components/GoalManager';
// import News from './components/News';
function App() {
  const income = parseFloat(localStorage.getItem('income')) || 0;
  const expense = parseFloat(localStorage.getItem('expense')) || 0;
  const balance = parseFloat(localStorage.getItem('balance')) || 0;
  const target = parseFloat(localStorage.getItem('target')) || 0;
  const transactions = JSON.parse(localStorage.getItem('transactions')) || [];
  const initialProfile = {
    name: "John Doe",
    age: 30,
    occupation: "Software Engineer",
    accountBalance: "$5000",
    email: "johndoe@example.com",
    gender: "Male",
    accountType: "Premium"
  };
  const initialCategoryData = {
    food: 0,
    stationary: 0,
    travel: 0,
    rent: 0,
    recharges: 0,
    others: 0
  };

  // Initialize categoryData state with initial values
  const [categoryData, setCategoryData] = useState(initialCategoryData);
  useEffect(() => {
    setCategoryData(initialCategoryData);
  }, []);
  
  // Print categoryData to console
  return (
    <BrowserRouter>
      <div>
        <Navbar title="Cash Control" balance={balance} savings={target}/>
        <Routes>
        <Route key ="home" exact path="/" element={<Home data = {categoryData} try={"helllo"}/>}/>
        <Route key ="profile" exact path="/profile" element={<Profile initialProfile={initialProfile}/>}/>
        <Route key ="BorrowList" exact path="/BorrowList" element={<BorrowList/>}/>/* Add the BorrowList route here */
        <Route key ="Information" exact path="/Information" element={<Information/>}/>
        <Route key ="goals" exact path="/Goals" element={<GoalManager/>}/>
        <Route key ="news" exact path="/News" element={<News apikey={'b0c302d98eeb469a85f923e468fa3344'} topic="Finance related" pagesize={8} country="in" cat="business" />}/>
        <Route key ="general" exact path="/Expense" element={<Expense 
                initialIncome={income}
                initialExpense={expense}
                initialBalance={balance}
                initialTransactions={transactions}
                categoryData={categoryData} setCategoryData={setCategoryData}
            />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
