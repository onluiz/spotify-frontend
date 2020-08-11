import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useAsync } from 'react-async'
import { useTranslation } from 'react-i18next'
import { setList, setFilters } from '../../redux/reducers/playlist'
import { useSpotifyApi } from '../../core/useSpotifyApi'
import { FiltersContainer, PlayListItemsContainer } from '../../containers'

const loadFilters = async () => {
  const res = await fetch(process.env.REACT_APP_FILTERS_API)
  if (!res.ok) throw new Error(res.statusText)
  return res.json()
}

const HomePage = () => {
  const mounted = useRef(false)
  const dispatch = useDispatch()
  const spotifyApi = useSpotifyApi()
  const { t } = useTranslation()
  const filter = useSelector(state => state.playlist.filter)
  const { data, error, isPending } = useAsync(loadFilters)

  useEffect(() => {
    mounted.current = true
    return () => {
      mounted.current = false
    }
  }, [])

  useEffect(() => {
    if (data && data.filters && data.filters.length > 0) {
      
      const newFilter = {}
      data.filters.forEach((filter) => {
        newFilter[filter.id] = { ...filter }
      })

      if (mounted.current) {
        dispatch(setFilters(newFilter))
      }
    }
  }, [data, dispatch])

  useEffect(() => {
    const getFeaturedPlaylists = async () => {
      try {
        const list = await spotifyApi.getFeaturedPlaylists({ ...filter })
        if (mounted.current) {
          dispatch(setList(list.playlists.items))
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
      {isPending && <div>{t('home.filters.pending')}</div> }
      {error && <div>{t('home.filters.error')}</div>}
      {!isPending && <FiltersContainer />}
      <PlayListItemsContainer />
    </div>
  )
}

export { HomePage }