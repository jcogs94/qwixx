import { optionsContainer as optionsContainerElement, optionsHeadingBox as optionsHeadingBoxElement, optionsBox as optionsBoxElement, guideBox as guideBoxElement } from "./elements.js";
import { gameState } from "./gameState.js";

// Defines individual option elements to be updated in options()
const whiteOptionsElement = document.querySelector('#white-options');
const redOptionsElement = document.querySelector('#red-options');
const yellowOptionsElement = document.querySelector('#yellow-options');
const greenOptionsElement = document.querySelector('#green-options');
const blueOptionsElement = document.querySelector('#blue-options');

// Creates new elements to be added during the game
const rollToBeginElement = document.createElement('h3');
rollToBeginElement.setAttribute('id', 'roll-to-begin');
rollToBeginElement.innerHTML = '<= Roll dice to begin';

const chooseContainerElement = document.createElement('div');
chooseContainerElement.setAttribute('id', 'choose-container');

const chooseElement = document.createElement('h2');
chooseElement.setAttribute('id', 'choose');
chooseElement.innerHTML = 'Choose one or both:';

const chooseOptionsElement = document.createElement('ul');
const optionOneElement = document.createElement('li');
optionOneElement.setAttribute('id', 'option-one');
optionOneElement.innerHTML = `Use the addition of the white dice (first)`;
const optionTwoElement = document.createElement('li');
optionTwoElement.setAttribute('id', 'option-two');
optionTwoElement.innerHTML = `Use the addition of one white die and one colored die (second)`;
chooseOptionsElement.appendChild(optionOneElement);
chooseOptionsElement.appendChild(optionTwoElement);

// Puts all necessary elements into the options container
chooseContainerElement.appendChild(chooseElement);
chooseContainerElement.appendChild(chooseOptionsElement);

const orElement = document.createElement('h3');
orElement.innerHTML = 'OR';

const selectPenaltyElement = document.createElement('h2');
selectPenaltyElement.innerHTML = 'Select a Penalty Box';

const rollDiceOption = document.createElement('h2');
rollDiceOption.setAttribute('id', 'roll-dice-option');
rollDiceOption.innerHTML = 'Roll Dice';

const rollDicePrompt = document.createElement('h3');
rollDicePrompt.setAttribute('id', 'roll-dice-prompt');
rollDicePrompt.innerHTML = '<= Roll Dice';

// Remove heading and option elements from dom
const removeOptions = () => {
    optionsHeadingBoxElement.remove();
    optionsBoxElement.remove();
}

const removeColorOption = (color) => {
    switch (color) {
        case 'all':
            whiteOptionsElement.remove();
            redOptionsElement.remove();
            yellowOptionsElement.remove();
            greenOptionsElement.remove();
            blueOptionsElement.remove();
            break;
        case 'white':
            whiteOptionsElement.remove();
            break;
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

const resetColorOptions = () => {
    if (document.querySelector('#white-options') === null) {
        optionsBoxElement.prepend(whiteOptionsElement);
    }
    
    if (gameState.colorInPlay.red) {
        if (document.querySelector('#red-options') === null) {
            whiteOptionsElement.insertAdjacentElement('afterend', redOptionsElement);
        }
    }

    if (gameState.colorInPlay.yellow) {
        if (document.querySelector('#yellow-options') === null) {
            if (gameState.colorInPlay.red) {
                redOptionsElement.insertAdjacentElement('afterend', yellowOptionsElement);
            } else {
                whiteOptionsElement.insertAdjacentElement('afterend', yellowOptionsElement);
            }
        }
    }

    if (gameState.colorInPlay.green) {
        if (document.querySelector('#green-options') === null) {
            if (gameState.colorInPlay.yellow) {
                yellowOptionsElement.insertAdjacentElement('afterend', greenOptionsElement);
            } else if (gameState.colorInPlay.red) {
                redOptionsElement.insertAdjacentElement('afterend', greenOptionsElement);
            } else {
                whiteOptionsElement.insertAdjacentElement('afterend', greenOptionsElement);
            }
        }
    }

    if (gameState.colorInPlay.blue) {
        if (document.querySelector('#blue-options') === null) {
            optionsBoxElement.append(blueOptionsElement);
        }
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

    // Resets all color option that may have been removed from the previous turn
    resetColorOptions();
}

const rollToBegin = () => {
    guideBoxElement.appendChild(rollToBeginElement);
}

const removeRollToBegin = () => {
    rollToBeginElement.remove();
}

const turnOptions = () => {
    if (document.querySelector('#roll-dice-option') !== null) {
        rollDiceOption.remove();
    }

    if (document.querySelector('#option-one') === null) {
        chooseOptionsElement.prepend(optionOneElement);
    }

    if (document.querySelector('#option-two') === null) {
        chooseOptionsElement.appendChild(optionTwoElement);
    }
    
    guideBoxElement.appendChild(chooseContainerElement);
    guideBoxElement.appendChild(orElement);
    guideBoxElement.appendChild(selectPenaltyElement);
}

const removeOptionOne = () => {
    document.querySelector('#option-one').remove();
    selectPenaltyElement.remove();
    guideBoxElement.appendChild(rollDiceOption);
}

const removeTurnOptions = () => {
    chooseContainerElement.remove();
    orElement.remove();
    selectPenaltyElement.remove();
    rollDiceOption.remove();
}

const rollPrompt = () => {
    guideBoxElement.appendChild(rollDicePrompt);
}

const removeRollPrompt = () => {
    rollDicePrompt.remove();
}

export { removeOptions, removeColorOption, resetColorOptions,
            options, rollToBegin, removeRollToBegin, turnOptions,
            removeOptionOne, removeTurnOptions, rollPrompt,
            removeRollPrompt };
