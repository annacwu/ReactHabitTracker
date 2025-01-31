import React from 'react';
import { Habit, isCustomFrequency } from '../types';
import HabitItem from './HabitItem';

interface HabitListProps {
    habits: Habit[];
    onComplete: (index: number) => void;
    onDelete: (index: number) => void;
}


const HabitList:React.FC<HabitListProps> = ({ habits, onComplete, onDelete }) => {
    const today = new Date().toLocaleDateString();
    // DOESNT CURRENTLY HANDLE WEEKLY/TWICE A WEEK CASES, STILL NEED TO PORT THAT
    const habitsForToday = habits.filter((habit) => {
        if (isCustomFrequency(habit)) {
            return habit.frequency.days.includes(today);
        } else {
            return habit.frequency === "Daily";
        }
    })

    return (
        <div>
            <h2>Habits to Complete Today</h2>
            <div>
                {habitsForToday.length > 0 ? (
                    habitsForToday.map((habit, index) => (
                        <HabitItem
                        key={index}
                        habit={habit}
                        onComplete={() => onComplete(index)}
                        onDelete={() => onDelete(index)} />
                    ))
                ) : (
                    <p>No habits to complete today!</p>
                )}
            </div>

            <h2>All Habits</h2>
            <div>
                {habits.map((habit, index) => (
                    <HabitItem
                    key={index}
                    habit={habit}
                    onComplete={() => onComplete(index)}
                    onDelete={() => onDelete(index)} />
                ))}
            </div>
        </div>
    );
};

export default HabitList;