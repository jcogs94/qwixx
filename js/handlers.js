import { gameState } from "./gameState.js";
import { validateInput } from "./gameFunctions.js";

// Each of the handlers below update the 'playerChoice' and call for validation
// if the dice have been rolled
const red = (redButtonPressed) => {
    gameState.playerChoice = `red ${redButtonPressed}`;
    if (gameState.diceRolled)
        validateInput();
}

const yellow = (yellowButtonPressed) => {
    gameState.playerChoice = `yellow ${yellowButtonPressed}`;
    if (gameState.diceRolled)
        validateInput();
}

const green = (greenButtonPressed) => {
    gameState.playerChoice = `green ${greenButtonPressed}`;
    if (gameState.diceRolled)
        validateInput();
}

const blue = (blueButtonPressed) => {
    gameState.playerChoice = `blue ${blueButtonPressed}`;
    if (gameState.diceRolled)
        validateInput();
}

export { red, yellow, green, blue };
