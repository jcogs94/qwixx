import { gameState } from "./gameState.js";

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

// Validate to ensure that dice rolled can add together to equal the box selected
const additionValid = (inputColor, inputNum) => {
    let valid = false;
    
    // Valid if the two white dice added together equal this amount
    if (inputNum === gameState.rollValues.whiteTotal) {
        valid = true;
    }

    // Valid if the addition of the colored die and one of the white die equals selection
    switch (inputColor) {
        case 'red':
            if (inputNum === gameState.rollValues.redWhite1 || inputNum === gameState.rollValues.redWhite2) {
                valid = true;
            }
            break;
        case 'yellow':
            if (inputNum === gameState.rollValues.yellowWhite1 || inputNum === gameState.rollValues.yellowWhite2) {
                valid = true;
            }
            break;
        case 'green':
            if (inputNum === gameState.rollValues.greenWhite1 || inputNum === gameState.rollValues.greenWhite2) {
                valid = true;
            }
            break;
        case 'blue':
            if (inputNum === gameState.rollValues.blueWhite1 || inputNum === gameState.rollValues.blueWhite2) {
                valid = true;
            }
            break;
    }
    
    return valid;
}

export { colorValid, numValid, additionValid };
