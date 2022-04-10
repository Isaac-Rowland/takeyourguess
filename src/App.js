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
      <div className="gamePage">
        <GuessComponent 
        todaysSong={todaysSong}
        setTodaysSong={setTodaysSong}
        songId={songId}
        />
        <YoutubePlayer 
        songId={songId}
        />
      </div>
    </div>
  );
}

export default App;
