import './App.css';
import { useState, useEffect } from "react";
import choosenSong from "./randomSong";
import GuessComponent from "./imputLogic";
import { setSongUri } from './apiData';

function App() {
  
    const[song, setSong] = useState()
    const [token, setToken] = useState('')
    const [todaysSong, setTodaysSong] = useState(choosenSong())
    
    useEffect(() => {
      setSongUri(todaysSong, setSong)
    }, [todaysSong])


  return (
    <div className="App">
      <div className="gamePage">
        <GuessComponent 
        todaysSong={todaysSong}
        setChosenSong={setTodaysSong}
        />
      </div>
    </div>
  );
}

export default App;
