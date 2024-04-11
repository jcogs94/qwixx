// Obtained from following link:
// https://www.scaler.com/topics/javascript/import-js-file-in-js/
import * as elements from "./elements.js";
import * as gameFunctions from "./gameFunctions.js";

// Object to reference game state
let gameState = {
    start: true
}

// Initializes the start of a new game
if (gameState.start === true) {
    gameFunctions.clearBoard();
    gameState.start = false;
}
