// Object to reference game state
let gameState = {
    start: true,
    gameOver: false,
    diceRolled: false,
    playRed: true,
    playYellow: true,
    playGreen: true,
    playBlue: true,
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
