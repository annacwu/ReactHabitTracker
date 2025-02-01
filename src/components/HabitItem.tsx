import React from 'react';
import { Habit } from '../types';
import styles from './HabitItem.module.css';
import { isCustomFrequency } from '../utils';

interface HabitItemProps {
    habit: Habit;
	onComplete: (habit: Habit) => void;
	onDelete: (habit: Habit) => void;
}

const HabitItem: React.FC<HabitItemProps> = ({ habit, onComplete, onDelete }) => {
	const frequencyText = isCustomFrequency(habit) 
		? `${habit.frequency.days.join(", ")}` : String(habit.frequency);

    return (
        <div className={styles.habitCard}>
            <h3>{habit.name}</h3>
            <p>Frequency: {frequencyText} </p>
            <p>Completions: {habit.completions}</p>
            <button onClick={() => onComplete(habit)}>Complete</button>
            <button onClick={() => onDelete(habit)}>Delete</button>
        </div>
    );
}

export default HabitItem;
