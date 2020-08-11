import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFetch } from 'react-async'
import { useTranslation } from 'react-i18next'
import { loadFeaturedPlaylists } from '../../core/spotifyApi'
import { setList, setFilters } from '../../redux/reducers/playlist'
import { FiltersContainer, PlayListItemsContainer } from '../../containers'

const HomePage = () => {
  const mounted = useRef(false)
  const dispatch = useDispatch()
  const { t } = useTranslation()
  const filter = useSelector(state => state.playlist.filter)
  const accessToken = useSelector(state => state.auth.accessToken)
  const { data, error, isPending } = useFetch(process.env.REACT_APP_FILTERS_API, { headers: { Accept: "application/json" } })

  useEffect(() => {
    mounted.current = true
    return () => {
      mounted.current = false
    }
  }, [])

  useEffect(() => {
    if (data && data.filters) {
      const newFilter = {}

      data.filters.forEach(filter => newFilter[filter.id] = { ...filter })

      if (mounted.current && newFilter) {
        dispatch(setFilters(newFilter))
      }
    }
  }, [data, dispatch])

  useEffect(() => {
    const getFeaturedPlaylists = async () => {
      try {
        const { data } = await loadFeaturedPlaylists(accessToken, filter)
        if (mounted.current) {
          dispatch(setList(data.playlists.items))
        }
      } catch (error) {
        console.error(error)
      }
    }
    getFeaturedPlaylists()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, filter])

  return (
    <div>
      {isPending && <div>{t('home.filters.pending')}</div>}
      {error && <div>{t('home.filters.error')}</div>}
      {!isPending && <FiltersContainer />}
      <PlayListItemsContainer />
    </div>
  )
}

export { HomePage }