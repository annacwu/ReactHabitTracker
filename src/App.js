import React, { useState } from 'react';
import AddHabitForm from './components/AddHabitForm';
import HabitList from './components/HabitList';

function App() {
	const [habits, setHabits] = useState([]);

	const addHabit = (name, frequency) => {
		const newHabit = {name, frequency, completed: 0, completionDate};
		setHabits([...habits, newHabit]);
	};

	const markAsCompleted = (habit) => {
		const todayDate = new Date();
	}

  return (
	  <div>
	  	<h1> Habit Tracker </h1>
	  </div>
      );
}

export default App;
