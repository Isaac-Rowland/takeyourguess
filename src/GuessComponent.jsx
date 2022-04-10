import React, { useState } from 'react';
import choosenSong from "./randomSong";
import TryAgain from './TryAgain';
import { playVideo } from './YoutubePlayer';
import { AudioPlayer } from './AudioPlayer';
import { PlayButton } from './playButton/PlayButton';
import { Cross } from './incorrect';

function GuessComponent({todaysSong, setTodaysSong, songId}) {
const [guess, setGuess] = useState('')
const [guesses, setGuesses] = useState([])
const [endTime, setEndTime] = useState(6)
const [gameInProgress, setgameInProgress] = useState(true)
  
const onInputChange = (event) => {
  setGuess(event.target.value)
}

const onGuessSubmit = () => {
  setGuesses(guesses.concat([guess]))
  if (isGuessCorrect(guess, todaysSong)){
    setgameInProgress(false)
    document.getElementById("player").classList.toggle('player')
    playVideo(-1, songId)
  }
  else{
    setEndTime(endTime+2)
    document.getElementById('audioPlayer').classList = "audioPlayer"
    document.getElementById('audioPlayer').style.width = '4px';
  }
}

const isGuessCorrect = (guess, todaysSong) => (
  guess.toLowerCase() === todaysSong.toLowerCase()
)

const resetGuesses = () => {
  setGuesses([])
  setTodaysSong(choosenSong())
  setEndTime(6)
  setgameInProgress(true)
  window.player.stopVideo()
}

const clearVideo = () => {
  document.getElementById("player").classList.toggle('player')
  window.player.stopVideo()
  resetGuesses()

}
    return (
    <>
      {!gameInProgress && 
        <div>
          <p>Winner</p>
          <p>you guessed {todaysSong}</p>
          <button onClick={clearVideo}>Try again with a new theme</button>
        </div>
      }
      {guesses.length > 5 && 
        <TryAgain 
          resetGuesses={resetGuesses}
          todaysSong={todaysSong}
        />
      }
      {gameInProgress && guesses.length <= 5 && <div>
          <div className='guessBox'>
            {guesses.map((guess) => (
            <div className='incorrectContainer'>
              <Cross/>
              <p className='incorrectGuess'>{guess}</p>
            </div>
            ))
            }
          </div>
          <div className='guessControls'>
              <input className='userInput' onChange={onInputChange} type="text" />
              <button onClick={onGuessSubmit}className="guess">Guess</button>
            </div>
          
          
          <div className='audioControls'>
            <AudioPlayer duration={endTime-4}/>
            <PlayButton onClick={() => playVideo(endTime, songId)}/>
          </div>
        </div>
      }   
    </>
    )
}

export default GuessComponent