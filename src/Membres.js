import React from 'react';
import Title from './Title';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
}));

export default function Dashboard() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Title>Membres</Title>
      <p><b>L'Arcade</b> est un serveur discord semi-communautaires, initialment crée par <b><font color="#bf0000">Major72</font></b>, pour regrouper certains joueurs d'un ancien serveur discord semi-rp d'Unturned.<br/>
      Son accès n'est pas public, mais est ouvert au connaissances des membres déjà présents.
      </p>
    </React.Fragment>
  );

}
