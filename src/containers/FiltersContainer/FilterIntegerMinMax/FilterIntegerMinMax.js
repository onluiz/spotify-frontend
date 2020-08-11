import React, { useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { useSafeState } from '../../../core/hooks'
import { idgen } from '../../../core/utils'
import { setLimit } from '../../../redux/reducers/playlist'

const R = require('ramda')
const idPrefix = 'filter-minmax-'

const FilterIntegerMinMax = () => {
  const dispatch = useDispatch()
  const mounted = useRef(false)
  const limit = useSelector(state => state.playlist.filters.limit)
  const limitValue = useSelector(state => state.playlist.filter.limit)
  const [options, setOptions] = useSafeState([])

  useEffect(() => {
    mounted.current = true

    return () => {
      mounted.current = false
    }
  }, [])

  useEffect(() => {
    if (limit.validation.min && limit.validation.max && R.isEmpty(options)) {
      setOptions(R.range(limit.validation.min, R.inc(limit.validation.max)))
    }
  }, [limit.validation.min, limit.validation.max, options, setOptions])

  const onChange = (event) => {
    const value = event.target.value
    if (mounted.current && value && R.is(Number, value)) {
      dispatch(setLimit(value))
    }
  }

  return (
    <FormControl>
      {!R.isEmpty(options) && (
        <>
          <InputLabel id={`${idPrefix}${limit.id}-label`}>
            {limit.name}
          </InputLabel>
          <Select
            labelId={`${idPrefix}${limit.id}-label`}
            id={`${idPrefix}${limit.id}`}
            value={limitValue}
            onChange={onChange}
          >
            {!R.isEmpty(options) && (options.map((option) => (
              <MenuItem key={idgen()} value={option}>{option}</MenuItem>
            )))}
          </Select>
        </>
      )}
    </FormControl>
  )
}

export { FilterIntegerMinMax }