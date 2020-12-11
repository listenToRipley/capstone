import React from 'react';
import {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import { FormControl } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import 'react-calendar/dist/Calendar.css';
import {useInput} from '../Hooks/inputHook'

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '5%',
    paddingLeft: '5%',
    width: '90%',
  },
  paper: {
    width: '100%',
    justifyContent: 'space-evenly',
  },
  title: {
    padding: 10,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  fields: {
    margin: theme.spacing(2.5),
    width: '90%',
    },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),
  },
}));

const CreateUser = (props) => {
  console.log('props on create user? ', props)
  const history = useHistory(); 
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const {value: userName, bind: bindUsername, reset: resetUsername} = useInput('') 
  const {value: firstName, bind: bindFirstName, reset: resetFirstName} = useInput('')
  const {value: lastName, bind: bindLastName, reset: resetLastName} = useInput('')
  const {value: eMail, bind: bindEmail, reset: resetEmail} = useInput('')
  const {value: passWord, bind: bindPassword, reset: resetPassword} = useInput('')
  const {value: birthday, bind: bindBirthday, reset: resetBirthday} = useInput('')

  const createLogin = e => {
    console.log('let look at the event', e)
    e.preventDefault(); 

    let dob = ''

    const modBirthday = (day) => {
     return dob = day.split('-').map(n => parseInt(n))
  }

  modBirthday(bindBirthday.value)
  
    console.log('make sure all my input looks good', bindUsername, bindFirstName, bindLastName, bindEmail, bindPassword, bindBirthday)
    return props.createNewUser(bindUsername.value, bindFirstName.value, bindLastName.value, bindEmail.value, bindPassword.value,dob[1], dob[2], dob[0])

  }

  useEffect(() => {
    if(props.newUser) {
        setOpen(true)
    }
  })

  const handleRedirect = () => {
    history.push('/')
  };

  return(
    <Paper
    className={classes.root}
    >
    <Typography className={classes.title} component="h1" variant="h5">
        Create Login 
      </Typography>

      <Grid
        className={classes.paper}
        container
        component="main" 
        direction="row"
        alignItems="center"
      >
        <CssBaseline/>
       <Grid
       item 
       xs={12} sm={10} md={5} component={Card} elevation={4} square>
       <FormControl
       
        className={classes.form} 
        > 
            <TextField
            {...bindUsername}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            type="text"
            autoFocus
            className={classes.fields}
            aria-label="your username for login"
          />

          <TextField
            {...bindFirstName}
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
            {...bindLastName}
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
            {...bindEmail}
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
            {...bindPassword}
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
            {...bindBirthday}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="birthday"
            label="Birthday"
            name="birthday"
            type="date"
            placeholder=""
            autoFocus
            className={classes.fields}
            aria-label="your date of birth"
            />
          
        </FormControl>
        <Button    
          style={{marginBottom: '5%', marginLeft: '10%', width: '80%'}} 
          type="submit" 
          variant="contained" 
          color="primary"
          onClick={createLogin}
          >
           Sign Up
        </Button>
       </Grid>
      </Grid>

     
        <Dialog
        open={props.newUser}
        aria-labelledby="alert, log in created"
        aria-describedby="congratulation on becoming a pantry pal user"
      >
        <DialogTitle id="alert-dialog-title">{"      Congratulations!"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          You are now a Pantry Pal user!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleRedirect} autoFocus color="primary">
            Login here
          </Button>
        </DialogActions>
      </Dialog> 

    </Paper>
     
  )
}

export default CreateUser