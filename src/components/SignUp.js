import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/styles';
import { Container, Grid } from '@material-ui/core';
import './ComponentCSS.css'


const useStyles = makeStyles((theme) => ({
  fields: {
    margin: theme.spacing(1),
    width: '25ch',
    },
}));

const SignUp = () => {

  const classes = useStyles();

  return(
   <Container className="createUserContainer">
      <Paper classes="createUserPaper">
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        <div>
        <Typography className="userTitle" component="h1" variant="h5">
              Create Login 
            </Typography>
        </div>
        <form className={classes.fields}> 
          <TextField
            variant="outlined"
            margin="normal"
            required
            id="firstName"
            label="First Name"
            name="firstName"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            id="lastName"
            label="Last Name"
            name="lastName"
            autoFocus
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
            />

          <TextField
            variant="outlined"
            margin="normal"
            required
            id="password"
            label="Password"
            name="password"
            />
          <TextField
            variant="outlined"
            margin="normal"
            required
            id="passwordVerify"
            label="Password Verification"
            name="password"
            />
          
        </form>
        <Button style={{margin: '15px'}} type="submit" variant="contained" color="primary">
           Submit
        </Button>
      </Grid>
      </Paper>
   </Container>
     
  )
}

export default SignUp; 