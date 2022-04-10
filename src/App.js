import './App.css';
import { useState, useEffect } from "react";
import choosenSong from "./randomSong";
import GuessComponent from "./GuessComponent";
import { getSongId } from './apiData';
import { YoutubePlayer } from './YoutubePlayer';

function App() {
  
    const[songId, setSongId] = useState('')
    const [todaysSong, setTodaysSong] = useState(choosenSong())


    useEffect(() => {
      getSongId(todaysSong)
      .then(id=> setSongId(id))
    }, [todaysSong])


  return (
    <div className="App">

        <h1>Guess that theme song</h1>
      <div className='instructions'>
        <strong>Instructions</strong>
        <p>1. Press the play button to start you off.</p>
        <p>2. If you don't know just take a random guess.</p>
        <p>3. Every guess will add on 2 seconds to the timer if you guess incorrectly.</p>
      </div>
      <div className="gamePage">
      <YoutubePlayer 
        songId={songId}
        />
        <GuessComponent 
        todaysSong={todaysSong}
        setTodaysSong={setTodaysSong}
        songId={songId}
        />
      </div>
    </div>
  );
}

export default App;
