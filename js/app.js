// Obtained from following url:
// https://www.scaler.com/topics/javascript/import-js-file-in-js/
import * as elements from "./elements.js";
import * as gameFunctions from "./gameFunctions.js";

// Object to reference game state
let gameState = {
    start: true,
    diceRolled: false,
    playRed: true,
    playYellow: true,
    playGreen: true,
    playBlue: true,
    roll: {
        white1: 0,
        white2: 0,
        red: 0,
        yellow: 0,
        green: 0,
        blue: 0
    }
    
}

// Initializes the start of a new game
if (gameState.start === true) {
    gameFunctions.clearBoard();
    gameState.start = false;
}

console.log('Before roll:');
console.log(gameState.roll);

console.log('After roll:');
gameFunctions.rollDice();
console.log(gameState.roll);

// Allows for gameState object to be manipulated by gameFunctions
export { gameState };
