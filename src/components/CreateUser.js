import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Card, Grid } from '@material-ui/core';
import './ComponentCSS.css'


const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  fields: {
    margin: theme.spacing(4),
    width: '25ch',
    },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
}));

//need to add text handling for input, use Hooks/inputHook

//use action from redux to create user

const CreateUser = () => {

  const classes = useStyles();

  return(

      <Grid
        container
        component="main" 
        direction="column"
        justify="center"
        alignItems="center"
        className={classes.root}
      >
        <div>
          <Card>
          <Typography className="userTitle" component="h1" variant="h5">
              Create Login 
            </Typography>
          </Card>
        </div>
        <CssBaseline/>
       <Grid
       item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
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
            <TextField
            variant="outlined"
            margin="normal"
            required
            id="birthday"
            label="Birthday"
            name="birthday"
            className={classes.fields}
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
     
  )
}

export default withStyles(useStyles)(CreateUser)