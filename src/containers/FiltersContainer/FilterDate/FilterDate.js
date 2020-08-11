import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import FormControl from '@material-ui/core/FormControl';
import { DateTimePicker } from '@material-ui/pickers';
import { setTimestamp } from '../../../redux/reducers/playlist'

const idPrefix = 'filter-date-'

const FilterDate = () => {
  const dispatch = useDispatch()
  const mounted = useRef(false)
  const timestamp = useSelector(state => state.playlist.filters.timestamp)
  const timestampValue = useSelector(state => state.playlist.filter.timestamp)

  useEffect(() => {
    mounted.current = true
    return () => {
      mounted.current = false
    }
  }, [])

  const onChange = (date) => {
    if (date && mounted.current) {
      const formattedDate = date.toISOString().replace('Z', '')
      mounted.current && dispatch(setTimestamp(formattedDate))
    }
  }

  const parsePattern = (pattern = '') => {
    return pattern.replace('T', ' ')
  }

  return (
    <FormControl>
      <DateTimePicker
        id={`${idPrefix}${timestamp.id}`}
        label={timestamp.name}
        value={timestampValue}
        format={parsePattern(timestamp.validation.pattern)}
        onChange={onChange}
      />
    </FormControl>
  );
}

export { FilterDate }