import React, { useState } from 'react';
import choosenSong from "./randomSong";

function GuessComponent({todaysSong, setChosenSong}) {
const [guess, setGuess] = useState('')
const [guesses, setGuesses] = useState([])

  
const onInputChange = (event) => {
  setGuess(event.target.value)
}

const onGuessSubmit = () => {
  setGuesses(guesses.concat([guess]))
}

const resetGuesses = () => {
  setGuesses([])
  setChosenSong(choosenSong())
}

  if(guesses.length < 5) {
    return (
      <div>
        <div className='guessBox'>
        {
          guesses.map((guess) => (<p className='guess'>{guess}</p>))
        }
        </div>
        <input className='userInput' onChange={onInputChange}type="text" />
        <button onClick={onGuessSubmit}className="guess">Guess</button>
      </div>
    )
  }
  else return (
    // TODO: Move this out to a separate 
    // <TryAgain song={todaysSong} onClick={resetGuesses}/> component
    <div>
      <h2>Nice try</h2>
      <h3>The correct theme was {todaysSong}</h3>
      <button onClick={resetGuesses}>Try again with a new theme</button>
    </div>
  )
  
}

export default GuessComponent