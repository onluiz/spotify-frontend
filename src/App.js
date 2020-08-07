import React from 'react';
import {
  BrowserRouter as Router,
  Link,
} from "react-router-dom";
import { Routes } from './core/routes'
import { Auth } from './core/auth'

const getUri = () => {
  const clientId = process.env.REACT_APP_SPOTFY_CLIENT_ID
  const redirectUrl = process.env.REACT_APP_SPOTFY_REDIRECT_URL
  const scope = ['user-read-private', 'user-read-email'].join('%20')
  const uri = `https://accounts.spotify.com/authorize?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scope}&response_type=token&state=123`
  return uri
}

function App() {
  const uri = getUri()

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <a href={uri}>Auth</a>
            </li>
            <li>
              <Link to="/callback">CallbackPage</Link>
            </li>
            <li>
              <Link to="/">Login</Link>
            </li>
          </ul>
        </nav>

        <Auth>
          <Routes />
        </Auth>
      </div>
    </Router>
  );
}

// function CallbackPage() {
//   const location = useLocation()
//   const params = queryString.parse(location.hash)
//   console.log(queryString.parse(location.hash))

//   const spotifyApi = new SpotifyWebApi()
//   spotifyApi.setAccessToken(params.access_token);

//   spotifyApi.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE', function (err, data) {
//     if (err) console.error(err);
//     else console.log('Artist albums', data);
//   });

//   return <h2>CallbackPage</h2>;
// }

export default App;
