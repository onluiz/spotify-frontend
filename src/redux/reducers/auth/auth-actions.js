export const AUTHENTICATE = 'AUTHENTICATE'
export const UNAUTHENTICATE = 'UNAUTHENTICATE'
export const SET_TOKEN = 'SET_TOKEN'

export function authenticate(accessToken) {
  return {
    type: AUTHENTICATE,
    payload: {
      authenticated: true
    }
  }
}

export function unauthenticate(accessToken) {
  return {
    type: UNAUTHENTICATE,
    payload: {
      authenticated: false
    }
  }
}

export function setAccessToken(accessToken) {
  return {
    type: SET_TOKEN,
    payload: {
      accessToken,
    }
  }
}