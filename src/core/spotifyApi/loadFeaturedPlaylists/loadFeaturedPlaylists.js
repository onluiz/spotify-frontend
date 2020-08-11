import { getAxiosInstance } from '../getAxiosInstance'

const loadFeaturedPlaylists = (accessToken, filter = {}) => {
  const instance = getAxiosInstance(accessToken)
  
  return instance.get('/browse/featured-playlists', {
    params: {
      ...filter
    }
  })
}

export { loadFeaturedPlaylists }