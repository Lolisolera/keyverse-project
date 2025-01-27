# nology-assignment

KEY-VERSE - PROJECT

PROJECT OVERVIEW:

This project aims to create an interactive piano keyboard on a webpage, where users can click on the keys to play sounds corresponding to the notes. The project is built using TypeScript and styled with SCSS.

Project Plan

Keyboard Layout:

Create a visual representation of a piano keyboard with white and black keys. Use HTML and SCSS to do this.

Keys should be clickable, and each key should correspond to a different musical note (C, D, E, F, G, A, B). Use the DOM to access these keys, query selectors and event listeners to achieve this.

Sound Playback:

Each key should trigger a sound corresponding to its musical note when clicked. Use an audio file for each note, such as .mp3 or .wav, and trigger the sound when a key is pressed - keypress event listener.

Key Interaction:

Ensure that clicking on a key results in an appropriate action (e.g., changing color on click). Add event handlers and event listeners to DOM elements targeted by query selectors.

Handle keyboard events: allow users to play the piano using keyboard keys (mapping the keyboard keys to corresponding piano notes).

Visual Design:

Style the keys with SCSS to give them a cool look!
Implement hover and active states for better user interaction feedback.

Project Structure

index.html: Contains the basic HTML structure of the piano keyboard.

style.scss: SCSS file containing styles for the piano keys, layout, and other elements.

app.ts: TypeScript file handling the logic for playing sounds, handling key clicks, and mapping keyboard events.

assets/: Folder containing the sound and images files (one per note, e.g., C.mp3, D.mp3 - also styled images for each key). Ensure that the sounds match with the correspondent images.

Milestones:
Piano Keyboard Layout:

Define the basic layout of the keyboard (white keys and black keys).
Use HTML and CSS (via SCSS) to create the static keyboard layout.

Audio Integration:

Link each key to an audio file for the corresponding note,
ensuring the audio plays when a key is clicked.

Interactive Features:

Add functionality for visual feedback (e.g., highlighting keys on click).

MAkae the sounds using the piano keys and the computer keyboard keys.

Enhance User Experience:

Implement sound fading (fade-out effect) when a note finishes playing. - uisng event listeners

Ensure the TypeScript code is clean, modular, and follows good coding practices.

Test for edge cases (e.g., pressing multiple keys at once).

Technologies:

HTML5
SCSS (CSS)
TypeScript
Vite
SASS
------------------------------------
CODINDG STRUCTURE

HTML:

- Create a piano div
- Create a div containing all the white keys (if choosing white)
- Create a second div cntaining all of the black keys (or a differen colour)
- Assing classes to both divs and to each of the buttons.

SCSS:
- Use Flex to display all of the elements.
- Style the targeted htm elements acordingly - size, colour, position, margins, etc.
- Create a resources folder and keep inside all of the imports for each styling type, e.g. sizing, color-palette, etc.
- Export each of these resources files to the main SCSS file so that we can use and import them - use the variables for each across the project - ensuring consitency and code readability.

TypeScript:
- Create a variable for the "note sounds" and assign a sound to each key.
- Create a variable for the "play sounds" and target her the audio.
- Create a variable to keep my selected keys and assign them to event listener - "click" within a if/ else statement.


-------------------------------------------------

NOTE:

This is just a draft and details are not fixed.
Planning to be more granular and to break down the logic as I get along with it.

EXPECTATIONS:

To have the project completed and running without problems by the submision day.



