import React from 'react';
import {useState} from 'react'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Card from '@material-ui/core/Card';
// import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import {useInput} from '../../../Hooks/inputHook';
import Info from './Info';
import Location from './Location';
import Contact from './Contact';
import Tastes from './Tastes';
import DisplayPreferences from './DisplayPref'

//display information from user sign up 
  //name
  //email
  //password 
  //birthday
//option to update information - button for update and save those updates 
  //setting for others to view -toggles 

//likes  - favorites 
//dislikes 
//diets 
//allergies 

let mock = ['apples', 'bananas', 'rasberries', 'potatos']

//SAVE BUTTON TO COMMIT ANY CHANGES

//need a view mode ~ see pal profile 

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
  }
}));

const UserProfile = (props) => {
  const classes = useStyles();
  //need to populate originally from the sign in info of the user

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
      <Typography
      className={classes.title} 
      component="h1" 
      variant="h4"
      >  USERNAME Profile </Typography>
      <Card>
        <Info user={props.username}/>
        <Location user={props.username}/>
        <Contact user={props.username}/>
        <Tastes user={props.username} />
        <DisplayPreferences user={props.username}/>
        <button>Save</button>
      </Card>
    </Paper>
  </div>
  )
}

export default withStyles(useStyles)(UserProfile)