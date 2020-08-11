import React from 'react'
import { FilterDate } from './FilterDate'
import { FilterIntegerMinMax } from './FilterIntegerMinMax'

const FiltersContainer = () => {
  return (
    <div>
      <h3>Filters</h3>
      <FilterDate />
      <FilterIntegerMinMax />
    </div>
  )
}

export { FiltersContainer }