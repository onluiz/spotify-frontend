import React from 'react'
import { useTranslation } from 'react-i18next'
import Button from '@material-ui/core/Button'
import { FilterDate } from './FilterDate'
import { FilterInteger } from './FilterInteger'
import { FilterIntegerMinMax } from './FilterIntegerMinMax'

const FiltersContainer = () => {
  const { t } = useTranslation()
  return (
    <div>
      <h3>Filters</h3>
      <FilterDate />
      <FilterInteger />
      <FilterIntegerMinMax />
      <Button>{t('filters.reset')}</Button>
    </div>
  )
}

export { FiltersContainer }