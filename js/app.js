// Obtained from following url:
// https://www.scaler.com/topics/javascript/import-js-file-in-js/
import { newGame } from "./gameFunctions.js";
import { addListeners } from "./listeners.js";
import { Color } from "./game.js";


// Defines new class objects for each color
const red = new Color('red');
const yellow = new Color('yellow');
const green = new Color('green');
const blue = new Color('blue');

// Start game
newGame();

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Adds all listeners for buttons
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
addListeners();

export {
    red, yellow, green, blue
};
