import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { parse } from 'query-string'
import { setAccessToken } from '../../redux'

const CallbackPage = () => {
  const dispatch = useDispatch()
  const location = useLocation()
  const accessToken = useSelector(state => state.auth.accessToken)
  const params = parse(location.hash)

  useEffect(() => {
    dispatch(setAccessToken(params.access_token))
  }, [dispatch, params.access_token])

  return <h2>CallbackPage {accessToken}</h2>;
}

export { CallbackPage }