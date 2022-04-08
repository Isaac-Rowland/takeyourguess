import songs from "./songList"

function choosenSong() {
  

  return songs[(Math.floor(Math.random() * Object.keys(songs).length))]
}


export default choosenSong








