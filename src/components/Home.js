import React from 'react';
import ShoppingList from './ShopList/ShoppingList';
import Pantry from './Pantry/Pantry';
import PalList from './PalLists/PalList';
import UserProfile from './CurrentUser/UserProfile'; 
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
// import cookie from 'cookie'

//this view is based on the current user and their primary

const useStyles = makeStyles((theme) => ({
  root: {
    height:'100vh'
  },
  welcome: {
    margin: theme.spacing(4,5)
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

  return (
   <Box
      className={classes.root}
      >
      <Card>
    <Typography component="h1" variant="h5" className="welcome">Welcome {props.bindUsername}</Typography>
    </Card> 
      <Grid
        container
        component="main" 
        direction="row"
        justify="center"
        alignItems="center"
  
        >

        <Grid
        item xs={12} sm={8} md={5} elevation={6} square>
        <Card className="cards">
          <Paper>
            <ShoppingList/>
          </Paper>
        </Card>

        <Card className="cards">
          <Paper>
            <Pantry/>
          </Paper>
        </Card>

        <Card className="cards">
          <Paper>
            <PalList/>
          </Paper>
        </Card>

        <Card className="cards">
          <Paper>
            <UserProfile/>
          </Paper>
        </Card>

        </Grid>
      </Grid>
   </Box>
  
  )

}

export default withStyles(useStyles)(Home)