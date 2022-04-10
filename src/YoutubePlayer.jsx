import React, { useState, useEffect } from "react";

export const playVideo = (endTime, songId) => {
  window.player.loadVideoById({videoId: songId, startSeconds: 4, endSeconds: endTime})
}

export function YoutubePlayer({songId}) {
// TODO endtime state with count in app.js
// logic for matching guess and todaysSong
// styles... hides youtube vid

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
          'start': 4,
          'end': 6,
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
      </div>
    </>
  );
}

