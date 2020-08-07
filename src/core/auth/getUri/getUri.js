const getUri = () => {
  const clientId = process.env.REACT_APP_SPOTFY_CLIENT_ID
  const redirectUrl = process.env.REACT_APP_SPOTFY_REDIRECT_URL
  const scope = ['user-read-private', 'user-read-email'].join('%20')
  const uri = `https://accounts.spotify.com/authorize?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scope}&response_type=token&state=123`
  return uri
}

export { getUri }