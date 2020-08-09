import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Container from '@material-ui/core/Container'
import { Routes } from './core/routes'
import { Auth } from './core/auth'
import { HeaderContainer } from './containers'
import './App.css'

const useStyles = makeStyles(() => ({
  container: {
    height: 'calc(100% - 56px)',
  }
}));

function App() {
  const classes = useStyles()
  return (
    <>
      <HeaderContainer />
      <Router>
        <Auth>
          <Container className={classes.container}>
            <Routes />
          </Container>
        </Auth>
      </Router>
    </>
  );
}

export default App;
