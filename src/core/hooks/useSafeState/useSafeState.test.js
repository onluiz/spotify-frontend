import { renderHook, act } from '@testing-library/react-hooks'
import { useSafeState } from './useSafeState'

describe('useSafeState', () => {

  const initialState = 'initial state'
  const newState = 'new state'

  test('should change state when mounted', () => {
    const { result } = renderHook(() => useSafeState(initialState))

    act(() => {
      result.current[1](newState)
    })

    expect(result.current[0]).toEqual(newState)
  })

  test('should not change state when unmounted', () => {
    const { result, unmount } = renderHook(() => useSafeState(initialState))

    act(() => {
      unmount()
      result.current[1](newState)
    })

    expect(result.current[0]).toEqual(initialState)
  })

})
