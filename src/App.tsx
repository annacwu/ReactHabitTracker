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

	const onComplete = (habit: Habit) => {
		const todayISO = new Date().toISOString().split('T')[0]; 
		const todayDay = new Date().toLocaleString('en-US', {weekday: 'long'});
		
		if (isCustomFrequency(habit)) {
        		if (!habit.frequency.days.includes(todayDay)) {
            		alert(`This habit cannot be completed today (${todayDay}). Allowed days: ${habit.frequency.days.join(', ')}`);
            		return;
        		}
		}

		if (habit.completionDates.includes(todayISO)) {
			alert(`You've already completed ${habit.name} today.`);
			return;
		}

		const updatedHabits = habits.map((h) => 
			h.name === habit.name
			? {...h, completions: h.completions + 1,
				completionDates: [...h.completionDates, todayISO]} : h 
			);

		setHabits(updatedHabits);
	};

	const onDelete = (habit: Habit) => {
		setHabits(habits.filter((h) => h.name !== habit.name));	
	}

  	return (
	  <div>
	  	<h1> Habit Tracker </h1>
		<AddHabitForm addHabit={addHabit} />
		<HabitList habits={habits} onComplete={onComplete} onDelete={onDelete}/>
	  </div>
      );
}

export default App;
