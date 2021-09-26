const puzzle = document.querySelector('#puzzle')
const guess = document.querySelector('#guesses')
let game1

window.addEventListener('keypress', (e) => {
    const key = String.fromCharCode(e.charCode)
    game1.makesGuess(key)
    render()
})

const render = () => {
    puzzle.textContent = game1.puzzle
    guess.textContent = game1.statusMessage
}

const startGame = async () => {
    const puzzle = await getPuzzle('2')
    game1 = new Hangman(puzzle, 5)
    render()
}

document.querySelector('#reset').addEventListener('click', startGame)

startGame()

// getPuzzle('2').then((puzzle) => {
//     console.log(puzzle)
// }).catch((error) => {
//     console.log(`Error: ${error}`)
// })

// const data = getCountry('MX').then((country) => {
//     console.log(country.name)
// }).catch((error) => {
//     console.log(`Error: ${error}`)
// })

// getCurrentCountry().then((country) => {
//     console.log(country)
// }).cathc((error) => {
//     console.log(error)
// })

