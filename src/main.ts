import '../styles/styles.scss';

// Add click event listeners to each piano key
let numberOfKeys = document.querySelectorAll(".piano__key").length;

for (let i = 0; i < numberOfKeys; i++) {
  document.querySelectorAll(".piano__key")[i].addEventListener("click", function (this: HTMLElement) {
    let buttonInnerText = this.innerText.trim(); // Now TypeScript knows 'this' is an HTMLElement
    makeSound(buttonInnerText);
    buttonAnimation(buttonInnerText);
  });
}

// Event listener added to keys when pressed via keyboard
document.addEventListener("keydown", (event: KeyboardEvent) => {
  const note = keyMapping[event.key.toUpperCase()]; // Convert key to uppercase
  if (note) {
    makeSound(note); // Play sound using makeSound
    buttonAnimation(note); // Trigger button animation
  }
});

// Refactored - Function to map sounds to keys
function makeSound(key: string): void {
  const sounds: Record<string, string> = {
    C: "cSound.mp3",
    D: "dSound.mp3",
    E: "eSound.mp3",
    F: "fSound.mp3",
    G: "gSound.mp3",
    A: "aSound.mp3",
    B: "bSound.mp3",
    C2: "c2Sound.mp3",
    "C#": "c_sharpSound.mp3",
    "D#": "d_sharpSound.mp3",
    "F#": "f_sharpSound.mp3",
    "G#": "g_sharpSound.mp3",
    "A#": "a_sharpSound.mp3",
  };

  const soundFile = sounds[key];
  if (soundFile) {
    new Audio(`./sounds/${soundFile}`).play();
  } else {
    console.log(`Sound not found for key: ${key}`);
  }
}



// Function for button animation
function buttonAnimation(currentKey: string): void {
  const activeButton = document.querySelector(`.piano__key--${currentKey}`) as HTMLElement;

  if (activeButton) {
    activeButton.classList.add("pressed");

    // Remove the active class after 100ms to simulate the physical effect
    setTimeout(() => {
      activeButton.classList.remove("pressed");
    }, 100);
  } else {
    console.error(`No button found for key: ${currentKey}`);
  }
}

// Mapping computer keys to piano keys
const keyMapping: Record<string, string> = {
  'A': 'C',    // Key "A" plays the "C" note
  'S': 'D',    // Key "S" plays the "D" note
  'D': 'E',    // Key "D" plays the "E" note
  'F': 'F',    // Key "F" plays the "F" note
  'G': 'G',    // Key "G" plays the "G" note
  'H': 'A',    // Key "H" plays the "A" note
  'J': 'B',    // Key "J" plays the "B" note
  'K': 'C2',   // Key "K" plays the "C2" note (higher octave)
  'W': 'C#',   // Key "W" plays the "C#" note
  'E': 'D#',   // Key "E" plays the "D#" note
  'T': 'F#',   // Key "T" plays the "F#" note
  'Y': 'G#',   // Key "Y" plays the "G#" note
  'U': 'A#'    // Key "U" plays the "A#" note
};

// Adjusted event listener for keyboard keys to trigger the correct sound and animation
document.addEventListener('keydown', (event: KeyboardEvent) => {
  const note = keyMapping[event.key.toUpperCase()]; // Convert key to uppercase for consistency
  if (note) {
    makeSound(note); // Play the note's sound
    buttonAnimation(note); // Animate the button corresponding to the note
  }
});
