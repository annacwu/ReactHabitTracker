import React, { useState } from 'react';
import AddHabitForm from './components/AddHabitForm';
import HabitList from './components/HabitList';
import { Habit } from './types';

const App: React.FC = () => {
	const [habits, setHabits] = useState<Habit[]>([]);

	const addHabit = (habit: Habit) => {
		setHabits((prev) => [...prev, habit]);
	}

  	return (
	  <div>
	  	<h1> Habit Tracker </h1>
		<AddHabitForm addHabit={addHabit} />
	  </div>
      );
}

export default App;
