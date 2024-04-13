// Message box element
const messageBox = document.querySelector('#message-box');

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
    penalties: document.querySelector('#penalty-total-box'),
    total: document.querySelector('#total-box')
}

// Dice elements
const dice = {
    white1: document.querySelector('#white1'),
    white2: document.querySelector('#white2'),
    red: document.querySelector('#red-die'),
    yellow: document.querySelector('#yellow-die'),
    green: document.querySelector('#green-die'),
    blue: document.querySelector('#blue-die')
}

// Object to contain all lock button elements
const lockButtons = {
    all: document.querySelectorAll('.disable-lock'),
    red: [],
    yellow: [],
    green: [],
    blue: []
};

// Separates out the lock button elements by color
for (let i = 0; i < 8; i++) {
    if (i === 0 || i === 1) {
        lockButtons.red.push(lockButtons.all[i]);
    } else if (i === 2 || i === 3) {
        lockButtons.yellow.push(lockButtons.all[i]);
    } else if (i === 4 || i === 5) {
        lockButtons.green.push(lockButtons.all[i]);
    } else if (i === 6 || i === 7) {
        lockButtons.blue.push(lockButtons.all[i]);
    }
}

// Button elements to control game flow
const rollButton = document.querySelector('#roll-button');
const newGameButton = document.querySelector('#new-game-button');

// Penalty boxes
const penaltyBox = {};
const allPenaltyElements = document.querySelectorAll('.penalty-box');
for (let i = 0; i < 4; i++) {
    let key = i + 1;
    penaltyBox[key] = allPenaltyElements[i];
}

// Exports all objects/elements
export {
    red, yellow, green, blue, scores, lockButtons,
    rollButton, newGameButton, penaltyBox, dice,
    messageBox };
