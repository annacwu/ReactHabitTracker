import React from 'react';
import { Habit } from '../types';
import styles from './HabitItem.module.css';

interface HabitItemProps {
    habit: Habit;
    onComplete: () => void;
    onDelete: () => void;
}

const HabitItem: React.FC<HabitItemProps> = ({ habit, onComplete, onDelete}) => {
    return (
        <div className={styles.habitCard}>
            <h3>{habit.name}</h3>
            <p>Frequency: FIXME </p>
            <p>Completions: {habit.completions}</p>
            <button onClick={onComplete}>Complete</button>
            <button onClick={onDelete}>Delete</button>
        </div>
    );
}

export default HabitItem;