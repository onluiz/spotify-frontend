import { loadMe } from '../../spotifyApi'

const validateToken = async (accessToken) => {
  let validToken = false

  try {
    await loadMe(accessToken)
    validToken = true
  } catch (error) {
    validToken = false
  }
  
  return validToken
}

export { validateToken }