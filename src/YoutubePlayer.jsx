import React, { useState, useEffect } from "react";


export function YoutubePlayer({songId}) {
  const [endTime, setEndTime] = useState(3);
// TODO endtime state with count in app.js
// logic for matching guess and todaysSong
// get youtube id
// styles... hides youtube vid
  const handleGuessClick = () => {
    window.player.loadVideoById({videoId: songId, startSeconds: 0, endSeconds: 6})
  }

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.youtube.com/iframe_api";
    script.async = true;

    document.body.appendChild(script);

    window.onYouTubeIframeAPIReady = () => {

      window.player = new window.YT.Player('player', {
        height: '390',
        width: '640',
        videoId: songId,
        playerVars: {
          'playsinline': 1,
          'end': endTime,
          // 'controls': 0
        },
        events: {
          'onReady': window.onPlayerReady,
          'onStateChange': window.onPlayerStateChange
        }
      });
    };
  }, []);
  return (
    <>
      <div id="player">
        potato
      </div>
        <button onClick={handleGuessClick}>potato</button>
    </>
  );
}

