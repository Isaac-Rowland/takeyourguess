import axios from "axios";
import qs from 'qs';

async function spotifyToken() {

  const client_id = "4a5e0f50e45c4c7e95ad0ad5f7e32619"
  const client_secret = "4e54cb156fe84879975f3a3333e4f7ed"

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