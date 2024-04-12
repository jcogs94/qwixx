import { gameState } from "./gameState.js";
import * as gameFunctions from "./gameFunctions.js";

// Each of the handlers below update the 'playerChoice' and call for validation
// if the dice have been rolled
const red = (redButtonPressed) => {
    gameState.playerChoice = `red ${redButtonPressed}`;
    if (gameState.diceRolled)
        gameFunctions.validateInput();
}

const yellow = (yellowButtonPressed) => {
    gameState.playerChoice = `yellow ${yellowButtonPressed}`;
    if (gameState.diceRolled)
        gameFunctions.validateInput();
}

const green = (greenButtonPressed) => {
    gameState.playerChoice = `green ${greenButtonPressed}`;
    if (gameState.diceRolled)
        gameFunctions.validateInput();
}

const blue = (blueButtonPressed) => {
    gameState.playerChoice = `blue ${blueButtonPressed}`;
    if (gameState.diceRolled)
        gameFunctions.validateInput();
}

const rollButton = () => {
    gameFunctions.rollDice();
    
    // Ref - log roll
    console.log(` ROLLLLLLLLLLL\n`, `white1: ${gameState.roll.white1}\n`, `white2: ${gameState.roll.white2}\n\n`, `red: ${gameState.roll.red}\n`, `yellow: ${gameState.roll.yellow}\n`, `green: ${gameState.roll.green}\n`, `blue: ${gameState.roll.blue}`);

    // Ref - log pickable options
    console.dir(gameState.rollValues);
}

const newGameButton = () => {
    gameFunctions.clearBoard();
}

export { red, yellow, green, blue, rollButton, newGameButton };
