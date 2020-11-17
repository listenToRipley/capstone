import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({ 
  paper: {
    margin: theme.spacing(8, 4),
    padding: '15px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  body:{
    margin: theme.spacing(8, 4),
    alignItems: 'left',
  }
})
)

const About = () => {

  const classes = useStyles();

  return (
      <Paper className={classes.paper}>
        <Typography 
        component="h1" 
          variant="h5"
          >Welcome to Pantry Pals!</Typography>
          <div className={classes.body}>
         <Typography>What is Pantry Pal?</Typography>
          <p>First, a question for you. Have you ever lived with a lot of people and tried to keep a running list what what is needed for your house hold only to have everyone forget the list when they go to the store? </p>
         <p>OR, you get home from the store only to realize, damn, we were out of ketchup! I should have gotten it after all! </p>
         <p>Fear not! That is what Pantry Pal is here for.</p>
         <p>Pantry Pal is designed to help you and your household figure out what you have in your pantry, (or fridge), at the moment and what you really need from the store. We want to make it easier for you at the store and at home. We know the living with people who have a varies of taste and preference can be difficult, and we want to make your household more harmonious in the kitchen. Because, we at Pantry Pals believe in good food and belly pantries with exactly what you need.</p>
          </div>
      </Paper>

  
  )

}

export default About