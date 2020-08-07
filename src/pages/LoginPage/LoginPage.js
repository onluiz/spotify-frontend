import React from 'react'
import { useAuth } from '../../core/auth'

const LoginPage = () => {
  const { getAuthUri } = useAuth()
  const uri = getAuthUri()

  return (
    <div>
      <h1>LoginPage</h1>
      <a href={uri}>Acessar</a>
    </div>
  )
}

export { LoginPage }