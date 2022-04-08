import axios from "axios";
import spotifyToken from "./SpotifyToken";



export const getUrl = async (token, todaysSong) => {
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

export function setSongUri(todaysSong, setSong) {
  spotifyToken()
  .then(token => getUrl(token, todaysSong))
  .then(song => setSong(song))
}