import './App.css';
import { useState, useEffect } from "react";
import choosenSong from "./randomSong";
import GuessComponent from "./imputLogic";
import { getSongId } from './apiData';
import { YoutubePlayer } from './YoutubePlayer';

function App() {
  
    const[songId, setSongId] = useState('')
    const [todaysSong, setTodaysSong] = useState(choosenSong())
    const [endTime, setEndTime] = useState(1)

    useEffect(() => {
      getSongId(todaysSong)
      .then(id=> setSongId(id))
    }, [todaysSong])


  return (
    <div className="App">
      <div className="gamePage">
        <GuessComponent 
        todaysSong={todaysSong}
        setChosenSong={setTodaysSong}
        />
        <YoutubePlayer 
        songId={songId}
        />
      </div>
    </div>
  );
}

export default App;
