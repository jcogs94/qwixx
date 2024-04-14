import { optionsContainer as optionsContainerElement, optionsHeadingBox as optionsHeadingBoxElement, optionsBox as optionsBoxElement, guideBox as guideBoxElement } from "./elements.js";
import { gameState } from "./gameState.js";

// Defines individual option elements to be updated in options()
const whiteOptionsElement = document.querySelector('#white-options');
const redOptionsElement = document.querySelector('#red-options');
const yellowOptionsElement = document.querySelector('#yellow-options');
const greenOptionsElement = document.querySelector('#green-options');
const blueOptionsElement = document.querySelector('#blue-options');

// Remove heading and option elements from dom
const removeOptions = () => {
    optionsHeadingBoxElement.remove();
    optionsBoxElement.remove();
}

const removeColorOption = (color) => {
    switch (color) {
        case 'red':
            redOptionsElement.remove();
            break;
        case 'yellow':
            yellowOptionsElement.remove();
            break;
        case 'green':
            greenOptionsElement.remove();
            break;
        case 'blue':
            blueOptionsElement.remove();
            break;
    }
}

const resetColorOptions = (color) => {
    if (document.querySelector('#red-options') === null) {
        whiteOptionsElement.insertAdjacentElement('afterend', redOptionsElement);
    }

    if (document.querySelector('#yellow-options') === null) {
        redOptionsElement.insertAdjacentElement('afterend', yellowOptionsElement);
    }

    if (document.querySelector('#green-options') === null) {
        yellowOptionsElement.insertAdjacentElement('afterend', greenOptionsElement);
    }

    if (document.querySelector('#blue-options') === null) {
        greenOptionsElement.insertAdjacentElement('afterend', blueOptionsElement);
    }
}

const options = () => {
    // Updates options with current values
    whiteOptionsElement.innerHTML = `${gameState.rollValues.whiteTotal}`;

    // If statements below allow the options per color to only display one option if the combination
    // with both white dice are the same. Also removes that color from being displayed if it is no
    // longer in play
    if (gameState.colorInPlay.red) {
        if (gameState.rollValues.redWhite1 === gameState.rollValues.redWhite2) {
            redOptionsElement.innerHTML = `${gameState.rollValues.redWhite1}`;
        } else {
            redOptionsElement.innerHTML = `${gameState.rollValues.redWhite1} / ${gameState.rollValues.redWhite2}`;
        }
    }

    if (gameState.colorInPlay.yellow) {
        if (gameState.rollValues.yellowWhite1 === gameState.rollValues.yellowWhite2) {
            yellowOptionsElement.innerHTML = `${gameState.rollValues.yellowWhite1}`;
        } else {
            yellowOptionsElement.innerHTML = `${gameState.rollValues.yellowWhite1} / ${gameState.rollValues.yellowWhite2}`;
        }
    }

    if (gameState.colorInPlay.green) {
        if (gameState.rollValues.greenWhite1 === gameState.rollValues.greenWhite2) {
            greenOptionsElement.innerHTML = `${gameState.rollValues.greenWhite1}`;
        } else {
            greenOptionsElement.innerHTML = `${gameState.rollValues.greenWhite1} / ${gameState.rollValues.greenWhite2}`;
        }
    }

    if (gameState.colorInPlay.blue) {
        if (gameState.rollValues.blueWhite1 === gameState.rollValues.blueWhite2) {
            blueOptionsElement.innerHTML = `${gameState.rollValues.blueWhite1}`;
        } else {
            blueOptionsElement.innerHTML = `${gameState.rollValues.blueWhite1} / ${gameState.rollValues.blueWhite2}`;
        }
    }
    
    // Insert heading and options elements to dom if previously removed
    if (document.querySelector('#options-heading-box') === null) {
        optionsContainerElement.appendChild(optionsHeadingBoxElement);
        optionsContainerElement.appendChild(optionsBoxElement);
    }
}

export { removeOptions, removeColorOption, resetColorOptions, options };
