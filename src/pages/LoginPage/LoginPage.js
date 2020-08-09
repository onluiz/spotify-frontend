import React from 'react'
import { useTranslation } from 'react-i18next'
import { makeStyles } from "@material-ui/core/styles";
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import { useAuth } from '../../core/auth'

const useStyles = makeStyles(() => ({
  grid: {
    height: '100%'
  },
}));

const LoginPage = () => {
  const { t } = useTranslation()
  const { getAuthUri } = useAuth()
  const uri = getAuthUri()
  const classes = useStyles()

  console.log(t('login.btnContinue'))

  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      className={classes.grid}
    >
      <Link href={uri} variant="h6">{t('login.btnContinue')}</Link>
    </Grid>
  )
}

export { LoginPage }