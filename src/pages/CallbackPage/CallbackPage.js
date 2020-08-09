import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { parse } from 'query-string'
import { SplashScreen } from '../../components'
import { setAccessToken } from '../../redux'

const CallbackPage = () => {
  const dispatch = useDispatch()
  const location = useLocation()
  const params = parse(location.hash)

  useEffect(() => {
    dispatch(setAccessToken(params.access_token))
  }, [dispatch, params.access_token])

  return <><SplashScreen /></>;
}

export { CallbackPage }