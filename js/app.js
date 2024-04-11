// Obtained from following link:
// https://www.scaler.com/topics/javascript/import-js-file-in-js/
// import { getElement } from "./elements";

let redElements = {};
let yellowElements = {};
let greenElements = {};
let blueElements = {};

const redRowElement = document.querySelector('.red');
const redElementChildren = redRowElement.children;

for (let element of redElementChildren) {
    redElements[element.innerHTML] = element;
}

const yellowRowElement = document.querySelector('.yellow');
const yellowElementChildren = yellowRowElement.children;

for (let element of yellowElementChildren) {
    yellowElements[element.innerHTML] = element;
}

const greenRowElement = document.querySelector('.green');
const greenElementChildren = greenRowElement.children;

for (let element of greenElementChildren) {
    greenElements[element.innerHTML] = element;
}

const blueRowElement = document.querySelector('.blue');
const blueElementChildren = blueRowElement.children;

for (let element of blueElementChildren) {
    blueElements[element.innerHTML] = element;
}

console.log(redElements);
console.log(yellowElements);
console.log(greenElements);
console.log(blueElements);
