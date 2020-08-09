import React from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import Button from '@material-ui/core/Button';
import { Header } from '../../components'

const HeaderContainer = () => {
  const { t } = useTranslation()
  const authenticated = useSelector(state => state.auth.authenticated)
  return (
    <Header title={t('header.title')}>
      {authenticated && <Button color="inherit">{t('header.signOut')}</Button>}
    </Header>
  )
}

export { HeaderContainer }