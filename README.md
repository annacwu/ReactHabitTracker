# Habit Tracker in React (Learning React from Typescript)

Note: Much of the logic in the code I kept the same, the primary differences
take place with rendering everything on screen using TSX. 

### Hooks:
- I primarily used the `useState` hook to add state to my components, and
allow the user to input each of the different properties of a Habit.
- I did use `useEffect` once, though only briefly after I looked up how to do
the local browser storage stuff in React.

### Reusing Typescript:
- `types.ts` contains all the same typing from the top of my `app.ts` file in
my last project, plus one new one I added this time around.
- `utils.ts` contains all the typescript logic from the previous iteration of
this app, including the `isCustomFrequency` typeguard.
    - I organized it like that to mostly keep components and their unique logic
    separate for a modular (?) organization of the project (I think, attempting
    to follow best practices).

### Components and Style: 
- `AddHabitForm` is the component handling the user input form at the top of the
rendering.
- `HabitItem` is the component handling the habit cards upon which each inputted 
habit item appears on screen after form submission.
- `HabitList` is the component that displays each of the habit cards in the two
different categories, based on the functions in `utils.ts`.
- I have one main style sheet, `App.css` for the global styles, and then one
additional one with the components that is specific to the `HabitItem` component.

### New Feature: 
- To expand upon the previous iteration of the app, I added categorization now!
    - It is pretty similar to what the rest of the app does, I just added an
    extra selection to the form, a category literal type in `types.ts`, and the 
    habit card changes it's background color depending on which category the 
    habit is. 
