import axios from "axios";
import choosenSong from "./songsList";
import qs from 'qs';

async function spotifyToken() {

  const client_id = "5b88bfa209e0421bb18bded58a8bc464"
  const client_secret = "a2ac08bc395c48879c9bd88e31bd6a90"

  const headers = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    auth: {
      username: client_id,
      password: client_secret,
    },
  };
  const data = {
    grant_type: 'client_credentials',
  };

  try {
    const response = await axios.post(
      'https://accounts.spotify.com/api/token',
      qs.stringify(data),
      headers
    )
    // console.log(response.data.access_token)
    return response.data.access_token
  } catch (error) {
    console.log(error)
  }
}

export default spotifyToken