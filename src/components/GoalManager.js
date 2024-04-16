import React, { useState, useEffect } from 'react';
import GoalTracker from './GoalTracker';

const GoalManager = () => {
  // Initialize goals state with data from local storage or an empty array
  const [goals, setGoals] = useState(() => {
    const savedGoals = JSON.parse(localStorage.getItem('goals'));
    return savedGoals || [];
  });

  // Update local storage whenever goals change
  useEffect(() => {
    localStorage.setItem('goals', JSON.stringify(goals));
  }, [goals]);

  const addGoal = () => {
    // Create a new goal and add it to the goals array
    const newGoal = ['', 0, 0, '']; // Initialize a new goal
    setGoals(prevGoals => [...prevGoals, newGoal]);
  };
  const deleteGoal = (index) => {
    // Remove the goal at the specified index
    setGoals(prevGoals => prevGoals.filter((_, i) => i !== index));
  };
  // Update a goal at a specific index with new data or delete it
  const updateGoal = (index, updatedGoal) => {
    if (updatedGoal === null) {
      // Delete the goal at the specified index
      setGoals(prevGoals => prevGoals.filter((_, i) => i !== index));
    } else {
      // Update the goal at the specified index
      setGoals(prevGoals => {
        const updatedGoals = [...prevGoals]; // Create a copy of the goals array
        updatedGoals[index] = updatedGoal; // Update the goal at the specified index
        return updatedGoals; // Return the updated goals array
      });
    }
  };

  return (
    <div className='container' style={{ margin: '80px 10px 10px 10px' }}>
      <h2 className='GM-h'>Goal Manager</h2>
      <button onClick={addGoal}>Add New Goal</button>
      <div className='GM-g'>
        {goals.map((goal, index) => (
          <div key={index}>
            <GoalTracker index={index} goal={goal} updateGoal={updateGoal} deleteGoal={deleteGoal} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GoalManager;
