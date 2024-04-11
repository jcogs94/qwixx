import * as elements from "./elements.js";
import { gameState } from "./gameState.js";

// Clears board to begin a new game
const clearBoard = () => {
    // Reset score values
    elements.redScore.innerHTML = 0;
    elements.yellowScore.innerHTML = 0;
    elements.greenScore.innerHTML = 0;
    elements.blueScore.innerHTML = 0;
    elements.penaltyScore.innerHTML = 0;
    elements.totalScore.innerHTML = 0;

    // 'Lock' buttons disabled
    for (let disableLock of elements.allDisableLock) {
        disableLock.setAttribute('disabled', true);
    }

    // Reset diceRolled
    gameState.diceRolled = false;
}

// Updates possible values choosen by user
const calcOptions = () => {
    gameState.rollValues.whiteTotal = gameState.roll.white1 + gameState.roll.white2;
    
    if (gameState.playRed) {
        gameState.rollValues.redWhite1 = gameState.roll.red + gameState.roll.white1;
        gameState.rollValues.redWhite2 = gameState.roll.red + gameState.roll.white2;
    }

    if (gameState.playYellow) {
        gameState.rollValues.yellowWhite1 = gameState.roll.yellow + gameState.roll.white1;
        gameState.rollValues.yellowWhite2 = gameState.roll.yellow + gameState.roll.white2;
    }

    if (gameState.playGreen) {
        gameState.rollValues.greenWhite1 = gameState.roll.green + gameState.roll.white1;
        gameState.rollValues.greenWhite2 = gameState.roll.green + gameState.roll.white2;
    }

    if (gameState.playRed) {
        gameState.rollValues.blueWhite1 = gameState.roll.blue + gameState.roll.white1;
        gameState.rollValues.blueWhite2 = gameState.roll.blue + gameState.roll.white2;
    }
}

// Used for rolling dice, obtained from url below:
// https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
const rollDie = () => {
    return Math.floor(Math.random() * (6 - 1 + 1)) + 1;
}

// Rolls white dice and dice by color if still in play
const rollDice = () => {
    gameState.roll.white1 = rollDie();
    gameState.roll.white2 = rollDie();

    if (gameState.playRed) {
        gameState.roll.red = rollDie();
    }
    if (gameState.playYellow) {
        gameState.roll.yellow = rollDie();
    }
    if (gameState.playGreen) {
        gameState.roll.green = rollDie();
    }
    if (gameState.playBlue) {
        gameState.roll.blue = rollDie();
    }

    // Calls function to update possible values from roll
    calcOptions();

    // Updates game state
    gameState.diceRolled = true;
}

// export functions for use in app
export { clearBoard, rollDice };
