// Object to reference game state
let gameState = {
    start: true,
    gameOver: false,
    playerChoice: '',
    scores: {
        red: 0,
        yellow: 0,
        green: 0,
        blue: 0,
        penalties: 0,
        total: 0
    },
    pointsRef: {
        1: 1,
        2: 3,
        4: 10,
        5: 15,
        6: 21,
        7: 28,
        8: 36,
        9: 45,
        10: 55,
        11: 66,
        12: 78
    },
    playerSelectionCount: {
        red: 0,
        yellow: 0,
        green: 0,
        blue: 0,
        penalties: 0
    },
    colorStatus: {
        lowestRed: 0,
        lowestYellow: 0,
        highestGreen: 13,
        highestBlue: 13
    },
    whiteSelection: false,
    combinationSelection: false,
    diceRolled: false,
    colorInPlay: {
        count: 4,
        red: true,
        yellow: true,
        green: true,
        blue: true
    },
    roll: {
        white1: 0,
        white2: 0,
        red: 0,
        yellow: 0,
        green: 0,
        blue: 0
    },
    rollValues: {
        whiteTotal: 0,
        redWhite1: 0,
        redWhite2: 0,
        yellowWhite1: 0,
        yellowWhite2: 0,
        greenWhite1: 0,
        greenWhite2: 0,
        blueWhite1: 0,
        blueWhite2: 0
    }
}

// Allows for gameState object to be manipulated by gameFunctions and accessed by app
export { gameState };