// Obtained from following url:
// https://www.scaler.com/topics/javascript/import-js-file-in-js/
import { newGame } from "./gameFunctions.js";
import { addListeners } from "./listeners.js";
import { Color, Game, rollDice } from "./game.js";

const game = new Game;
console.dir(game);

const roll = new rollDice;
console.dir(roll);

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

// roll.updateDisplay();

export {
    red, yellow, green, blue
};
