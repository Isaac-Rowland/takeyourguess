import React, { useState, useEffect } from "react";
import "./player.css";

const track = 
// {
//   name: "",
//   album: {
//     images: [{ url: "" }],
//   },
//   artists: [{ name: "" }],
// };

{
  "album": {
    "album_type": "album",
    "artists": [
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/0clhXvKQeY8xOFIXwePnyR"
        },
        "href": "https://api.spotify.com/v1/artists/0clhXvKQeY8xOFIXwePnyR",
        "id": "0clhXvKQeY8xOFIXwePnyR",
        "name": "TV Themes",
        "type": "artist",
        "uri": "spotify:artist:0clhXvKQeY8xOFIXwePnyR"
      }
    ],
    "external_urls": {
      "spotify": "https://open.spotify.com/album/6h5tWFDttvvm6CpkFhE7sH"
    },
    "href": "https://api.spotify.com/v1/albums/6h5tWFDttvvm6CpkFhE7sH",
    "id": "6h5tWFDttvvm6CpkFhE7sH",
    "images": [
      {
        "height": 640,
        "url": "https://i.scdn.co/image/ab67616d0000b2735199f913d0ca8c18900f3202",
        "width": 640
      },
      {
        "height": 300,
        "url": "https://i.scdn.co/image/ab67616d00001e025199f913d0ca8c18900f3202",
        "width": 300
      },
      {
        "height": 64,
        "url": "https://i.scdn.co/image/ab67616d000048515199f913d0ca8c18900f3202",
        "width": 64
      }
    ],
    "name": "The Greatest Comedy Television Themes Ever",
    "release_date": "2019-05-16",
    "release_date_precision": "day",
    "total_tracks": 30,
    "type": "album",
    "uri": "spotify:album:6h5tWFDttvvm6CpkFhE7sH"
  },
  "artists": [
    {
      "external_urls": {
        "spotify": "https://open.spotify.com/artist/0clhXvKQeY8xOFIXwePnyR"
      },
      "href": "https://api.spotify.com/v1/artists/0clhXvKQeY8xOFIXwePnyR",
      "id": "0clhXvKQeY8xOFIXwePnyR",
      "name": "TV Themes",
      "type": "artist",
      "uri": "spotify:artist:0clhXvKQeY8xOFIXwePnyR"
    }
  ],

  "disc_number": 1,
  "duration_ms": 53960,
  "explicit": false,
  "external_ids": {
    "isrc": "UKDNQ1542690"
  },
  "name": "Different Strokes",
}

export function WebPlayback(props) {
  const [player, setPlayer] = useState(undefined);
  const [is_paused, setPaused] = useState(true);
  const [is_active, setActive] = useState(false);
  const [current_track, setTrack] = useState(track);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://sdk.scdn.co/spotify-player.js";
    script.async = true;
    document.body.appendChild(script);
    window.onSpotifyWebPlaybackSDKReady = () => {
      const player = new window.Spotify.Player({
        name: "Web Playback SDK",
        getOAuthToken: (cb) => {
          cb(props.token);
        },
        volume: 0.5,
      });
      setPlayer(player);
      player.addListener("ready", ({ device_id }) => {
        console.log("Ready with Device ID", device_id);
      });
      player.addListener("not_ready", ({ device_id }) => {
        console.log("Device ID has gone offline", device_id);
      });
      player.addListener("player_state_changed", (state) => {
        console.log("state", state)
        
        // if (!state) {
        //   return;
        // }
        // setTrack(state.track_window.current_track);
        // setTrack('https://open.spotify.com/track/591rVlNAjjUyA44aq6PzTH?si=2b426960f7a54f61');
        setPaused(true);
        // player.getCurrentState().then((state) => {
        //   !state ? setActive(false) : setActive(true);
        // });
        setActive(true)
      });
      player.connect();
    };
  }, []);
  return (
    <>
      <div className="container">
        <div className="main-wrapper">
          <img
            src={current_track.album.images[0].url}
            className="now-playing__cover"
            alt=""
          />
          <div className="now-playing__side">
            <div className="now-playing__name">{current_track.name}</div>
            <div className="now-playing__artist">
              {current_track.artists[0].name}
              <button
                className="btn-spotify"
                onClick={() => {
                  player.togglePlay();
                }}
              >
                {is_paused ? "PLAY" : "PAUSE"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WebPlayback;
