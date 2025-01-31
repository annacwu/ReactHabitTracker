import React from 'react';
import { Habit } from '../types';

interface HabitItemProps {
    habit: Habit;
    onComplete: () => void;
    onDelete: () => void;
}

const HabitItem: React.FC<HabitItemProps> = ({ habit, onComplete, onDelete}) => {
    return (
        <div>
            <h3>{habit.name}</h3>
            <p>Frequency: FIXME </p>
            <p>Completions: {habit.completions}</p>
            <button onClick={onComplete}>Complete</button>
            <button onClick={onDelete}>Delete</button>
        </div>
    );
}

export default HabitItem;