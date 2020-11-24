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
  //name
  //email
  //password 
  //birthday
//option to update information - button for update and save those updates 

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
  }
}));

const Info = () => {
  const classes = useStyles();
  //need to populate originally from the sign in info of the user
  const [checked, setChecked] = React.useState(['wifi']);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const handleUpdates = () => {
    //would be better to have an on handle change? 
  }

  return (
      <Card>
        <div>
        <Typography
        className={classes.subtitle} 
        component="h1" 
        variant="h5"
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
            >Birthday</InputLabel>
              <TextField 
              disabled
              type="date"
              className={classes.fields}
              ></TextField>
           <Grid item xs={12}>
           <Button>Edit</Button>
          </Grid>
        </Grid>
       </Grid>
       </div>
      </Card>
  )
}

export default withStyles(useStyles)(Info)