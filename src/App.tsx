import React, { useState } from 'react';
import AddHabitForm from './components/AddHabitForm';
import HabitList from './components/HabitList';
import HabitItem from './components/HabitItem';
import { Habit, isCustomFrequency } from './types';

const App: React.FC = () => {
	const [habits, setHabits] = useState<Habit[]>([]);

	const addHabit = (habit: Habit) => {
		setHabits((prev) => [...prev, habit]);
	}

	const onComplete = () => {
		return
	}

	const onDelete = () => {
		return
	}

  	return (
	  <div>
	  	<h1> Habit Tracker </h1>
		<AddHabitForm addHabit={addHabit} />
		<HabitList habits={habits} onComplete={onComplete} onDelete={onDelete} />
	  </div>
      );
}

export default App;
