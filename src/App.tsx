import React, { useState, useEffect } from 'react';
import AddHabitForm from './components/AddHabitForm';
import HabitList from './components/HabitList';
import HabitItem from './components/HabitItem';
import { Habit } from './types';
import { isCustomFrequency } from './utils';

const App: React.FC = () => {
	const [habits, setHabits] = useState<Habit[]>(() => {
		const storedHabits = localStorage.getItem("habits");
		return storedHabits ? JSON.parse(storedHabits) : [];
	});
	
	useEffect(() => {
		localStorage.setItem("habits", JSON.stringify(habits));
	}, [habits]);

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
		<HabitList habits={habits} />
	  </div>
      );
}

export default App;
