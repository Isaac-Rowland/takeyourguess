import axios from "axios";


export async function getSongId(todaysSong) {
  const res = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${todaysSong}theme&key=${process.env.REACT_APP_YOUTUBEKEY}`)
  return res.data.items[0].id.videoId
}