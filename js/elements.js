// Define empty objects to obtain button elements by color
let red = {};
let yellow = {};
let green = {};
let blue = {};

// Obtain red button elements
const redRow = document.querySelector('.red');
const redChildren = redRow.children;
for (let element of redChildren) {
    red[element.innerHTML] = element;
}

// Obtain yellow button elements
const yellowRow = document.querySelector('.yellow');
const yellowChildren = yellowRow.children;
for (let element of yellowChildren) {
    yellow[element.innerHTML] = element;
}

// Obtain green button elements
const greenRow = document.querySelector('.green');
const greenChildren = greenRow.children;
for (let element of greenChildren) {
    green[element.innerHTML] = element;
}

// Obtain blue button elements
const blueRow = document.querySelector('.blue');
const blueChildren = blueRow.children;
for (let element of blueChildren) {
    blue[element.innerHTML] = element;
}

// Score box elements
const scores = {
    red: document.querySelector('#red-total-box'),
    yellow: document.querySelector('#yellow-total-box'),
    green: document.querySelector('#green-total-box'),
    blue: document.querySelector('#blue-total-box'),
    penalty: document.querySelector('#penalty-total-box'),
    total: document.querySelector('#total-box')
}

// "lock" elements, to be disable at start
const allDisableLock = document.querySelectorAll('.disable-lock');

// Specify "lock" elements by color
const redDisableLock = [];
const yellowDisableLock = [];
const greenDisableLock = [];
const blueDisableLock = [];

for (let i = 0; i < 8; i++) {
    if (i === 0 || i === 1) {
        redDisableLock.push(allDisableLock[i]);
    } else if (i === 2 || i === 3) {
        yellowDisableLock.push(allDisableLock[i]);
    } else if (i === 4 || i === 5) {
        greenDisableLock.push(allDisableLock[i]);
    } else if (i === 6 || i === 7) {
        blueDisableLock.push(allDisableLock[i]);
    }
}

// Exports all objects/elements
export {
    red, yellow, green, blue, scores, allDisableLock,
    redDisableLock, yellowDisableLock, greenDisableLock,
    blueDisableLock };
