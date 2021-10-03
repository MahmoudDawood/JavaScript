import Hangman from './hangman'
import getPuzzle from './requests'

const puzzle = document.querySelector('#puzzle')
const guess = document.querySelector('#guesses')
let game1

window.addEventListener('keypress', (e) => {
    const key = String.fromCharCode(e.charCode)
    game1.makesGuess(key)
    render()
})

const render = () => {
    puzzle.innerHTML = ''
    guess.textContent = game1.statusMessage
    
    game1.puzzle.split('').forEach((letter) => {
        const char = document.createElement('span')
        char.textContent = letter
        puzzle.appendChild(char)
    })
}

const startGame = async () => {
    const puzzle = await getPuzzle('2')
    game1 = new Hangman(puzzle, 5)
    render()
}

document.querySelector('#reset').addEventListener('click', startGame)

startGame()
