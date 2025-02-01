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
            <h3 className={styles.habitTitle}>{habit.name}</h3>
            <p className={styles.habitDetails}>Frequency: {frequencyText} </p>
            <p className={styles.habitDetails}>Completions: {habit.completions}</p>
			<div className={styles.buttonGroup}>
            	<button className={styles.completeButton} onClick={() => onComplete(habit)}>Complete</button>
            	<button className={styles.deleteButton} onClick={() => onDelete(habit)}>Delete</button>
			</div>
        </div>
    );
}

export default HabitItem;
