import SpotifyWebApi from 'spotify-web-api-js'
import Q from 'q'

const validateToken = async (accessToken) => {
  const spotifyApi = new SpotifyWebApi()
  spotifyApi.setAccessToken(accessToken);
  spotifyApi.setPromiseImplementation(Q)

  let validToken = false

  try {
    await spotifyApi.getMe()
    validToken = true
  } catch (error) {
    validToken = false
  }
  
  return validToken
}

export { validateToken }