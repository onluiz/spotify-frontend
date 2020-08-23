import React, { useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Pagination from '@material-ui/lab/Pagination';
import { useSafeState } from '../../core/hooks'
import { setPagination } from '../../redux/reducers/playlist'

const PaginationContainer = () => {
  const dispatch = useDispatch()
  const mounted = useRef(false)
  const limit = useSelector(state => state.playlist.filter.limit)
  const page = useSelector(state => state.playlist.filter.page)
  const total = useSelector(state => state.playlist.total)
  const [totalPages, setTotalPages] = useSafeState(0)

  useEffect(() => {
    mounted.current = true
    return () => {
      mounted.current = false
    }
  })

  useEffect(() => {
    setTotalPages(Math.ceil(total / limit) || 0)
  }, [total, limit, setTotalPages])

  const onChange = (event, value) => {
    if (mounted.current) {
      const offset = (value * limit) - limit
      const page = value
      dispatch(setPagination(offset, page))
    }
  }

  return (
    <Pagination count={totalPages} page={page} onChange={onChange} />
  )
}

export { PaginationContainer }