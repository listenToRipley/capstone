import React, {userState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import 'react-calendar/dist/Calendar.css';
import {useInput} from '../Hooks/inputHook';

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
  }
}));

const UserInfo = () => {
  const classes = useStyles();

  const handleUpdates = () => {

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
             xs={8} sm={8} md={8} component={Card} elevation={4} >

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

export default UserInfo