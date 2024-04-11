// Define empty objects to obtain button elements by color
let redElements = {};
let yellowElements = {};
let greenElements = {};
let blueElements = {};

// Obtain red button elements
const redRowElement = document.querySelector('.red');
const redElementChildren = redRowElement.children;
for (let element of redElementChildren) {
    redElements[element.innerHTML] = element;
}

// Obtain yellow button elements
const yellowRowElement = document.querySelector('.yellow');
const yellowElementChildren = yellowRowElement.children;
for (let element of yellowElementChildren) {
    yellowElements[element.innerHTML] = element;
}

// Obtain green button elements
const greenRowElement = document.querySelector('.green');
const greenElementChildren = greenRowElement.children;
for (let element of greenElementChildren) {
    greenElements[element.innerHTML] = element;
}

// Obtain blue button elements
const blueRowElement = document.querySelector('.blue');
const blueElementChildren = blueRowElement.children;
for (let element of blueElementChildren) {
    blueElements[element.innerHTML] = element;
}

// Exports all objects
export { redElements, yellowElements, greenElements, blueElements };
