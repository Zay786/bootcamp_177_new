const morse = `{
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  "a": ".-",
  "b": "-...",
  "c": "-.-.",
  "d": "-..",
  "e": ".",
  "f": "..-.",
  "g": "--.",
  "h": "....",
  "i": "..",
  "j": ".---",
  "k": "-.-",
  "l": ".-..",
  "m": "--",
  "n": "-.",
  "o": "---",
  "p": ".--.",
  "q": "--.-",
  "r": ".-.",
  "s": "...",
  "t": "-",
  "u": "..-",
  "v": "...-",
  "w": ".--",
  "x": "-..-",
  "y": "-.--",
  "z": "--..",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "!": "-.-.--",
  "-": "-....-",
  "/": "-..-.",
  "@": ".--.-.",
  "(": "-.--.",
  ")": "-.--.-"
}`;


// Convert JSON string into JS object
function toJs() {
  return new Promise((resolve, reject) => {
    try {
      const morseJS = JSON.parse(morse);
      if (Object.keys(morseJS).length === 0) {
        reject("Error: Morse object is empty");
      } else {
        resolve(morseJS);
      }
    } catch (err) {
      reject("Error parsing JSON");
    }
  });
}

// Convert user input to Morse
function toMorse(morseJS) {
  return new Promise((resolve, reject) => {
    const userInput = prompt("Enter a word or sentence").toLowerCase(); // ask user input
    const morseTranslation = [];

    for (let char of userInput) {
      if (morseJS[char]) {
        morseTranslation.push(morseJS[char]);
      } else {
        reject(`Error: Character "${char}" not in Morse code object`);
        return; // stop execution
      }
    }

    resolve(morseTranslation);
  });
}

// Join words with line breaks + display on DOM
function joinWords(morseTranslation) {
  const container = document.createElement("div");
  container.innerHTML = morseTranslation.join("<br>");
  document.body.appendChild(container);
}

// Chain them
toJs()
  .then(morseJS => toMorse(morseJS))
  .then(morseTranslation => joinWords(morseTranslation))
  .catch(error => console.log(error));
