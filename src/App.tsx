import React, { useState } from 'react';
import AddHabitForm from './components/AddHabitForm';
import HabitList from './components/HabitList';
import { Habit } from './types';

const App: React.FC = () => {
	const [habits, setHabits] = useState<Habit[]>([]);

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
