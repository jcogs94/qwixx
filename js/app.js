// Obtained from following url:
// https://www.scaler.com/topics/javascript/import-js-file-in-js/
import * as elements from "./elements.js";
import * as gameFunctions from "./gameFunctions.js";
import { gameState } from "./gameState.js";
import { addListeners } from "./listeners.js";


// Temp start game
gameFunctions.newGame();

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Adds all listeners for buttons
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
addListeners();
