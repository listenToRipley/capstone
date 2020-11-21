import React from 'react';
import {useState} from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import { FormControl } from '@material-ui/core';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import {useInput} from '../../Hooks/inputHook'


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

//need to add text handling for input, use Hooks/inputHook

//use action from redux to create user

const CreateUser = () => {
  const classes = useStyles();

  const {value: firstName, bind: bindFirstName, reset: resetFirstName} = useInput('')
  const {value: lastName, bind: bindLastName, reset: resetLastName} = useInput('')


  //change this selected date 
  const [dob, onChange] = useState(new Date());

  const handleDOB = () => {
    //need to had this to handle birthday input 
  }

  return(
    <Paper
    className={classes.root}
    >
    <Typography className={classes.title} component="h1" variant="h5">
        Create Login 
      </Typography>

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
       <FormControl
        className={classes.form} 
        > 
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="firstName"
            label="First Name"
            name="firstName"
            type="text"
            autoFocus
            className={classes.fields}
            aria-label="your first name"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="lastName"
            label="Last Name"
            name="lastName"
            type="text"
            autoFocus
            className={classes.fields}
            aria-label="your last name"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            type="email"
            autoFocus
            className={classes.fields}
            aria-label="your email address"
            />

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="password"
            label="Password"
            name="password"
            type="password"
            autoFocus
            className={classes.fields}
            aria-label="your new password"
            />
          <TextField
            variant="outlined"
            margin="normal"
            required
            id="passwordVerify"
            label="Password Verification"
            name="password"
            type="password"
            autoFocus
            className={classes.fields}
            aria-label="verify your password"
            />
            {/* might want to change this to a popout option  */}
            <Calendar
            variant="outlined"
            margin="normal"
            required
            id="birthday"
            label="Birthday"
            name="birthday"
            type="date"
            autoFocus
            className={classes.fields}
            aria-label="your date of birth"
            onChange={onChange}
            value={dob}
            />
          
        </FormControl>
        <Button    
          style={{margin: '15px'}} 
          type="submit" 
          variant="contained" 
          color="primary">
           Sign Up
        </Button>
       </Grid>
      </Grid>
    </Paper>
     
  )
}

export default withStyles(useStyles)(CreateUser)