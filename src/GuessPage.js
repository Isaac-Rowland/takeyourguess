import { useState, useEffect } from "react";
import axios from "axios";
import choosenSong from "./songsList";
import spotifyToken from "./SpotifyToken";
import UserInput from "./imputLogic";

//TODO: once all state has moved out to app.js, 
// get rid of this file
export default function GuessPage() {
  const[song, setSong] = useState()
  const [token, setToken] = useState('')
  const todaysSong = choosenSong()
  const getUrl = async (token) => {
    const header = {
      headers: {
      Accept: "application/json", 
      "Content-Type": "application/json", 
      Authorization: `Bearer ${token}`
      }
      
    }
    const res = await axios.get(`https://api.spotify.com/v1/search?q=$${todaysSong}%20theme&type=track`, header)
    return res.data.tracks.items[0].uri
  }

  
  useEffect(() => {
    
  spotifyToken()
  .then(token => getUrl(token))
  .then(song => setSong(song))
  .then(() => console.log(song))
  }, [])
  return (
    <div className="gamePage">
      <UserInput 
      todaysSong={todaysSong}
      />
      {/* <Player 
      token={token}
      song={song}
      /> */}
  </div>
)

}
