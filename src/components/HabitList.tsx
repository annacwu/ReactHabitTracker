import React from 'react';
import { Habit } from '../types';
import HabitItem from './HabitItem';
import { filterHabits, isCustomFrequency } from '../utils';

interface HabitListProps {
    habits: Habit[];
}


const HabitList:React.FC<HabitListProps> = ({ habits }) => {
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
                        habit={habit} />
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
                    habit={habit} />
                ))}
            </div>
        </div>
    );
};

export default HabitList;
