import axios from 'axios'

const getAxiosInstance = (accessToken) => {
  return axios.create({
    baseURL: 'https://api.spotify.com/v1',
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${accessToken}`
    }
  })
}

export { getAxiosInstance }