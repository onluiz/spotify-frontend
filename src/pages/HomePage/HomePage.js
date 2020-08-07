import React from 'react'
import { useDispatch } from 'react-redux'
import { setAccessToken } from '../../redux'

const HomePage = () => {
  const dispatch = useDispatch()
  const signOut = () => {
    dispatch(setAccessToken(''))
  }

  return (
    <div>
      <h1>HomePage</h1>
      <button onClick={signOut}>Sair</button>
    </div>
  )
}

export { HomePage }