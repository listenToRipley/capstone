import React from 'react';
import {useState} from 'react'
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card'
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { getThemeProps, withStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton'
import {useInput} from '../../../Hooks/inputHook';
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import Food from '../../Food';

library.add(faPlusCircle) 
dom.watch()

//display information from user sign up 
  //name
  //email
  //password 
  //birthday
//option to update information - button for update and save those updates 
  //setting for others to view -toggles 

//likes  - favorites 
//dislikes 
//diets 
//allergies 

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
  },
  tastes: {
    width: '80%', // Fix IE 11 issue.
    paddingLeft: '5%',
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    borderRadius: 3
  },
  chipPaper: {
    padding: theme.spacing(1),
    },
  chipItems: {
    margin: '.5em'
  }
}));

const Tastes = (props) => {
  const classes = useStyles();
  //need to populate originally from the sign in info of the user

  const handleRemoveLike = () => {
    //would be better to have an on handle change? 
  }

  const handleAddLike = () => {
    //would be better to have an on handle change? 
  }

  const handleRemoveDislike = () => {
    //would be better to have an on handle change? 
  }

  const handleAddDislike = () => {
    //would be better to have an on handle change? 
  }

  const handleRemoveAllergy = () => {
    //would be better to have an on handle change? 
  }

  const handleAddAllergy = () => {
    //would be better to have an on handle change? 
  }
  const handleRemoveDiet = () => {
    //would be better to have an on handle change? 
  }

  const handleAddDiet = () => {
    //would be better to have an on handle change? 
  }

  let mock = ['apples', 'bananas', 'rasberries', 'potatos']

  return (
      <Card>
      <Typography
        component="h1" 
        variant="h5"
        className={classes.subtitle} 
        >Taste Preferences</Typography>
        {/* Will need a way to add to each of these fields and remove.  */} 
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
        xs={8} sm={8} md={2} component={Card} elevation={4}
        >
        <div>
        <Typography
          className={classes.subtitle} 
          >Likes
            <Tooltip title="Add a like">
              <IconButton  alignItems="right" aria-label="Add Item to Your Likes List">
              <svg className="fas fa-plus-circle"></svg>
              </IconButton>
            </Tooltip>
          </Typography>
          <Paper className={classes.chipPaper}>
          {mock.map((item, idx) => {
            return <Chip className={classes.chipItems} key={idx} label={`${item}`}/>
          })}
          </Paper>
        </div>
        <div>
          <Typography
          className={classes.subtitle} 
          >Dislikes
            <Tooltip title="Add a dislike">
              <IconButton alignItems="right" aria-label="Add Item to Your Dislikes List">
              <svg className="fas fa-plus-circle"></svg>
              </IconButton>
            </Tooltip>
          </Typography>
            <Paper className={classes.chipPaper}>
            {mock.map((item, idx) => {
              return <Chip className={classes.chipItems} key={idx} label={`${item}`}/>
            })}
            </Paper>
        </div>
        <div>
          <Typography
          className={classes.subtitle} 
          >Diets
            <Tooltip title="Add a diet">
              <IconButton alignItems="right"  aria-label="Add Item to Your Diet List">
              <svg className="fas fa-plus-circle"></svg>
              </IconButton>
            </Tooltip>
          </Typography>

            <Paper className={classes.chipPaper}>
            {mock.map((item, idx) => {
              return <Chip className={classes.chipItems} key={idx} label={`${item}`}/>
            })}
            </Paper>
       </div>
       <div>
          <Typography
          className={classes.subtitle} 
          >Allergies
            <Tooltip title="Add a allergy">
              <IconButton alignItems="right" aria-label="Add Item to Allergy List">
              <svg className="fas fa-plus-circle"></svg>
              </IconButton>
            </Tooltip>
          </Typography>
            <Paper className={classes.chipPaper}>
            {mock.map((item, idx) => {
              return <Chip className={classes.chipItems} key={idx} label={`${item}`}/>
            })}
            </Paper>
        </div>
        </Grid>
      </Grid>
    </Card>
  ) 
}

export default withStyles(useStyles)(Tastes)