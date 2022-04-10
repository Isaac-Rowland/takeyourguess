import './audioPlayer.css'

export const getAudioPlayerClassname = (duration) => {
  const classes = {
    2: "twoSeconds",
    3: "threeSeconds",
    4: "fourSeconds",
    5: "fiveSeconds",
    6: "sixSeconds",
    8: "eightSeconds",
    10: "tenSeconds",
  }
  return classes[duration]
}

export const updateAudioPlayer = (endTime) => {
  document.getElementById('audioPlayer').classList = "audioPlayer"
  void document.getElementById('audioPlayer').offsetWidth;
  document.getElementById('audioPlayer').classList.add(getAudioPlayerClassname(endTime-4))
}

export const AudioPlayer = ({duration}) => (
  <div className='audioContainer'>
    <div id='audioPlayer' className="audioPlayer"/>
    <p className='duration'>{duration} secs</p>
  </div>
  
)