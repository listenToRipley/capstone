import React from 'react';
import {useState, useEffect} from 'react'
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
import {useInput} from '../Hooks/inputHook'
import {useHistory} from 'react-router-dom'
import createNewUser from '../redux/reducers/createNewUser';

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

const CreateUser = (props) => {
  console.log('props on create user? ', props)
  const classes = useStyles();

  const {value: username, bind: bindUsername, reset: resetUsername} = useInput('') 
  const {value: firstName, bind: bindFirstName, reset: resetFirstName} = useInput('')
  const {value: lastName, bind: bindLastName, reset: resetLastName} = useInput('')
  const {value: email, bind: bindEmail, reset: resetEmail} = useInput('')
  const {value: password, bind: bindPassword, reset: resetPassword} = useInput('')
  const {value: vPassword, bind: bindVPassword, reset: resetVPassword} = useInput('')
  const {value: birthday, bind: bindBirthday, reset: resetBirthday} = useInput('')


  //change this selected date 
  const [dob, onChange] = useState(new Date());

  //this will be future state
  // const handlePasswordMatch = () => {
  //   //need to make sure the password matches
  //   //if password and vPassword do not match, then they should not continue 
  // }
  let dobMonth = ''
  let dobDate = ''
  let dobYear = ''

  const modBirthday = (day) => {
    console.log('happy birthday!', day.value)
      let dob = day.value.split('-')
      console.log(dob)
      dobYear=dob[0]
      dobDate=dob[1]
      dobMonth=dob[2]
  }

  const createLogin = e => {
    e.preventDefault(); 
    modBirthday(bindBirthday)

    return props.createNewUser(username={...bindUsername.value}, firstName={...bindFirstName.value}, lastName={...bindLastName.value},password={...bindPassword.value},dobMonth={...dobMonth}, dobDay={...dobDate}, dobYear={...dobYear})

  }

  useEffect(() => {
    if(props.newUser) {
      console.log('congrads! you create a login! ')
      //need to set up redirect here, for static page with a link to login 
    }
  })



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
          style={{margin: '15px'}} 
          type="submit" 
          variant="contained" 
          color="primary"
          onClick={createLogin}
          >
           Sign Up
        </Button>
       </Grid>
      </Grid>
    </Paper>
     
  )
}

// export default withStyles(useStyles)(CreateUser)
export default CreateUser