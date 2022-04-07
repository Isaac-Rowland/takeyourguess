import React, { useState } from 'react';

// TODO: rename component to something more meaningful
function UserInput({todaysSong}) {
const [guess, setGuess] = useState('')
const [guesses, setGuesses] = useState([])
  
// TODO: rename to onInputChange
const addGuess = (event) => {
  setGuess(event.target.value)
}

// TODO: rename to onGuessSubmit 
const allGuesses = () => {
  setGuesses(guesses.concat([guess]))
}

const resetGuesses = () => {
  setGuesses([])
}

  if(guesses.length < 5) {
    return (
      <div>
        <div className='guessBox'>
        {
          guesses.map((guess) => (<p className='guess'>{guess}</p>))
        }
        </div>
        <input className='userInput' onChange={addGuess}type="text" />
        <button onClick={allGuesses}className="guess">Guess</button>
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

export default UserInput