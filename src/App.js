import './App.css';
import { useState, useEffect } from "react";
import choosenSong from "./randomSong";
import GuessComponent from "./imputLogic";
import { setSongUri } from './apiData';
import Player from './player';
import WebPlayback from './WebPlayBack';
import { YoutubePlayer } from './YoutubePlayer';

function App() {
  
    const[song, setSong] = useState('')
    const [token, setToken] = useState('')
    const [todaysSong, setTodaysSong] = useState(choosenSong())
    
   

    useEffect(() => {
      // setSongUri(todaysSong, setSong)
    }, [todaysSong])


  return (
    <div className="App">
      <div className="gamePage">
        <GuessComponent 
        todaysSong={todaysSong}
        setChosenSong={setTodaysSong}
        />
        <YoutubePlayer />
      </div>
    </div>
  );
}

export default App;
