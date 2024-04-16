import * as elements from "./elements.js";
import { gameState } from "./gameState.js";
import { updateOptionValues } from "./utils.js";

// Remove heading and option elements from dom
const removeOptionsElement = () => {
    elements.optionsHeadingBox.remove();
    elements.optionsBox.remove();
}

const removeColorOption = (color) => {
    switch (color) {
        case 'all':
            elements.turnBox.whiteOptions.remove();
            elements.turnBox.redOptions.remove();
            elements.turnBox.yellowOptions.remove();
            elements.turnBox.greenOptions.remove();
            elements.turnBox.blueOptions.remove();
            break;
        case 'white':
            elements.turnBox.whiteOptions.remove();
            break;
        case 'red':
            elements.turnBox.redOptions.remove();
            break;
        case 'yellow':
            elements.turnBox.yellowOptions.remove();
            break;
        case 'green':
            elements.turnBox.greenOptions.remove();
            break;
        case 'blue':
            elements.turnBox.blueOptions.remove();
            break;
    }
}

const resetColorOptions = () => {
    if (document.querySelector('#white-options') === null) {
        elements.optionsBox.prepend(elements.turnBox.whiteOptions);
    }
    
    if (gameState.colorInPlay.red) {
        if (document.querySelector('#red-options') === null) {
            elements.turnBox.whiteOptions.insertAdjacentElement('afterend', elements.turnBox.redOptions);
        }
    }

    if (gameState.colorInPlay.yellow) {
        if (document.querySelector('#yellow-options') === null) {
            if (gameState.colorInPlay.red) {
                elements.turnBox.redOptions.insertAdjacentElement('afterend', elements.turnBox.yellowOptions);
            } else {
                elements.turnBox.whiteOptions.insertAdjacentElement('afterend', elements.turnBox.yellowOptions);
            }
        }
    }

    if (gameState.colorInPlay.green) {
        if (document.querySelector('#green-options') === null) {
            if (gameState.colorInPlay.yellow) {
                elements.turnBox.yellowOptions.insertAdjacentElement('afterend', elements.turnBox.greenOptions);
            } else if (gameState.colorInPlay.red) {
                elements.turnBox.redOptions.insertAdjacentElement('afterend', elements.turnBox.greenOptions);
            } else {
                elements.turnBox.whiteOptions.insertAdjacentElement('afterend', elements.turnBox.greenOptions);
            }
        }
    }

    if (gameState.colorInPlay.blue) {
        if (document.querySelector('#blue-options') === null) {
            elements.optionsBox.append(elements.turnBox.blueOptions);
        }
    }
}

const options = () => {
    // Updates options with current values
    elements.turnBox.whiteOptions.innerHTML = `${gameState.rollValues.whiteTotal}`;

    // Updates options elements with valid plays
    updateOptionValues();
    
    // Insert heading and options elements to dom if previously removed
    if (document.querySelector('#options-heading-box') === null) {
        elements.optionsContainer.appendChild(elements.optionsHeadingBox);
        elements.optionsContainer.appendChild(elements.optionsBox);
    }

    // Resets all color option that may have been removed from the previous turn
    resetColorOptions();
}

const rollToBegin = () => {
    elements.guideBox.appendChild(elements.turnBox.rollToBegin);
}

const removeRollToBegin = () => {
    elements.turnBox.rollToBegin.remove();
}

const turnOptions = () => {
    if (document.querySelector('#roll-dice-option') !== null) {
        elements.turnBox.rollDiceOption.remove();
    }

    if (document.querySelector('#option-one') === null) {
        elements.turnBox.chooseOptions.prepend(elements.turnBox.optionOne);
    }

    if (document.querySelector('#option-two') === null) {
        elements.turnBox.chooseOptions.appendChild(elements.turnBox.optionTwo);
    }
    
    elements.guideBox.appendChild(elements.turnBox.chooseContainer);
    elements.guideBox.appendChild(elements.turnBox.or);
    elements.guideBox.appendChild(elements.turnBox.selectPenalty);
}

const removeOptionOne = () => {
    document.querySelector('#option-one').remove();
    elements.turnBox.selectPenalty.remove();
    elements.guideBox.appendChild(elements.turnBox.rollDiceOption);
}

const removeTurnOptions = () => {
    elements.turnBox.chooseContainer.remove();
    elements.turnBox.or.remove();
    elements.turnBox.selectPenalty.remove();
    elements.turnBox.rollDiceOption.remove();
}

const rollPrompt = () => {
    elements.guideBox.appendChild(elements.turnBox.rollDicePrompt);
}

const removeRollPrompt = () => {
    elements.turnBox.rollDicePrompt.remove();
}

const gameOver = () => {
    elements.guideBox.appendChild(elements.turnBox.gameOver);
}

const removeGameOver = () => {
    elements.turnBox.gameOver.remove();
}

export { removeOptionsElement, removeColorOption, resetColorOptions,
            options, rollToBegin, removeRollToBegin, turnOptions,
            removeOptionOne, removeTurnOptions, rollPrompt,
            removeRollPrompt, gameOver, removeGameOver };
