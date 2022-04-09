import React, { useState } from 'react';
import choosenSong from "./randomSong";
import TryAgain from './TryAgain';

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
    <TryAgain 
    resetGuesses={resetGuesses}
    todaysSong={todaysSong}
    />
  )
  
}

export default GuessComponent