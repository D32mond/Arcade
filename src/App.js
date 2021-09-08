import logo from './logo.svg';
import './App.css';
import {Column, Row,} from '@mui-treasury/components/flex';
import { CssBaseline, Grid } from '@material-ui/core';
import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      minHeight: '100vh',
      backgroundColor: '#248e7d',
      textAlign: 'center',
      display: 'flex',
    },

    large: {
      width: theme.spacing(12),
      height: theme.spacing(12),
      marginTop : '5vh',
      marginBottom: '2vh',
    },

    left: {
      backgroundColor: '#757575',
      Height: '100vh',
      width: '20%',
      alignItems: 'center',
    },

    right: {
      backgroundColor: '#dcae6f',
      minHeight: '100vh',
      width: '80%',
    },

  }),
);

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container xs={12} component="main">
        <CssBaseline />
          <Column className={classes.left}>
            <Row>
              <Avatar alt="Remy Sharp" src="https://cdn.discordapp.com/icons/486565362901450771/980ccb3a3dcb985fd97f0350f0c53da6.png" className={classes.large}/>
            </Row>

            <Row color={'#bf0000'} fontSize={'4vh'} ><b>L'Arcade</b></Row>

          </Column>

          <Column className={classes.right}>
            <Row height={'500px'} >Ici on doit voir la liste de mots</Row>
            <Row height={'500px'} >Ici on doit voir la liste de mots</Row>
            <Row height={'500px'} >Ici on doit voir la liste de mots</Row>
          </Column>

      </Grid>
    </div>
  );
}



export default App;
