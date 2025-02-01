import React from 'react';
import { Habit } from '../types';
import HabitItem from './HabitItem';
import { filterHabits, isCustomFrequency } from '../utils';

interface HabitListProps {
    habits: Habit[];
	onComplete: (habit: Habit) => void;
	onDelete: (habit: Habit) => void;
}


const HabitList:React.FC<HabitListProps> = ({ habits, onComplete, onDelete }) => {
    const today = new Date();
	const  { needsCompletion, doesNotNeedCompletion } = filterHabits(habits, today);

    return (
        <div>
            <h2>Habits to Complete Today</h2>
            <div>
                {needsCompletion.length > 0 ? (
                    needsCompletion.map((habit) => (
                        <HabitItem
                        key={habit.name}
                        habit={habit}
						onComplete={onComplete}
						onDelete={onDelete} />
                    ))
                ) : (
                    <p>No habits to complete today!</p>
                )}
            </div>

            <h2>All Habits</h2>
            <div>
                {doesNotNeedCompletion.map((habit) => (
                    <HabitItem
                    key={habit.name}
                    habit={habit} 
					onComplete={onComplete}
					onDelete={onDelete} />
                ))}
            </div>
        </div>
    );
};

export default HabitList;
