import React, { useState } from 'react';
import AddHabitForm from './components/AddHabitForm';
import HabitList from './components/HabitList';
import { Habit } from './types';

const App: React.FC = () => {
	const [habits, setHabits] = useState<Habit[]>([]);

  	return (
	  <div>
	  	<h1> Habit Tracker </h1>
	  </div>
      );
}

export default App;
