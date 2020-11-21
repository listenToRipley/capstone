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
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


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
       <form 
        className={classes.form} 
        > 
          <TextField
            variant="outlined"
            margin="normal"
            required
            id="firstName"
            label="First Name"
            name="firstName"
            autoFocus
            className={classes.fields}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            id="lastName"
            label="Last Name"
            name="lastName"
            autoFocus
            className={classes.fields}
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
            className={classes.fields}
            />

          <TextField
            variant="outlined"
            margin="normal"
            required
            id="password"
            label="Password"
            name="password"
            className={classes.fields}
            />
          <TextField
            variant="outlined"
            margin="normal"
            required
            id="passwordVerify"
            label="Password Verification"
            name="password"
            className={classes.fields}
            />
            <Calendar
            variant="outlined"
            margin="normal"
            required
            id="birthday"
            label="Birthday"
            name="birthday"
            className={classes.fields}
            onChange={onChange}
            value={dob}
            />
          
        </form>
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