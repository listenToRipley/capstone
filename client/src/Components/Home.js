import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';


const useStyles = makeStyles((theme) => ({
  root: {
    height:'0vh'
  },
  welcome: {
    margin: theme.spacing(4,5)
  }, 
  grid: {
    padding: theme.spacing(2)
  },
    paper: {
      margin: theme.spacing(1, 4, 4 ),
      display: 'flex',
      flexDirection: '',
      alignItems: 'center',
  }, 
  cards: {
    margin: 4,
    padding: 10
  }
}))

const Home = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const {shopListId, palListId, pantryId} = props.userDetails

  return (
  <Paper>
   <Box
    className={classes.root}
      >
      <Card className={classes.cards}>
    <Typography component="h1" variant="h5" className="welcome">Welcome {props.user.username}</Typography>
    </Card> 
      <Grid
        container
        component="main" 
        direction="row"
        justify="center"
        alignItems="center"
        spacing={2}
        >

        <Grid
        item xs={10} sm={10} md={9} elevation={10}>
        <Card className={classes.cards} >
        <ListItem 
        button 
        component={Link}
        to='/shoppingList'
        aria-label='shopping list'
        >
          Your Shopping List
        </ListItem>
       
        </Card>

        <Card className={classes.cards} >
          <ListItem 
              button 
              component={Link}
              to='/pantry'
              aria-label='pantry'
              pantry={pantryId}
                >
                Your Pantry
          </ListItem>
     
        </Card>

        </Grid>
      </Grid>
   </Box>
  </Paper>
  )

}

export default Home