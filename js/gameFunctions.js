import * as elements from "./elements.js"

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
}

// Used for rolling dice, obtained from url below:
// https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const rollDice = (color) => {
    color.die = getRandomInt(1, 6);
}

// export functions for use in app
export { clearBoard, rollDice };
