import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import { setOffset } from '../../../redux/reducers/playlist'

const FilterInteger = () => {
  // const offset = useSelector(state => state.playlist.filters.offset)
  const dispatch = useDispatch()
  const offsetValue = useSelector(state => state.playlist.filter.offset)
  const limitValue = useSelector(state => state.playlist.filter.limit)
  const pageValue = useSelector(state => state.playlist.filter.page)


  useEffect(() => {
    console.log(offsetValue, limitValue)
  }, [offsetValue, limitValue, pageValue])

  const onClick = () => {
    dispatch(setOffset(pageValue + 1))
  }

  return (
    <FormControl>
      <Button variant="contained" color="primary" onClick={onClick}>
        Offset: {offsetValue} <br />
        Limit: {limitValue} <br />
        Page: {pageValue}
      </Button>
    </FormControl>
  )
}

export { FilterInteger }