import React, { useState, useEffect } from 'react';

const GoalTracker = ({ index, goal, updateGoal, deleteGoal }) => {
  const [goalCompleted, setGoalCompleted] = useState(false);

  useEffect(() => {
    // Check if the goal is completed on component mount
    checkGoalMet();
  }, []); // Only run once on mount

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedGoal = [...goal]; // Create a copy of the goal array
    updatedGoal[name] = value; // Update the specific field
    updateGoal(index, updatedGoal); // Pass the updated goal data to the parent
  };

  const addSavings = (amount) => {
    // Add savings to the goal
    const updatedGoal = [...goal]; // Create a copy of the goal array
    updatedGoal[2] = parseInt(updatedGoal[2]) + parseInt(amount); // Update saved amount
    updateGoal(index, updatedGoal); // Pass the updated goal data to the parent
    checkGoalMet(); // Check if the goal is completed
  };

  const checkGoalMet = () => {
    // Check if the goal is completed
    const savedAmount = parseInt(goal[2]);
    const targetAmount = parseInt(goal[1]);
    if (savedAmount >= targetAmount && !goalCompleted && targetAmount > 0) {
      setGoalCompleted(true); // Mark the goal as completed
    }
  };

  const resetGoal = () => {
    // Reset the goal to its initial state
    const initialGoal = ['', 0, 0, ''];
    updateGoal(index, initialGoal); // Pass the initial goal data to the parent
    setGoalCompleted(false); // Reset goalCompleted state
  };

  const deleteThisGoal = () => {
    deleteGoal(index); // Delete the goal
  };

  const calculateProgress = () => {
    // Calculate the progress of the goal
    const savedAmount = parseInt(goal[2]);
    const targetAmount = parseInt(goal[1]);
    return ((savedAmount / targetAmount) * 100).toFixed(2);
  };

  const calculateMonthlySaving = () => {
    // Calculate the monthly saving needed to reach the goal
    const savedAmount = parseInt(goal[2]);
    const targetAmount = parseInt(goal[1]);
    const monthsLeft = Math.max(0, Math.ceil((new Date(goal[3]) - new Date()) / (30 * 24 * 60 * 60 * 1000)));
    const remainingAmount = targetAmount - savedAmount;
    return (remainingAmount / monthsLeft).toFixed(2);
  };

  return (
    <div className='GT'>
      <h2>Goal Tracker {index + 1}</h2>
      <div className='GT-I'>
      <label>
        Goal Name:
        <input type="text" name={0} value={goal[0]} onChange={handleChange} />
      </label>
      <label>
        Target Amount ($):
        <input type="number" name={1} value={goal[1]} onChange={handleChange} />
      </label>
      <label>
        Saved Amount ($):
        <input type="number" name={2} value={goal[2]} onChange={handleChange} />
      </label>
      <label>
        Deadline:
        <input type="date" name={3} value={goal[3]} onChange={handleChange} />
      </label>
      </div>
      {/* Buttons */}
      <div className='GT-B'>
      <button className = "btn btn-primary mx-2"onClick={() => addSavings(prompt("Enter the amount you want to add"))}>Add Savings</button>
      <button className = "btn btn-primary mx-2"onClick={resetGoal}>Reset</button>
      <button className = "btn btn-primary mx-2"onClick={() => setGoalCompleted(true)} disabled={goalCompleted}>Mark Goal as Completed</button>
      <button className = "btn btn-primary mx-2"onClick={deleteThisGoal}>Delete</button>
      </div>
      <div className='GT-P'>
        <p>Progress: {calculateProgress()}%</p>
        <p>Monthly Saving Needed: ${calculateMonthlySaving()}</p>
      </div>

      {goalCompleted && <p>Congratulations! You've reached your goal and earned Rs 100 virtual money.</p>}
    </div>
  );
};

export default GoalTracker;
