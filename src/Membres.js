import React from 'react';
import Title from './Title';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import {Column, Row} from '@mui-treasury/components/flex';
import { borders } from '@material-ui/system';
import Box from '@material-ui/core/Box';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  avatar: {
    display: 'flex',
    margin: '10px 5vh 10px 5vh',
    alignItems: 'center',
  },
  medium: {
    width: theme.spacing(6),
    height: theme.spacing(6),
    alignSelf: 'center',
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    alignSelf: 'center',
  },
}));

export default function Membres() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Title>Membres</Title>
      <p>Sont représenté ici les membres les plus actifs/historiques/importants:</p>

      <Box borderTop={1} borderColor='#858585'/>

      <Row color={'#500707'} style={{alignSelf: 'center'}}>
        <h2>Gérants de la salle</h2>
      </Row>
      <Row color={'#500707'} style={{alignSelf: 'center'}}>
        <Column className={classes.avatar}>
          <Avatar alt="Major72 profile picture" src="https://cdn.discordapp.com/avatars/254736093239443467/3aa9280c94f1df2b43d9b00e20c365ed.png" className={classes.large} />
          <h3>Major72</h3>
        </Column>
        <Column className={classes.avatar}>
          <Avatar alt="Skrafft profile picture" src="https://cdn.discordapp.com/avatars/132840204032540673/5afa10f9975608d167450e673d12a37c.png?" className={classes.large} />
          <h3>Skrafft</h3>
        </Column>
        <Column className={classes.avatar}>
          <Avatar alt="Sora16 profile picture" src="https://cdn.discordapp.com/avatars/282925902965374976/2e87b095831259a24002d8bf536eff30.png?" className={classes.large} />
          <h3>Sora16</h3>
        </Column>
      </Row>

      <Row color={'#0ee41d'} style={{alignSelf: 'center'}}>
        <h2>Vétérants de l'Arcade</h2>
      </Row>
      <Row color={'#0ee41d'} style={{alignSelf: 'center'}}>
        <Column className={classes.avatar}>
          <Avatar alt="Clay profile picture" src="https://cdn.discordapp.com/avatars/294539184729751552/9c6566636a97976510f4e9c05868a9d2.png?" className={classes.large} />
          <h3>Clay</h3>
        </Column>
        <Column className={classes.avatar}>
          <Avatar alt="Desmond profile picture" src="https://cdn.discordapp.com/avatars/217360042247192577/68660de684c5e804e3eb567b8fd71778.png?" className={classes.large} />
          <h3>Desmond</h3>
        </Column>
        <Column className={classes.avatar}>
          <Avatar alt="Jhonfou profile picture" src="https://cdn.discordapp.com/avatars/163362698820583424/9b3f4a52e6bc35421b4d1f094353c336.png?" className={classes.large} />
          <h3>Jhonfou</h3>
        </Column>
        <Column className={classes.avatar}>
          <Avatar alt="Okayama profile picture" src="https://cdn.discordapp.com/avatars/327798626363375630/9ee80ae5ebb0825af908fab375b4ad3e.png?" className={classes.large} />
          <h3>Okayama</h3>
        </Column>
      </Row>

      <Row color={'#5182ee'} style={{alignSelf: 'center'}}>
        <h2>Habitués</h2>
      </Row>
      <Row color={'#5182ee'} style={{alignSelf: 'center'}}>
        <Column className={classes.avatar}>
          <Avatar alt="Aviacraft profile picture" src="https://cdn.discordapp.com/avatars/292379218082267138/0890001389b465219218e52627632dc4.png?" className={classes.large} />
          <h3>Aviacraft</h3>
        </Column>
        <Column className={classes.avatar}>
          <Avatar alt="EXO profile picture" src="https://cdn.discordapp.com/avatars/213234981718196224/ec9ea5f766bd62ba862d8cb668f47821.png?" className={classes.large} />
          <h3>EXO</h3>
        </Column>
        <Column className={classes.avatar}>
          <Avatar alt="Le Grand Jaggi profile picture" src="https://cdn.discordapp.com/avatars/217263902461788160/9c82a451ada2f5716a20eaf703149b7f.png?" className={classes.large} />
          <h3>Le Grand Jaggi</h3>
        </Column>
        <Column className={classes.avatar}>
          <Avatar alt="Thony profile picture" src="https://cdn.discordapp.com/avatars/263394670510473218/17cd6b25450131a8d0d9033fcdf2170c.png?" className={classes.large} />
          <h3>Thony</h3>
        </Column>
        <Column className={classes.avatar}>
          <Avatar alt="xPattate profile picture" src="https://cdn.discordapp.com/avatars/320998654317953026/a_0c084517e60047235909d44cd608bc05.png?" className={classes.large} />
          <h3>xPattate</h3>
        </Column>
      </Row>

      <Box borderTop={1} borderColor='#858585' style={{margin:'10px 0 20px 0'}}/>

      <Row color={'#500707'}>
        <Column style={{margin:'0 10px 5px 10px'}}>
          <Avatar alt="Major72 profile picture" src="https://cdn.discordapp.com/avatars/254736093239443467/3aa9280c94f1df2b43d9b00e20c365ed.png" className={classes.medium}/>
          <h4 style={{margin:'10px 0 0 0'}}>Major72</h4>
        </Column>
        <Box borderLeft={1} borderColor='#858585'/>
        <Column color={'#000000'} style={{margin:'0 0 0 10px'}}>
          <p> Fondateur du server et membre du groupe "<font style={{ fontWeight: 'bold', color:'#d0a7db'}}>Les Suceuses de l'Ouest</font>".<br/>
              Expert sur Minecraft vanilla mais aussi sur le mod <a href="https://www.curseforge.com/minecraft/mc-mods/botania" target="_blank" style={{ fontWeight: 'bold'}}>Botania</a> et Pirate <font style={{ fontWeight: 'bold', color:'#38b988'}} >Athena</font> sur <font style={{ fontWeight: 'bold', color:'#38b988'}} >Sea of thieves</font>.
          </p>
        </Column>
      </Row>

      <Row color={'#500707'}>
        <Column style={{margin:'0 10px 5px 10px'}}>
          <Avatar alt="Skrafft profile picture" src="https://cdn.discordapp.com/avatars/132840204032540673/5afa10f9975608d167450e673d12a37c.png?" className={classes.medium} />
          <h4 style={{margin:'10px 8px 0 0'}}>Skrafft</h4>
        </Column>
        <Box borderLeft={1} borderColor='#858585'/>
        <Column color={'#000000'} style={{margin:'0 0 0 10px'}}>
          <p> Membre initial du server et membre du groupe "<font style={{ fontWeight: 'bold', color:'#d0a7db'}}>Les Putes à Frites</font>" car il est notre réprésentant belge.<br/>
              Joueur <font style={{ fontWeight: 'bold', color:'red'}}>Valorant </font> classé Silver et Pirate <font style={{ fontWeight: 'bold', color:'#38b988'}} >Athena</font> sur <font style={{ fontWeight: 'bold', color:'#38b988'}} >Sea of thieves</font>.<br/>
              Spécialisé sur les modes de magie sur Minecraft mode.
          </p>
        </Column>
      </Row>

      <Row color={'#500707'}>
        <Column style={{margin:'0 10px 5px 10px'}}>
          <Avatar alt="Sora16 profile picture" src="https://cdn.discordapp.com/avatars/282925902965374976/2e87b095831259a24002d8bf536eff30.png?" className={classes.medium} />
          <h4 style={{margin:'10px 6px 0 0'}}>Sora16</h4>
        </Column>
        <Box borderLeft={1} borderColor='#858585'/>
        <Column color={'#000000'} style={{margin:'0 0 0 10px'}}>
          <p> Membre initial du server et membre du groupe "<font style={{ fontWeight: 'bold', color:'#d0a7db'}}>Les Suceuses de l'Ouest</font>".<br/>
              Joueur pro sur <font style={{ fontWeight: 'bold', color:'brown'}}>COD</font> et <font style={{ fontWeight: 'bold', color:'orange'}}>Rocket league</font>, participant à différents tournois.
          </p>
        </Column>
      </Row>


    </React.Fragment>
  );
}
