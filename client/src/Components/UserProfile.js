import React, {useState} from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import 'react-calendar/dist/Calendar.css';
import {useInput} from '../Hooks/inputHook';
import UserInfo from './UserInfo';
import UserContact from './UserContact';
import UserTastes from './UserTastes';
import UserLocation from './UserLocation';
import UserDisplayPreferences from './UserDisplayPreferences'

let mock = ['apples', 'bananas', 'rasberries', 'potatos']

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 10,
    padding: 20,
    width: '99%',
    justifyContent: 'center'
  },
  paper: {
    width: '80%',
    marginTop: theme.spacing(6),
    marginLeft: theme.spacing(10),
    marginBottom: theme.spacing(2),
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  title: {
    padding: 10,
    display: 'none',
    justifyContent: 'center',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    }
  },
  body: {
    marginBottom: theme.spacing(4),
    marginLeft: theme.spacing(2),
    width: '95%'
  }
}));

const UserProfile = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
      <Typography
      className={classes.title} 
      component="h1" 
      variant="h4"
      >  USERNAME Profile </Typography>
      <Card className={classes.body}>
        <UserInfo user={props.username}/>
        <UserLocation user={props.username}/>
        <UserContact user={props.username}/>
        <UserTastes user={props.username} />
        <UserDisplayPreferences user={props.username}/>
      </Card>
    </Paper>
  </div>
  )
}

export default UserProfile