import React from 'react';
import { Habit } from '../types';
import styles from './HabitItem.module.css';

interface HabitItemProps {
    habit: Habit;
}

const HabitItem: React.FC<HabitItemProps> = ({ habit }) => {
    return (
        <div className={styles.habitCard}>
            <h3>{habit.name}</h3>
            <p>Frequency: FIXME </p>
            <p>Completions: {habit.completions}</p>
            <button>Complete</button>
            <button>Delete</button>
        </div>
    );
}

export default HabitItem;
