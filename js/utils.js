import { gameState } from "./gameState.js";
import * as elements from "./elements.js";
import * as displayMessage from "./displayMessage.js";

// Validate color is in play still
const colorValid = (inputColor) => {
    if (inputColor === 'red' && gameState.colorInPlay.red) {
        return true;
    } else if (inputColor === 'yellow' && gameState.colorInPlay.yellow) {
        return true;
    } else if (inputColor === 'green' && gameState.colorInPlay.green) {
        return true;
    } else if (inputColor === 'blue' && gameState.colorInPlay.blue) {
        return true;
    }
    else {
        return false;
    }
}

// Validate to ensure number selected is to the right of previously crossed out boxes
const numValid = (inputColor, inputNum) => {
    if (inputColor === 'red' && inputNum > gameState.colorStatus.lowestRed) {
        return true;
    } else if (inputColor === 'yellow' && inputNum > gameState.colorStatus.lowestYellow) {
        return true;
    } else if (inputColor === 'green' && inputNum < gameState.colorStatus.highestGreen) {
        return true;
    } else if (inputColor === 'blue' && inputNum < gameState.colorStatus.highestBlue) {
        return true;
    }
    else
        return false;
}

// Validate to ensure that dice rolled can legally add together to equal the box selected
const additionValid = (inputColor, inputNum) => {
    let combinationValid = false;
    
    // Valid if the two white dice added together equal this amount
    if (inputNum === gameState.rollValues.whiteTotal && gameState.whiteSelection === false) {
        // Enables roll dice button
        elements.rollButton.removeAttribute('disabled');
        
        // Removes white option if used
        displayMessage.removeColorOption('white');
        displayMessage.removeOptionOne();

        gameState.whiteSelection = true;
        return true;
    }

    // Valid if the addition of the colored die and one of the white die equals selection
    switch (inputColor) {
        case 'red':
            if (inputNum === gameState.rollValues.redWhite1 || inputNum === gameState.rollValues.redWhite2) {
                combinationValid = true;
            }
            break;
        case 'yellow':
            if (inputNum === gameState.rollValues.yellowWhite1 || inputNum === gameState.rollValues.yellowWhite2) {
                combinationValid = true;
            }
            break;
        case 'green':
            if (inputNum === gameState.rollValues.greenWhite1 || inputNum === gameState.rollValues.greenWhite2) {
                combinationValid = true;
            }
            break;
        case 'blue':
            if (inputNum === gameState.rollValues.blueWhite1 || inputNum === gameState.rollValues.blueWhite2) {
                combinationValid = true;
            }
            break;
    }

    // If the addition of one colored die and one white die equals
    // the player's selection, gameState updated as that part of
    // their turn being completed
    if (combinationValid && gameState.combinationSelection === false) {
        // Removes all options from turn box, turn is over
        displayMessage.removeColorOption('all');

        // Removes turn options
        displayMessage.removeTurnOptions();

        // Displays roll prompt
        displayMessage.rollPrompt();

        gameState.combinationSelection = true;
        return true;
    } else {
        return false;
    }
}

const updateOptionValues = () => {
    // If statements below allow the options per color to only display one option if the combination
    // with both white dice are the same. Also removes that color from being displayed if it is no
    // longer in play
    if (gameState.colorInPlay.red) {
        if (gameState.rollValues.redWhite1 === gameState.rollValues.redWhite2) {
            elements.turnBox.redOptions.innerHTML = `${gameState.rollValues.redWhite1}`;
        } else {
            elements.turnBox.redOptions.innerHTML = `${gameState.rollValues.redWhite1} / ${gameState.rollValues.redWhite2}`;
        }
    }

    if (gameState.colorInPlay.yellow) {
        if (gameState.rollValues.yellowWhite1 === gameState.rollValues.yellowWhite2) {
            elements.turnBox.yellowOptions.innerHTML = `${gameState.rollValues.yellowWhite1}`;
        } else {
            elements.turnBox.yellowOptions.innerHTML = `${gameState.rollValues.yellowWhite1} / ${gameState.rollValues.yellowWhite2}`;
        }
    }

    if (gameState.colorInPlay.green) {
        if (gameState.rollValues.greenWhite1 === gameState.rollValues.greenWhite2) {
            elements.turnBox.greenOptions.innerHTML = `${gameState.rollValues.greenWhite1}`;
        } else {
            elements.turnBox.greenOptions.innerHTML = `${gameState.rollValues.greenWhite1} / ${gameState.rollValues.greenWhite2}`;
        }
    }

    if (gameState.colorInPlay.blue) {
        if (gameState.rollValues.blueWhite1 === gameState.rollValues.blueWhite2) {
            elements.turnBox.blueOptions.innerHTML = `${gameState.rollValues.blueWhite1}`;
        } else {
            elements.turnBox.blueOptions.innerHTML = `${gameState.rollValues.blueWhite1} / ${gameState.rollValues.blueWhite2}`;
        }
    }
}

export { colorValid, numValid, additionValid, updateOptionValues };
