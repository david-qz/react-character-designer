# The Plan

## Components
- Select Component
  - Presents a select dropdown.
  - Takes as props a label, set of options, currently selected option, and callback for setting the currently selected option.
- TextEntry Component
  - Presents a text input.
  - Takes as props a label and a callback for when the user submits the input.
- Controls component
  - Presents the user with three dropdowns to set the character's head, torso, and pants, along with a text entry field.
  - Takes as props the current state of the character and callbacks for updating the character.
  - Uses the Select and TextEntry components as children.
- Character component
  - Displays a built character.
  - Takes as props the character's parameters.
- Stats component
  - Displays stats about the character creation process (how many times the user has changed a given field) and shows the character's catchphrases.
  - Takes a props the stats and catchphrases of the character.
- Main component
  - A layout container for the app that will contain the shared character and stats state.
