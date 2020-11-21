import React from 'react';
import {useState} from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import { FormControl } from '@material-ui/core';
// import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import {useInput} from '../../Hooks/inputHook'

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

//SAVE BUTTON TO COMMIT ANY CHANGES

//need a view mode ~ see pal profile 

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '5%',
    paddingLeft: '5%',
    width: '90%',
    justifyContent: 'space-evenly'
  },
  paper: {
    width: '100%',
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
    },
  },
  fields: {
    margin: theme.spacing(4),
    width: '90%',
    },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

const UserProfile = () => {
  const classes = useStyles();

  const handleUpdates = () => {

  }

  return (
    <Paper
      classes={classes.root}>
      <Typography
      className={classes.title} 
      component="h1" 
      variant="h5"
      >  USERNAME Profile </Typography>
      <Card>

        <div>
        <h2>User info</h2>
          <Grid
            container
            component="main" 
            direction="row"
            alignItems="center"
          >
          <CssBaseline/>
            <Grid
            item 
            xs={12} sm={8} md={5} component={Card} elevation={4} square>
            <Button>Edit</Button>
            <InputLabel>Name</InputLabel>
            <TextField 
            disabled
            className={classes.fields}
            ></TextField>
            <InputLabel>Password</InputLabel>
             <TextField 
             disabled
             className={classes.fields}
             ></TextField>
            <InputLabel>Birthday</InputLabel>
              <TextField 
              disabled
              className={classes.fields}
              ></TextField>
            <InputLabel>Location</InputLabel>
              <TextField 
              disabled
              className={classes.fields}
              >This is actually three fields</TextField>
            </Grid>
          </Grid>
          <div>
            <p>address</p>
            <p>city</p>
            <p>state</p>
            <p>country</p>
          </div>
          <h4>contact info</h4> 
            <div>
              <p>email</p>
              <p>phone</p>
            </div>
        </div>
        <div>
        <h3>Preferences</h3>
          <p>likes</p>
          <p>dislikes</p>
          <p>allergies</p>
          <p>diets</p>
        </div>

        <div>
          <h3>Display Preferences - update by toggle</h3>
          <p>birthday</p>
          <p>location</p>
          <p>email</p>
          <p>phone</p>
          <p>likes</p>
          <p>dislikes</p>
          <p>allergies</p>
          <p>diets</p>
        </div>
        <button>Save</button>
      </Card>
    </Paper>
  )
}

export default withStyles(useStyles)(UserProfile)