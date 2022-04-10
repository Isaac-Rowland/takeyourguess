import React, { useState } from 'react';
import choosenSong from "./randomSong";
import TryAgain from './TryAgain';
import { playVideo } from './YoutubePlayer';

function GuessComponent({todaysSong, setTodaysSong, songId}) {
const [guess, setGuess] = useState('')
const [guesses, setGuesses] = useState([])
const [endTime, setEndTime] = useState(6)


  
const onInputChange = (event) => {
  setGuess(event.target.value)
}

const onGuessSubmit = () => {
  setGuesses(guesses.concat([guess]))
  if (isGuessCorrect(guess, todaysSong)){
    console.log('nice work')
  }
  else{
    setEndTime(endTime+2)
  }
}

const isGuessCorrect = (guess, todaysSong) => (
  guess === todaysSong
)

const resetGuesses = () => {
  setGuesses([])
  setTodaysSong(choosenSong())
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
        <button onClick={() => playVideo(endTime, songId)}>PLAY</button>
        <p>{todaysSong}</p>
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