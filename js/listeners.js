import * as elements from "./elements.js";
import * as handler from "./handlers.js";

const addListeners = () => {
    // Iterating objects through method learned in url below:
    // https://www.freecodecamp.org/news/how-to-iterate-over-objects-in-javascript/
    // Red button listeners
    let redButtons = Object.values(elements.red);
    redButtons.forEach((element) => {
        element.addEventListener('click', () => {
            handler.red(element.innerHTML);
        });
    })

    // Yellow button listeners
    let yellowButtons = Object.values(elements.yellow);
    yellowButtons.forEach((element) => {
        element.addEventListener('click', () => {
            handler.yellow(element.innerHTML);
        });
    })

    // Green button listeners
    let greenButtons = Object.values(elements.green);
    greenButtons.forEach((element) => {
        element.addEventListener('click', () => {
            handler.green(element.innerHTML);
        });
    })

    // Blue button listeners
    let blueButtons = Object.values(elements.blue);
    blueButtons.forEach((element) => {
        element.addEventListener('click', () => {
            handler.blue(element.innerHTML);
        });
    })
}

export { addListeners };
