import React, { useEffect} from 'react';
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
import {useInput} from '../Hooks/inputHook';
import PropTypes from 'prop-types';
import {useHistory} from 'react-router-dom'
import cookie from 'cookie'

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

const LogIn = (props) => {
  const classes = useStyles();
  const history = useHistory();
  let {user}= props

  let {value: username, bind: bindUsername, reset:resetUsername} = useInput('')
  let {value: password, bind: bindPassword, reset:resetPassword} = useInput('')

    const sendValidation = e => {
      e.preventDefault();
   return props.login(username={...bindUsername},password={...bindPassword})
    }

    useEffect(()=> {
      if(user.validation) {
        document.cookie = "logCookies="+JSON.stringify({
          "username":user.username,
          "validation": true,
          "token": user.pass.token,
            })
        history.push('/home')
      }
    })

  return (
      <Grid 
      container 
      component="main" 
      className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} >
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" 
          variant="h5"
          aria-label='sign in for pantry pals'
          >
            Sign in
          </Typography>
       
          <form className={classes.form}>
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
              onClick={sendValidation}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
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

  )
}

LogIn.proptypes = {
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  login: PropTypes.bool.isRequired,
  validation: PropTypes.object
}

export default LogIn