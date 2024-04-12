import * as elements from "./elements.js";
import { gameState } from "./gameState.js";
import * as utils from "./utils.js"

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

// Crosses out the selection, updates visuals
const crossOutInput = (color, num, lock) => {
    // Ref
    console.log(`Color: ${color}\nNum: ${num}\nLock: ${lock}`);
    console.dir(elements[color][num]);

    // Updates 'highest' or 'lowest' to implement the rule that
    // the player can't mark things to the left of any of thier
    // previous marks
    switch (color) {
        case 'red':
            gameState.colorStatus.lowestRed = num;
            break;
        case 'yellow':
            gameState.colorStatus.lowestYellow = num;
            break;
        case 'green':
            gameState.colorStatus.highestGreen = num;
            break;
        case 'blue':
            gameState.colorStatus.highestBlue = num;
    }


    // Create 'X' element to go on top of selected box
    const boxMark = document.createElement('h1');
    boxMark.setAttribute('class', 'box-mark');
    boxMark.innerText = 'X';

    // Append new 'X' element to the box selected
    elements[color][num].appendChild(boxMark);
}

// validates the user's input as a valid play
const validateInput = () => {
    let valid = false;
    
    let input = gameState.playerChoice.split(' ');
    let color = input[0];
    let num = 0;
    let lock = false;

    // Checks the last character of the string given by button press
    // If 'L', lock. Else, num
    if (isNaN(input[1])) {
        lock = true;
    }
    else {
        num = parseInt(input[1]);
        if (num === 12 && (color === 'red' || color === 'yellow')) {
            lock = true;
        }
        else if (num === 2 && (color === 'green' || color === 'blue')) {
            lock = true;
        }
    }  
    
    // Checks if color is valid (from utils function)
    let colorValid = utils.colorValid(color);

    // Checks if the number in that color is valid
    let numValid = utils.numValid(color, num);

    // Checks if the dice rolled can be added together to make that number
    let additionValid = utils.additionValid(color, num);

    // Updates values to true if the lock button pressed
    if (colorValid && lock) {
        numValid = true;
        additionValid = true;
    }

    // Makes the input valid if all three conditions are met
    if (colorValid && numValid && additionValid) {
        valid = true;
    }

    // Continues game if input valid, else message displayed
    if (valid)
        crossOutInput(color, num, lock);
    else
        {} // Placeholder for displaying error message
}

// Updates possible values choosen by user
const calcOptions = () => {
    gameState.rollValues.whiteTotal = gameState.roll.white1 + gameState.roll.white2;
    
    if (gameState.colorInPlay.red) {
        gameState.rollValues.redWhite1 = gameState.roll.red + gameState.roll.white1;
        gameState.rollValues.redWhite2 = gameState.roll.red + gameState.roll.white2;
    }

    if (gameState.colorInPlay.yellow) {
        gameState.rollValues.yellowWhite1 = gameState.roll.yellow + gameState.roll.white1;
        gameState.rollValues.yellowWhite2 = gameState.roll.yellow + gameState.roll.white2;
    }

    if (gameState.colorInPlay.green) {
        gameState.rollValues.greenWhite1 = gameState.roll.green + gameState.roll.white1;
        gameState.rollValues.greenWhite2 = gameState.roll.green + gameState.roll.white2;
    }

    if (gameState.colorInPlay.blue) {
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

    if (gameState.colorInPlay.red) {
        gameState.roll.red = rollDie();
    }
    if (gameState.colorInPlay.yellow) {
        gameState.roll.yellow = rollDie();
    }
    if (gameState.colorInPlay.green) {
        gameState.roll.green = rollDie();
    }
    if (gameState.colorInPlay.blue) {
        gameState.roll.blue = rollDie();
    }

    // Calls function to update possible values from roll
    calcOptions();

    // Updates game state
    gameState.diceRolled = true;
    gameState.whiteSelection = true;
    gameState.combinationSelection = true;
}

// export functions for use in app
export { clearBoard, rollDice, validateInput };
