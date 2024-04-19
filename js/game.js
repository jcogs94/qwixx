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
        this.scoreElement = document.querySelector(`#${color}-total-box`);
        this.dieElement = document.querySelector(`#${color}-die`);
        this.buttonElements = Color.getButtonElements(color);
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
            this.buttonElements['L'].appendChild(boxMark);
        }
        else {
            // Append new 'X' element to the number selected
            this.buttonElements[num].appendChild(boxMark);
        }
    }

    // Locks entire row of buttons for this color
    lockColor() {
        let rowKeys = Object.keys(this.buttonElements);
        rowKeys.forEach( (key) => {
            this.buttonElements[key].setAttribute('disabled', true);
        });
    }
}

export {
    Element, Color
};