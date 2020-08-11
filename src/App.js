import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { makeStyles } from "@material-ui/core/styles";
import Container from '@material-ui/core/Container'
import { Routes } from './core/routes'
import { Auth } from './core/auth'
import { HeaderContainer } from './containers'
import './App.css'

const useStyles = makeStyles(() => ({
  container: {
    height: 'calc(100% - 64px)',
  }
}));

function App() {
  const classes = useStyles()
  return (
    <>
      <HeaderContainer />
      <Router>
        <Auth>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Container className={classes.container}>
              <Routes />
            </Container>
          </MuiPickersUtilsProvider>
        </Auth>
      </Router>
    </>
  );
}

export default App;
