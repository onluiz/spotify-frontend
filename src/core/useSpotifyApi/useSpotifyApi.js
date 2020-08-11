import { useSelector } from 'react-redux'
import SpotifyWebApi from 'spotify-web-api-js'
import Q from 'q'

const useSpotifyApi = () => {
  const accessToken = useSelector(state => state.auth.accessToken)
  const spotifyApi = new SpotifyWebApi()
  spotifyApi.setAccessToken(accessToken);
  spotifyApi.setPromiseImplementation(Q)
  return spotifyApi
}

export { useSpotifyApi }