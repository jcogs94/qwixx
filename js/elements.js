// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~DISPLAY MESSAGE ELEMENTS~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Creates new elements to be added during the game
const rollToBegin = document.createElement('h3');
rollToBegin.setAttribute('id', 'roll-to-begin');
rollToBegin.innerHTML = '<= Roll dice to begin';

const chooseContainer = document.createElement('div');
chooseContainer.setAttribute('id', 'choose-container');

const choose = document.createElement('h2');
choose.setAttribute('id', 'choose');
choose.innerHTML = 'Choose one or both:';

const chooseOptions = document.createElement('ul');
const optionOne = document.createElement('li');
optionOne.setAttribute('id', 'option-one');
optionOne.innerHTML = `Use the addition of the white dice (first)`;
const optionTwo = document.createElement('li');
optionTwo.setAttribute('id', 'option-two');
optionTwo.innerHTML = `Use the addition of one white die and one colored die (second)`;
chooseOptions.appendChild(optionOne);
chooseOptions.appendChild(optionTwo);

// Puts all necessary elements into the options container
chooseContainer.appendChild(choose);
chooseContainer.appendChild(chooseOptions);

const or = document.createElement('h3');
or.innerHTML = 'OR';

const selectPenalty = document.createElement('h2');
selectPenalty.innerHTML = 'Select a Penalty Box';

const rollDiceOption = document.createElement('h2');
rollDiceOption.setAttribute('id', 'roll-dice-option');
rollDiceOption.innerHTML = 'Roll Dice';

const rollDicePrompt = document.createElement('h3');
rollDicePrompt.setAttribute('id', 'roll-dice-prompt');
rollDicePrompt.innerHTML = '<= Roll Dice';

const gameOver = document.createElement('h1');
gameOver.setAttribute('id', 'game-over');
gameOver.innerHTML = 'GAME<br>OVER';

// Puts necessary turn box elements into obj for export
const turnBox = {
    whiteOptions: document.querySelector('#white-options'),
    redOptions: document.querySelector('#red-options'),
    yellowOptions: document.querySelector('#yellow-options'),
    greenOptions: document.querySelector('#green-options'),
    blueOptions: document.querySelector('#blue-options'),
    rollToBegin: rollToBegin,
    chooseContainer: chooseContainer,
    choose: choose,
    chooseOptions: chooseOptions,
    optionOne: optionOne,
    optionTwo: optionTwo,
    or: or,
    selectPenalty: selectPenalty,
    rollDiceOption: rollDiceOption,
    rollDicePrompt: rollDicePrompt,
    gameOver: gameOver
}

class Element {
    constructor(reference) {
        this.reference = reference;
    }
}

// Creates a class for use by individual colors and their dom elements
class ColorElement extends Element {
    // Returns an object containing the button elements and their displayed value as their key
    static getButtonElements(color) {
        // Obtains the row for the color, puts their children (the buttons) in an object, and defines an empty
        // object to return after the loop
        let row = document.querySelector(`.${color}`);
        const rowChildren = row.children;
        let buttonElements = {};

        // Loops through the button objects and defines them by key, storing them in the
        // object to be returned
        for (let button of rowChildren) {
            buttonElements[button.innerHTML] = button;
        }
        
        return buttonElements;
    }

    constructor(color, reference) {
        super(reference);
        this.color = color;
        this.scoreElement = document.querySelector(`#${color}-total-box`);
        this.dieElement = document.querySelector(`#${color}-die`);
        this.buttonElements = ColorElement.getButtonElements(this.color);
    }
}

// Defines new class objects for each color
const redClass = new ColorElement('red');
console.dir(redClass);
const yellowClass = new ColorElement('yellow');
const greenClass = new ColorElement('green');
const blueClass = new ColorElement('blue');

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~BUTTON SELECTION ELEMENTS~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Uses class references for button reference
// Will be removed once classes are integrated fully
let red = redClass.buttonElements;
let yellow = yellowClass.buttonElements;
let green = greenClass.buttonElements;
let blue = blueClass.buttonElements;

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
const penaltyDisplay = {};
const allPenaltyElements = document.querySelectorAll('.penalty-checkbox');
const allPenaltyDisplayElements = document.querySelectorAll('.checkbox-display');
for (let i = 0; i < 4; i++) {
    let key = i + 1;
    penaltyBox[key] = allPenaltyElements[i];
    penaltyDisplay[key] = allPenaltyDisplayElements[i];
}

// Turn box elements
const optionsContainer = document.querySelector('#options-container');
const optionsHeadingBox = document.querySelector('#options-heading-box')
const optionsBox = document.querySelector('#options-box');

const guideBox = document.querySelector('#guide-box');

// Exports all objects/elements
export {
    turnBox, red, yellow, green, blue, scores, lockButtons,
    rollButton, newGameButton, penaltyBox,dice, optionsContainer,
    optionsHeadingBox, optionsBox, guideBox, penaltyDisplay
};
