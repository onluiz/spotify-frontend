import React from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector, useDispatch } from 'react-redux'
import Button from '@material-ui/core/Button';
import { setAccessToken } from '../../redux'
import { Header } from '../../components'

const HeaderContainer = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const signOut = () => dispatch(setAccessToken(''))
  const authenticated = useSelector(state => state.auth.authenticated)

  return (
    <Header title={t('header.title')}>
      {authenticated && <Button color="inherit" onClick={signOut}>{t('header.signOut')}</Button>}
    </Header>
  )
}

export { HeaderContainer }