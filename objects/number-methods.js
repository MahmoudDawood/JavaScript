let makeGuess = function(guess){
    return guess === Math.floor(Math.random() * 5) + 1
}
console.log(makeGuess(1))