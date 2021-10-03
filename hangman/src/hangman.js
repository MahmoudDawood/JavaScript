class Hangman {
    constructor(word =[], guesses){
        this.word = word.toLowerCase().split('')
        this.guesses = guesses
        this.guessedLetters = []
        this.status = 'playing'
    }

    makesGuess(guess){
        if(this.status !== 'playing'){
            return
        }
    
        guess = guess.toLowerCase()
        if(this.guessedLetters.includes(guess)){
            return
        } else if(this.word.includes(guess)){
            this.guessedLetters.push(guess)
        } else{
            this.guesses --
            this.guessedLetters = [...this.guessedLetters, guess]
        }
        this.puzzleState()
    }

    get puzzle(){
        let result = ''
        this.word.forEach(letter => {
            if(this.guessedLetters.includes(letter) || letter === ' '){
                result += letter
            } else{
                result += '*'
            }
        })
        return result
    }

    puzzleState(){
        const puzzle = this.puzzle
        if(this.guesses < 1){
            this.status = 'failed'
        } else if(!puzzle.includes('*')){
            this.status = 'finished'
        } else{
            this.status = 'playing'
        }
    }
    
    get statusMessage(){
        if(this.status === 'playing'){
            return (`Guesses left: ${this.guesses}.`)
        }
        else if(this.status === 'finished'){
            return ('Great work!  You guessed the word.')
        }
        else{
            return (`Nice try! The word was"${this.word.join('')}".`)
        }
    }
}

export {Hangman as default}