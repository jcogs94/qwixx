// Obtained from following url:
// https://www.scaler.com/topics/javascript/import-js-file-in-js/
import * as elements from "./elements.js";
import * as gameFunctions from "./gameFunctions.js";
import { gameState } from "./gameState.js";
import { addListeners } from "./listeners.js";

// Initializes the start of a new game
if (gameState.start === true) {
    gameFunctions.clearBoard();
    gameState.start = false;
}

gameFunctions.rollDice();

// Ref - log roll
console.log(` ROLLLLLLLLLLL\n`, `white1: ${gameState.roll.white1}\n`, `white2: ${gameState.roll.white2}\n\n`, `red: ${gameState.roll.red}\n`, `yellow: ${gameState.roll.yellow}\n`, `green: ${gameState.roll.green}\n`, `blue: ${gameState.roll.blue}`);

// Ref - log pickable options
console.dir(gameState.rollValues);

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Adds all listeners for buttons
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
addListeners();
