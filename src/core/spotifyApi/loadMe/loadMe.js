import { getAxiosInstance } from '../getAxiosInstance'

const loadMe = (accessToken) => {
  const instance = getAxiosInstance(accessToken)

  return instance.get('/me')
}

export { loadMe }