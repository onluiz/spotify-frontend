import React from 'react'
import { FilterDate } from './FilterDate'
import { FilterInteger } from './FilterInteger'
import { FilterIntegerMinMax } from './FilterIntegerMinMax'

const FiltersContainer = () => {
  return (
    <div>
      <h3>Filters</h3>
      <FilterDate />
      <FilterInteger />
      <FilterIntegerMinMax />
    </div>
  )
}

export { FiltersContainer }