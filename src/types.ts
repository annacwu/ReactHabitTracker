export type FrequencyLiteral = "Daily" | "Weekly" | "Twice a Week" | "Custom"; 

export interface CustomFrequency {
    days: string[]; 
}

export type Frequency = CustomFrequency | FrequencyLiteral;

export type Habit<Freq = Frequency> = {
    name: string;
    frequency: Freq;
    completions: number;
    completionDates: string[];
}

// not entirely sure if i should define this typeguard here or somewhere else
export function isCustomFrequency(habit: Habit): habit is Habit<CustomFrequency> {
	return typeof habit.frequency === "object" && "days" in habit.frequency;
}
