import React from 'react';
import {useState} from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
// import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import {useInput} from '../../../Hooks/inputHook'

//display information from user sign up 
  //location information 
//SAVE BUTTON TO COMMIT ANY CHANGES

//need a view mode ~ see pal profile 

const useStyles = makeStyles((theme) => ({
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
}));

const Location = () => {
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
      >Location</Typography>
        <Grid
          container
          component="main" 
          direction="row"
          alignItems="center"
          className={classes.form}
        >
        <CssBaseline/>
        <Grid
          item
          xs={8} sm={8} md={8} component={Card} elevation={4} 
        >
        <InputLabel
        className={classes.fieldLabel}
        >Address</InputLabel>
          <TextField 
          disabled
          className={classes.fields}
          ></TextField>
        <InputLabel
        className={classes.fieldLabel}
        >City</InputLabel>
          <TextField 
          disabled
          className={classes.fields}
          ></TextField>
        <InputLabel
        className={classes.fieldLabel}
        >State</InputLabel>
          <TextField 
          disabled
          className={classes.fields}
          ></TextField>
        <InputLabel
        className={classes.fieldLabel}
        >Country</InputLabel>
          <TextField 
          disabled
          className={classes.fields}
          ></TextField>
      </Grid>
     </Grid>
    </div>
  )
}

export default withStyles(useStyles)(Location)