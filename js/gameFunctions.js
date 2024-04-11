import { redElements, yellowElements, greenElements, blueElements } from "./elements.js"

const redScoreElement = document.querySelector('#red-total-box');
const yellowScoreElement = document.querySelector('#yellow-total-box')
const greenScoreElement = document.querySelector('#green-total-box');
const blueScoreElement = document.querySelector('#blue-total-box');
const penaltyScoreElement = document.querySelector('#penalty-total-box');
const totalScoreElement = document.querySelector('#total-box');

const clearBoard = () => {
    redScoreElement.innerHTML = 0;
    yellowScoreElement.innerHTML = 0;
    greenScoreElement.innerHTML = 0;
    blueScoreElement.innerHTML = 0;
    penaltyScoreElement.innerHTML = 0;
    totalScoreElement.innerHTML = 0;
}

export { clearBoard };
