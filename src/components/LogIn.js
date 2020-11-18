import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import ListItem from '@material-ui/core/ListItem';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/styles';
import Home from './Home'
import {useInput} from '../Hooks/inputHook'


//the main page, go not pass go, to not collect $200 without login in or creating a login

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://images.unsplash.com/photo-1590311824865-bac58a024e51?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const LogIn = () => {
  const classes = useStyles();
  //states sets
  const {value: username, bind: bindUsername, reset:resetUsername} = useInput('')
  const {value: password, bind: bindPassword, reset: resetPassword} = useInput('')
  const {value: loggedIn, bind: bindLoggedIn, reset: resetLoggedIn} = useInput('')
  console.log('user name is : ' ,username)
  console.log('the password : ', password )
  //need to set state on text before I add handlers 
    //validate password and username 
  
  const loggedInCookie = e => {
    //need to try the auth token here
    e.preventDefault()
    document.cookie = "businessCookies="+JSON.stringify({
      "username":bindUsername,
      //will have to add validate for username and password, then can be true 
      "loggedIn":bindLoggedIn,
      "max-Age":60*10000,
      "reset": {
        "resetUsername": resetUsername,
        "resetLoggedIn": resetLoggedIn
      }
    })
    window.location.replace('/home')
  }

  return loggedIn ? <Home {...bindUsername} {...bindLoggedIn} /> :(
      <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" 
          variant="h5"
          aria-label='sign in for pantry pals'>
            Sign in
          </Typography>
          <form className={classes.form} onSubmit={e=> bindLoggedIn= true} noValidate>
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
              aria-label='your username'
            />
            <TextField
              {...bindPassword}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Password"
              type="password"
              id="password"
              aria-label='your password'
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              aria-label='sign in button'
              username={bindUsername}
              loggedIn={true}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <ListItem
                button
                component={Link}
                to="/forgotPassword" 
                primary={'Forgot password'}
                aria-label='forgot password?'
                >Forgot Password</ListItem>
              </Grid>
              <Grid item>
                <ListItem
                button
                component={Link}
                to="/createNewUser" 
                aria-label='create a login for pantry pals'
                >
                  {"Don't have an account? Sign Up"}
                </ListItem>
              </Grid>
            </Grid>
            <Box mt={5}>
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}

export default withStyles(useStyles)(LogIn)