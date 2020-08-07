import { useState, useEffect, useRef } from 'react'

const useSafeState = (initialState) => {
  const [state, setUnsafeState] = useState(initialState)

  const mounted = useRef(false)

  useEffect(() => {
   mounted.current = true
   return () => {
     mounted.current = false
   }
  })

  const setState = (newState) => {
    if (mounted.current) {
      setUnsafeState(newState)
    }
  }

  return [state, setState]
}

export { useSafeState }
