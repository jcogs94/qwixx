import { optionsContainer as optionsContainerElement, optionsHeadingBox as optionsHeadingBoxElement, optionsBox as optionsBoxElement, guideBox as guideBoxElement } from "./elements.js";
import { gameState } from "./gameState.js";

// Defines individual option elements to be updated in options()
const whiteOptionsElement = document.querySelector('#white-options');
const redOptionsElement = document.querySelector('#red-options');
const yellowOptionsElement = document.querySelector('#yellow-options');
const greenOptionsElement = document.querySelector('#green-options');
const blueOptionsElement = document.querySelector('#blue-options');

const options = () => {
    // Updates options with current values
    whiteOptionsElement.innerHTML = `${gameState.rollValues.whiteTotal}`;
    redOptionsElement.innerHTML = `${gameState.rollValues.redWhite1} / ${gameState.rollValues.redWhite2}`;
    yellowOptionsElement.innerHTML = `${gameState.rollValues.yellowWhite1} / ${gameState.rollValues.yellowWhite2}`;
    greenOptionsElement.innerHTML = `${gameState.rollValues.greenWhite1} / ${gameState.rollValues.greenWhite2}`;
    blueOptionsElement.innerHTML = `${gameState.rollValues.blueWhite1} / ${gameState.rollValues.blueWhite2}`;
    
    // Insert heading and options elements to dom if previously removed
    if (document.querySelector('#options-heading-box') === null) {
        optionsContainerElement.appendChild(optionsHeadingBoxElement);
        optionsContainerElement.appendChild(optionsBoxElement);
    }
}

const removeOptions = () => {
    // Remove heading and option elements from dom
    optionsHeadingBoxElement.remove();
    optionsBoxElement.remove();
}

export { options, removeOptions };
