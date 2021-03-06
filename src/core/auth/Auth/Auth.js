import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { authenticate, unauthenticate, setAccessToken } from '../../../redux'
import { validateToken } from '../validateToken'

const TOKEN_KEY = 'access_token'
const { localStorage } = window

const Auth = ({ children }) => {
  const mounted = useRef(false)
  const dispatch = useDispatch()
  const history = useHistory()
  const accessToken = useSelector(state => state.auth.accessToken)
  const authenticated = useSelector(state => state.auth.authenticated)

  useEffect(() => {
    mounted.current = true
    return () => {
      mounted.current = false
    }
  })

  useEffect(() => {
    const storedAccessToken = localStorage.getItem(TOKEN_KEY)
    if (storedAccessToken && mounted.current) {
      dispatch(setAccessToken(localStorage.getItem(TOKEN_KEY)))
    }
  }, [dispatch])

  useEffect(() => {
    const checkAuthentication = async () => {
      const tokenValid = await validateToken(accessToken)

      if (tokenValid) {
        localStorage.setItem(TOKEN_KEY, accessToken)
        mounted.current && dispatch(authenticate())
      } else {
        localStorage.removeItem(TOKEN_KEY)
        mounted.current && dispatch(unauthenticate())
      }
    }

    checkAuthentication()
  }, [accessToken, dispatch])

  useEffect(() => {
    if (mounted.current && !!authenticated) {
      history.push('/')
    }
  }, [authenticated, history])

  return (
    <>{children}</>
  )
}

Auth.propTypes = {
  children: PropTypes.any.isRequired
}

export { Auth }