import './App.css';
import { useState, useEffect } from "react";
import choosenSong from "./randomSong";
import GuessComponent from "./imputLogic";
import { setSongUri } from './apiData';
import Player from './player';
import WebPlayback from './WebPlayBack';

function App() {
  
    const[song, setSong] = useState('')
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
        <WebPlayback token="BQDU2ctJyTB6xdbpx4MPZjm6SLohCdgFJrjUW52NdPpobco7V83lNY5ZCJFRlO2spse6o2fPhn_vmRCrHKroyLUTLdgBJQ8gCMTVINGus1BUG9EKYBzOR85TfSeNICTf1zZeDjhfXGQ4ImqIylNunI2ZZyehqanKVsc
"/>
      </div>
    </div>
  );
}

export default App;
