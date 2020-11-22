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
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

const UserProfile = () => {
  const classes = useStyles();
  //need to populate originally from the sign in info of the user

  const handleUpdates = () => {
    //would be better to have an on handle change? 
  }

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
      <Typography
      className={classes.title} 
      component="h1" 
      variant="h5"
      >  USERNAME Profile </Typography>
      <Card>

        <div>
        <Typography
        className={classes.subtitle} 
        >User info</Typography>
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
            xs={8} sm={8} md={2} component={Card} elevation={4} >

              <InputLabel
              className={classes.fieldLabel}
              >First Name</InputLabel>
                <TextField 
                disabled
                className={classes.fields}
                ></TextField>
              <InputLabel
              className={classes.fieldLabel}
              >Last Name</InputLabel>
                <TextField 
                disabled
                className={classes.fields}
                ></TextField>
            <InputLabel
            className={classes.fieldLabel}
            >Password</InputLabel>
              <TextField 
              disabled
              className={classes.fields}
              ></TextField>
            <InputLabel
            className={classes.fieldLabel}
            >Birthday Month</InputLabel>
              <TextField 
              disabled
              type="date"
              className={classes.fields}
              ></TextField>
            </Grid>
            <Button>Edit</Button>
          </Grid>

            <div>
            <Typography
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
              xs={2} sm={8} md={2} component={Card} elevation={4}
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

        <div>
          <Typography
          className={classes.subtitle} 
          >Contact Info</Typography>
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
              xs={2} sm={8} md={2} component={Card} elevation={4}
            >
            <InputLabel
            className={classes.fieldLabel}
            >Phone</InputLabel>
              <TextField 
              disabled
              className={classes.fields}
              ></TextField>
            <InputLabel
            className={classes.fieldLabel}
            >Email</InputLabel>
              <TextField 
              disabled
              className={classes.fields}
              ></TextField>
          </Grid>
         </Grid>
        </div>
        </div>
        <div>
        <Typography
          className={classes.subtitle} 
          >Taste Preferences</Typography>
          <p>likes</p>
          <p>dislikes</p>
          <p>allergies</p>
          <p>diets</p>
        </div>

        <div>
        <Typography
          className={classes.subtitle} 
          >Display Preferences</Typography>
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
  </div>
  )
}

export default withStyles(useStyles)(UserProfile)