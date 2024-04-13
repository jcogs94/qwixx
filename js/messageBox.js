import { messageBox as messageBoxElement } from "./elements.js";

const headerElement = document.createElement('h1');
const pElement = document.createElement('p');

const displayMessage = {
    welcome: () => {
        headerElement.innerHTML = 'Welcome to Qwixx!';
        messageBoxElement.appendChild(headerElement);

        pElement.innerHTML = 'Roll the dice to begin the game!';
        messageBoxElement.appendChild(pElement);
    }
}

export { displayMessage };
