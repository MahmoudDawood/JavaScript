const game = document.querySelector('#game')
const puzzle = document.querySelector('#puzzle')
const guess = document.querySelector('#guesses')

const game1 = new Hangman('car parts', 2)

puzzle.textContent = game1.puzzle //getPuzzle()
guess.textContent = game1.statusMessage

window.addEventListener('keypress', function(e){
    const key = String.fromCharCode(e.charCode)
    game1.makesGuess(key)
    puzzle.textContent = game1.puzzle
    guess.textContent = game1.statusMessage
})
