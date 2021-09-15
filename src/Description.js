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
        <li>
          <font color="#500707">Gérants de la salle</font>
          <p>Plus haut grade du serveur en charge de la gestion de celui-ci.</p>
        </li>
        <li>
          <font color="#0ee41d">Vétérants de l'Arcade</font>
          <p>Membres les plus présents et proches des membres initiaux, ils possèdent des droits restreint.</p>
        </li>
        <li>
          <font color="#5182ee">Habitués</font>
          <p>Membres qui ont une présences moindres des Vétérants.</p>
        </li>
      </ul>
      </p>
    </React.Fragment>
  );

}
