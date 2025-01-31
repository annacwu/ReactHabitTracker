import { Habit, CustomFrequency, Frequency } from './types';

export function isCustomFrequency(habit: Habit): habit is Habit<CustomFrequency> {
	return typeof habit.frequency === "object" && "days" in habit.frequency;
}

export function needsCompletionToday(habit: Habit, today: Date): boolean {
    const todayISO = today.toISOString().split('T')[0];
    const todayDay = today.toLocaleString('en-US', { weekday: 'long' });
    const dayOfWeek = today.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday

    if (habit.frequency === "Daily") { 
        return !habit.completionDates.includes(todayISO);
    } else if (habit.frequency === "Weekly") {
        if (dayOfWeek === 6) {
            return isCompletedThisWeek(habit, today) === 0;
        }
    } else if (habit.frequency === "Twice a Week") {
        const completionsSoFar = isCompletedThisWeek(habit, today);
        if (dayOfWeek === 5) { // if it is the last day of week and it hasn't been completed yet, it needs to be completed
            return completionsSoFar < 1;
        }
        if (dayOfWeek === 6) { // if it is the last day of week and it has only been completed once, it needs to be completed
            return completionsSoFar < 2 && !habit.completionDates.includes(todayISO);
        }
    } else if (isCustomFrequency(habit)) {
        if (habit.frequency.days.includes(todayDay)) {
            return !habit.completionDates.includes(todayISO);
        }
    }

    return false;
}

export function filterHabits(habits: Habit[], today: Date) {
    const needsCompletion = habits.filter(habit => needsCompletionToday(habit, today));
    const doesNotNeedCompletion = habits.filter(habit => !needsCompletion.includes(habit));

    return {needsCompletion, doesNotNeedCompletion}; // return in form of an object
}

export function isCompletedThisWeek(habit: Habit, today: Date) {
    const weekStart = new Date(today); // start with date in YYYY-MM-DD
    weekStart.setDate(today.getDate() - today.getDay()); // set to the beginning of the week 

    const weekEnd = new Date(today); 
    weekEnd.setDate(today.getDate() + (6 - today.getDay())); // set to end of the week

    const weekCompleted = habit.completionDates.filter(date => {
        const dateObj = new Date(date); // turn today's date into the YYYY-MM-DD format

        // check if the date is within this week and not today
        return (
            dateObj >= weekStart && dateObj <= weekEnd && dateObj.getDay() !== today.getDay()
        );
    });
    return weekCompleted.length;
}
