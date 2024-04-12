import * as elements from "./elements.js";
import { gameState } from "./gameState.js";
import * as utils from "./utils.js"

// Variable for keys of gameState.scores, to be
// used in multiple functions
const scoresArr = Object.keys(gameState.scores);

const updateScores = () => {
    scoresArr.forEach( (scoreType) => {
        elements.scores[scoreType].innerText = `${gameState.scores[scoreType]}`;
    });
}

// Clears board to begin a new game
const clearBoard = () => {
    // Reset score values    
    scoresArr.forEach( (scoreType) => {
        gameState.scores[scoreType] = 0;
    });
    
    // Display new reset scores
    updateScores();

    // 'Lock' buttons disabled
    for (let disableLock of elements.allDisableLock) {
        disableLock.setAttribute('disabled', true);
    }

    // Reset 'hightest' and 'lowest' values
    gameState.colorStatus.lowestRed = 0;
    gameState.colorStatus.lowestYellow = 0;
    gameState.colorStatus.highestGreen = 13;
    gameState.colorStatus.highestBlue = 13;

    // Reset diceRolled
    gameState.diceRolled = false;
}

// Disables buttons to the left of the user selection to have visual reference
// to the player that those moves are invalid
const disableToLeft = (color) => {
    const colorRowElements = Object.values(elements[color]);
    colorRowElements.forEach((element) => {
        // Determines the color and disables buttons to the left of the highest selection
        switch (color) {
            case 'red':
                if (parseInt(element.innerText) <= gameState.colorStatus.lowestRed) {
                    element.setAttribute('disabled', true);
                }
                break;
            case 'yellow':
                if (parseInt(element.innerText) <= gameState.colorStatus.lowestYellow) {
                    element.setAttribute('disabled', true);
                }
                break;
            case 'green':
                if (parseInt(element.innerText) >= gameState.colorStatus.highestGreen) {
                    element.setAttribute('disabled', true);
                }
                break;
            case 'blue':
                if (parseInt(element.innerText) >= gameState.colorStatus.highestBlue) {
                    element.setAttribute('disabled', true);
                }
        }
    }); 
}

// Crosses out the selection, updates visuals
const crossOutInput = (color, num, lock) => {
    // Ref
    console.log(`Color: ${color}\nNum: ${num}\nLock: ${lock}`);

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

    // Calls disableToLeft() to disable invalid buttons based
    // on prev rule
    disableToLeft(color);

    // Updates the number of boxes selected for that color
    gameState.playerSelectionCount[color]++;

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
