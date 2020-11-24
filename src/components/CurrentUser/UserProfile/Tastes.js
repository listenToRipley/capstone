import React from 'react';
import {useState} from 'react'
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box'

import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
// import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import {useInput} from '../../../Hooks/inputHook'

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
  title: {
    padding: 10,
    display: 'none',
    justifyContent: 'center',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  subtitle: {
    padding: 20,
  },
  fields: {
    margin: theme.spacing(4),
    width: '90%',

    },
    fieldLabel: {
      padding: theme.spacing(1),
    },
  form: {
    width: '100vw', // Fix IE 11 issue.
    paddingLeft: '5%',
    margin: theme.spacing(1),
    // marginBottom: theme.spacing(1),
  },
  tastes: {
    width: '80%', // Fix IE 11 issue.
    paddingLeft: '5%',
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    borderRadius: 3
  },
  displayPrefCell: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    },
}));

const Tastes = () => {
  const classes = useStyles();
  //need to populate originally from the sign in info of the user

  const handleUpdates = () => {
    //would be better to have an on handle change? 
  }

  return (
      <div>
      <Typography
        component="h1" 
        variant="h5"
        className={classes.subtitle} 
        >Taste Preferences</Typography>
        {/* Will need a way to add to each of these fields and remove.  */}
      <div 
      className={classes.form}
      >
      <Box
      className={classes.tastes}
      boxShadow={3}
      >
      <div>
        <Typography
        className={classes.subtitle} 
        >Likes</Typography>
        </div> 
        <div>
        <Typography
        className={classes.subtitle} 
        >Dislikes</Typography>
        </div> 
        <div>
        <Typography
        className={classes.subtitle} 
        >Diets</Typography>
        </div> 
        <div>
        <Typography
        className={classes.subtitle} 
        >Allergies</Typography>
        </div>
      </Box> 
      </div>
    </div>
  ) 
}

export default withStyles(useStyles)(Tastes)