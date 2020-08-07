import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { authenticate, unauthenticate, setAccessToken } from '../../../redux'
import { useSafeState } from '../../hooks'
import { validateToken } from '../validateToken'

const TOKEN_KEY = 'access_token'
const { localStorage } = window

const Auth = ({ children }) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const accessToken = useSelector(state => state.auth.accessToken)
  const authenticated = useSelector(state => state.auth.authenticated)

  useEffect(() => {
    const storedAccessToken = localStorage.getItem(TOKEN_KEY)
    if (storedAccessToken) {
      dispatch(setAccessToken(localStorage.getItem(TOKEN_KEY)))
    }
  }, [dispatch])

  useEffect(() => {
    let mounted = true

    const checkAuthentication = async () => {
      const tokenValid = await validateToken(accessToken)

      if (tokenValid) {
        console.log('token valid')
        localStorage.setItem(TOKEN_KEY, accessToken)
        mounted && dispatch(authenticate())
      } else {
        console.log('token invalid')
        localStorage.removeItem(TOKEN_KEY)
        mounted && dispatch(unauthenticate())
      }
    }

    checkAuthentication()

    return () => {
      mounted = false
    }
  }, [accessToken, dispatch])

  useEffect(() => {
    let mounted = true

    if (mounted && !!authenticate) {
      history.push('/')
    }

    return () => mounted = false
  }, [authenticated])

  return (
    <>{children}</>
  )
}

Auth.propTypes = {
  children: PropTypes.any.isRequired
}

export { Auth }