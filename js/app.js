// Obtained from following url:
// https://www.scaler.com/topics/javascript/import-js-file-in-js/
import * as elements from "./elements.js";
import * as gameFunctions from "./gameFunctions.js";
import { gameState } from "./gameState.js";

// Initializes the start of a new game
if (gameState.start === true) {
    gameFunctions.clearBoard();
    gameState.start = false;
}

gameFunctions.rollDice();
console.log(gameState);
