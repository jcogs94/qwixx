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

// export functions for use in app
export { clearBoard };
