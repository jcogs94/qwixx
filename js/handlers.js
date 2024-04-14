import { gameState } from "./gameState.js";
import * as gameFunctions from "./gameFunctions.js";
import * as elements from "./elements.js";

// Each of the handlers below update the 'playerChoice' and call for validation
// if the dice have been rolled
const red = (redButtonPressed) => {
    gameState.playerChoice = `red ${redButtonPressed}`;
    if (gameState.diceRolled) {
        gameFunctions.validateInput();
    } else if (gameState.start) {
        console.log('Roll first to start the game');
    } else {
        console.log('Turn over, no more selections.');
    }
}

const yellow = (yellowButtonPressed) => {
    gameState.playerChoice = `yellow ${yellowButtonPressed}`;
    if (gameState.diceRolled) {
        gameFunctions.validateInput();
    } else if (gameState.start) {
        console.log('Roll first to start the game');
    } else {
        console.log('Turn over, no more selections.');
    }
}

const green = (greenButtonPressed) => {
    gameState.playerChoice = `green ${greenButtonPressed}`;
    if (gameState.diceRolled) {
        gameFunctions.validateInput();
    } else if (gameState.start) {
        console.log('Roll first to start the game');
    } else {
        console.log('Turn over, no more selections.');
    }
}

const blue = (blueButtonPressed) => {
    gameState.playerChoice = `blue ${blueButtonPressed}`;
    if (gameState.diceRolled) {
        gameFunctions.validateInput();
    } else if (gameState.start) {
        console.log('Roll first to start the game');
    } else {
        console.log('Turn over, no more selections.');
    }
}

const rollButton = () => {
    gameFunctions.rollDice();
}

const newGameButton = () => {
    gameFunctions.newGame();
}

const penaltyBox = () => {
    if (gameState.diceRolled) {
        // Disables the checked box
        for (let i = 1; i < 5; i++) {
            if (elements.penaltyBox[i].checked === true) {
                elements.penaltyBox[i].setAttribute('disabled', true);
            }
        }
    
        // Adjusts penalty count in gameState
        gameState.playerSelectionCount.penalties++;
    
        // Displays updated score
        gameFunctions.updateScoreBoard();
    
        // Game over if all boxes checked
        if (gameState.playerSelectionCount.penalties === 4) {
            gameFunctions.gameOver();
        } else {
            // Ends turn and enables roll button
            gameState.diceRolled = false;
            elements.rollButton.removeAttribute('disabled');
        }
    } else {
        // Unchecks the checked box
        for (let i = 1; i < 5; i++) {
            if (elements.penaltyBox[i].checked === true && elements.penaltyBox[i].disabled === false) {
                elements.penaltyBox[i].checked = false;
            }
        }
    }
}

export { red, yellow, green, blue, rollButton, newGameButton, penaltyBox };
