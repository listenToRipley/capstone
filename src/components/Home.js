import React from 'react';
import ShoppingList from './ShoppingList';
import Pantry from './Pantry';
import PalList from './PalList';
import UserProfile from './UserProfile'; 
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card'
import Paper from '@material-ui/core/Paper';
import { makeStyles, Typography } from '@material-ui/core';
// import Box from '@material-ui/core/Box';
// import cookie from 'cookie'

//this view is based on the current user and their primary

const useStyles = makeStyles((theme) => ({
  root: {
    height:'100vh'
  },
    paper: {
      margin: theme.spacing(8, 4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
  }
}))

const Home = (props) => {

  return (
      <Grid
        // container
        component="main" 
        direction="row"
        justify="center"
        alignItems="center"
        // className={classes.root}
        >
        <Card>
        <Typography component="h1" variant="h5">Welcome {props.bindUsername}</Typography>
        </Card>
        <Grid
        item xs={12} sm={8} md={5} elevation={6} square>
        <Card>
          <Paper>
            <ShoppingList/>
          </Paper>
        </Card>

        <Card>
          <Paper>
            <Pantry/>
          </Paper>
        </Card>

        <Card>
          <Paper>
            <PalList/>
          </Paper>
        </Card>

        <Card>
          <Paper>
            <UserProfile/>
          </Paper>
        </Card>

        </Grid>
      </Grid>
  
  )

}

export default Home