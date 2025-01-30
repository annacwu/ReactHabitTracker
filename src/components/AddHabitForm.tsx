import React, { useState } from 'react';
import { Habit, Frequency, FrequencyLiteral, CustomFrequency } from "../types";

interface AddHabitFormProps {
	addHabit: (habit: Habit) => void;
}

const AddHabitForm: React.FC<AddHabitFormProps> = ({ addHabit }) => {
	const [name, setName] = useState<string>("");
	const [frequency, setFrequency] = useState<FrequencyLiteral>("Daily");
	const [customDays, setCustomDays] = useState<string[]>([]);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		if (!name.trim()) return;

		let habitFrequency: Frequency;
		if (frequency === "Custom") {
			habitFrequency = { days: customDays };
		} else {
			habitFrequency = frequency;
		}

		const newHabit: Habit = {
			name, 
			frequency: habitFrequency,
			completions: 0,
			completionDates: []
		};

		addHabit(newHabit);
		setName("");
		setFrequency("Daily");
		setCustomDays([]);
	}

	return (
		<form onSubmit={handleSubmit}>
			<input 
			type="text" 
			value={name} 
			onChange={(e) => setName(e.target.value)} 
			placeholder="Enter a habit name"/>
			<select value={frequency} onChange={(e) => setFrequency(e.target.value as FrequencyLiteral)}>
				<option value="Daily">Daily</option>
				<option value="Weekly">Weekly</option>
				<option value="Twice a Week">Twice a Week</option>
				<option value="Custom">Custom</option>
			</select>

			{frequency === "Custom" && (
				<div>
					<label>Select Custom Days:</label>
					{["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
					.map((day) =>
						<label key={day}>
							<input
							type="checkbox"
							value={day}
							checked={customDays.includes(day)} 
							onChange={(e) => {
								if (e.target.checked) {
									setCustomDays([...customDays, day]);
								} else {
									setCustomDays(customDays.filter((d) => d !== day));
								}
							}}/>
							{day}
						</label>
					)}
				</div>
			)}

			<button type="submit">Add Habit</button>
		</form>
	);
}

export default AddHabitForm;
