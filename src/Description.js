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
      <Title>Description</Title>
      <p><b>L'Arcade</b> est un serveur discord semi-communautaires, initialment crée par <b><font color="#bf0000">Major72</font></b>, pour regrouper certains joueurs d'un ancien serveur discord semi-rp d'Unturned.<br/>
      Son accès n'est pas public, mais est ouvert aux connaissances des membres déjà présents.<br/>
      Il permet de regroupé des joueurs de confiances sur différents jeux, de niveaux d'expériences différents et d'ages différents.<br/>
      Le serveur gravite autour de trois rôles principaux:
      <ul>
        <li><font color="#500707">Gérants de la salle</font></li>
        <li><font color="#0ee41d">Vétérants de l'Arcade</font></li>
        <li><font color="#5182ee">Habitués</font></li>
      </ul>
      </p>
    </React.Fragment>
  );

}
