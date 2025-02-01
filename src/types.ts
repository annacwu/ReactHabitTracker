export type FrequencyLiteral = "Daily" | "Weekly" | "Twice a Week" | "Custom"; 

export interface CustomFrequency {
    days: string[]; 
}

export type Frequency = CustomFrequency | FrequencyLiteral;

export type CategoryLiteral = "Health" | "Work" | "Social" | "Fun" | "Other"

export type Habit<Freq = Frequency> = {
    name: string;
    frequency: Freq;
    completions: number;
    completionDates: string[];
	category: CategoryLiteral;
}


