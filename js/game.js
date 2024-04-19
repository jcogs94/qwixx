

class Element {
    constructor(reference) {
        this.reference = reference;
    }
}

// Creates a class for use by individual colors and their dom elements
class Color {
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

    constructor(color) {
        this.color = color;
        this.colorCount = 0;
        this.score = 0;
        this.inPlay = true;
        this.displayColorOption = false;
        this.lockAvailable = false;

        // Defines left most number based on whether board numbers go up or down
        // also defines numGoUp for those colors
        if (color === 'red' || color === 'yellow') {
            this.leftMostNum = 0;
            this.numGoUp = true;
        } else {
            this.leftMostNum = 13;
            this.numGoUp = false;
        };

        this.elements = {
            score: document.querySelector(`#${color}-total-box`),
            buttons: Color.getButtonElements(color)
        };
    }

    // Crosses out number given from caller
    addX(num) {
        // Create 'X' element to go on top of selected box
        const boxMark = document.createElement('h1');
        boxMark.setAttribute('class', 'box-mark');
        boxMark.innerText = 'X';

        // Adds 'X' to box selected, if 'L', referenced separately
        if (num === 0) {
            // Append new 'X' element to the 'L' selected
            this.elements.buttons['L'].appendChild(boxMark);
        }
        else {
            // Append new 'X' element to the number selected
            this.elements.buttons[num].appendChild(boxMark);
        }
    }

    // Locks entire row of buttons for this color
    lockColor() {
        let rowKeys = Object.keys(this.elements.buttons);
        rowKeys.forEach( (key) => {
            this.elements.buttons[key].setAttribute('disabled', true);
        });
    }
}

class rollDice {
    // Used for rolling dice, obtained from url below:
    // https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
    rollDie() {
        return Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    }

    // Calculates all possible values per roll
    calcOptions() {
        let options = {};

        options[whiteTotal] = this.white1 + this.white2;
        options[redWhite1] = this.red + this.white1;
        options[redWhite2] = this.red + this.white2;
        options[yellowWhite1] = this.yellow + this.white1;
        options[yellowWhite2] = this.yellow + this.white2;
        options[greenWhite1] = this.green + this.white1;
        options[greenWhite2] = this.green + this.white2;
        options[blueWhite1] = this.blue + this.white1;
        options[blueWhite2] = this.blue + this.white2;

        return options;
    }
    
    constructor() {
        // Rolls each die and saves each as obj property
        this.white1 = this.rollDie();
        this.white2 = this.rollDie();
        this.red = this.rollDie();
        this.yellow = this.rollDie();
        this.green = this.rollDie();
        this.blue = this.rollDie();

        // Calculates addition options of all dice rolled
        this.additionOptions = this.calcOptions();

        // Defines dice elements for use throughout game
        this.elements = {
            white1: document.querySelector('#white1'),
            white2: document.querySelector('#white2'),
            red: document.querySelector('#red-die'),
            yellow: document.querySelector('#yellow-die'),
            green: document.querySelector('#green-die'),
            blue: document.querySelector('#blue-die')
        };
    }
}

// Class to be used for a new game, references key values throughout
class Game {
    constructor() {
        this.start = true;
        this.playerChoice = '';
        this.whiteSelection = false;
        this.combinationSelection = false;
        this.penaltyCount = 0;
        this.penaltyScore = 0;
        this.scoreTotal = 0;
        this.diceRolled = false;
        this.colorsInPlay = 4;
        this.displayWhiteOption = false;
        
        // Constructs new Color objects for game use
        this.red = new Color('red');
        this.yellow = new Color('yellow');
        this.green = new Color('green');
        this.blue = new Color('blue');
    }
}

// Reference for the point values throughout the game
const pointsRef = {
    1: 1,
    2: 3,
    3: 6,
    4: 10,
    5: 15,
    6: 21,
    7: 28,
    8: 36,
    9: 45,
    10: 55,
    11: 66,
    12: 78
};

export {
    Element, Color, rollDice, Game, pointsRef
};