import * as elements from "./elements.js";
import * as handler from "./handlers.js";
import { red, yellow, green, blue } from "./app.js";

const addListeners = () => {
    // Iterating objects through method learned in url below:
    // https://www.freecodecamp.org/news/how-to-iterate-over-objects-in-javascript/
    // Red button listeners
    let redButtons = Object.values(red.buttonElements);
    redButtons.forEach((element) => {
        element.addEventListener('click', () => {
            handler.red(element.innerHTML);
        });
    })

    // Yellow button listeners
    let yellowButtons = Object.values(yellow.buttonElements);
    yellowButtons.forEach((element) => {
        element.addEventListener('click', () => {
            handler.yellow(element.innerHTML);
        });
    })

    // Green button listeners
    let greenButtons = Object.values(green.buttonElements);
    greenButtons.forEach((element) => {
        element.addEventListener('click', () => {
            handler.green(element.innerHTML);
        });
    })

    // Blue button listeners
    let blueButtons = Object.values(blue.buttonElements);
    blueButtons.forEach((element) => {
        element.addEventListener('click', () => {
            handler.blue(element.innerHTML);
        });
    })

    // Listeners for game flow control
    elements.rollButton.addEventListener('click', handler.rollButton);
    elements.newGameButton.addEventListener('click', handler.newGameButton);

    // Listener for penalty checks
    for (let i = 1; i < 5; i++) {
        elements.penaltyBox[i].addEventListener('change', handler.penaltyBox);
    }
}

export { addListeners };
