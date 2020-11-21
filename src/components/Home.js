import React from 'react';
import ShoppingList from './ShopList/ShoppingList';
import Pantry from './Pantry/Pantry';
import PalList from './PalLists/PalsList';
import UserProfile from './CurrentUser/UserProfile'; 
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
// import cookie from 'cookie'

//this view is based on the current user and their primary

const useStyles = makeStyles((theme) => ({
  root: {
    height:'100vh'
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
  // const theme = useTheme();

  return (
   <Box
    className={classes.root}
      >
      <Card className={classes.cards}>
    <Typography component="h1" variant="h5" className="welcome">Welcome {props.bindUsername}</Typography>
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
        item xs={10} sm={10} md={9} elevation={10} square>
        <Card className={classes.cards} >
        <ListItem 
        button 
        component={Link}
        to='/shoppingList'
        aria-label='shopping list'
        >
          Your Shopping List
        </ListItem>
          <ShoppingList/>
        </Card>

        <Card className={classes.cards} >
          <ListItem 
              button 
              component={Link}
              to='/pantry'
              aria-label='pantry'
                >
                Your Pantry
          </ListItem>
          <Pantry/>
        </Card>

        <Card className={classes.cards} >
        <ListItem 
            button 
            component={Link}
            to='/palsList'
            aria-label='pal list'
            > 
            Your Pal's List
          </ListItem>
          <PalList/>
        </Card>

        <Card className={classes.cards} >
        <ListItem 
            button 
            component={Link}
            to='/userProfile'
            aria-label='pal list'
            > 
            Your Pal's List
          </ListItem>
          <Paper className={classes.paper}>
            <UserProfile/>
          </Paper>
        </Card>

        </Grid>
      </Grid>
   </Box>
  
  )

}

export default withStyles(useStyles)(Home)