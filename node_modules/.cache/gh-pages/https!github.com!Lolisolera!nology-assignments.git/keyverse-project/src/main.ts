import '../styles/styles.scss';

let numberOfKeys = document.querySelectorAll(".piano__key").length;

for (let i = 0; i < numberOfKeys; i++) {
  document.querySelectorAll(".piano__key")[i].addEventListener("click", function (this: HTMLElement) {
    let buttonInnerText = this.innerText; // Now TypeScript knows 'this' is an HTMLElement
    makeSound(buttonInnerText);
    buttonAnimation(buttonInnerText);
  });
}
//Event listener added to keys when pressed

document.addEventListener("keydown", (event: KeyboardEvent) => {
  //document.addEventListener("keydown", function (event) -event type, callback function
  makeSound(event.key);
  buttonAnimation(event.key);
});

//Funtion to map sounds to keys and switch statement for each key case.

function makeSound(key: string): void {
  switch (key) {
    case "C":
      new Audio("./sounds/cSound.mp3").play();
      break;
    case "D":
      new Audio("./sounds/dSound.mp3").play();
      break;
    case "E":
      new Audio("./sounds/eSound.mp3").play();
      break;
    case "F":
      new Audio("./sounds/fSound.mp3").play();
      break;
    case "G":
      new Audio("./sounds/gSound.mp3").play();
      break;
    case "A":
      new Audio("./sounds/aSound.mp3").play();
      break;
    case "B":
      new Audio("./sounds/bSound.mp3").play();
      break;
    case "C2":
      new Audio("./sounds/c2Sound.mp3").play();
      break;
    case "C#":
      new Audio("./sounds/c_sharpSound.mp3").play();
      break;
    case "D#":
      new Audio("./sounds/d_sharpSound.mp3").play();
      break;
    case "F#":
      new Audio("./sounds/f_sharpSound.mp3").play();
      break;
    case "G#":
      new Audio("./sounds/g_sharpSound.mp3").play();
      break;
    case "A#":
      new Audio("./sounds/a_sharpSound.mp3").play();
      break;
    default:
      console.log(`Sound not found for key: ${key}`);
  }
}

function buttonAnimation(currentKey: string): void {//void - no returned value expected.
  const activeButton = document.querySelector(`.piano__key--${currentKey}`) as HTMLElement;

  if (activeButton) {
    activeButton.classList.add("pressed");

    setTimeout(() => {
      activeButton.classList.remove("pressed");
    }, 100);
  } else {
    console.error(`No button found for key: ${currentKey}`);
  }
}

//MAPPING COMPUTER KEYS TO KEYBOARD KEYS

const keyMapping: Record<string, string> = {//represents an object with keys.KEYS are strings "A", "AS", etc, and 
  //the piano notes are also strings A", "F", etc. 
  'A': 'C',   // Key "A" plays the "C" note
  'S': 'D',   // Key "S" plays the "D" note
  'D': 'E',   // Key "D" plays the "E" note
  'F': 'F',   // Key "F" plays the "F" note
  'G': 'G',   // Key "G" plays the "G" note
  'H': 'A',   // Key "H" plays the "A" note
  'J': 'B',   // Key "J" plays the "B" note
  'K': 'C2'   // Key "K" plays the "C2" note (higher octave)
};

document.addEventListener('keydown', (event) => {
  const note = keyMapping[event.key.toUpperCase()]; // Convert key to uppercase, otherwise I'll have to select my "alt" key for the sound to happen
  if (note) {
    playNote(note);
    highlightKey(note); // highlight the piano key on the screen
  }
});

function playNote(note: string) {

  const audio = new Audio(`/sounds/${note.toLowerCase()}Sound.mp3`); // Ensure the note is in lowercase for the file naming
  audio.play();
}


function highlightKey(note: string) { // highlight the notes played in the piano.
  const keyElement = document.querySelector(`[data-note="${note}"]`);
  if (keyElement) {
    keyElement.classList.add('active');
    setTimeout(() => keyElement.classList.remove('active'), 200); // Remove highlight after 200ms
  }
}
