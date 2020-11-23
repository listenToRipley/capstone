import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid';

//needs to get added to NavBar or should this be notification in the top bar, bell Icon?

    //merge request
    //accept
    //decline 

    //pal requests
      //accept request
      //decline requests

      const useStyles = makeStyles((theme) => ({
        root: {
          width: '95%',
          margin: theme.spacing(4),
        },
        paper: {
          width: '90%',
          marginLeft: theme.spacing(4),
          marginBottom: theme.spacing(2),
        },
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
        inboxReq: {
          margin: theme.spacing(2),
          direction:"column",
          alignItems:"center"
        },
        reqBody: {

        }
      }));
  

const Inbox = () => {
  const classes = useStyles();

  return (
  <div className={classes.root}>
  <Box>
    <Paper classes={classes.paper}>
    <Typography 
        component="h1"
        variant="h4"
        className={classes.title}
        >Requests</Typography>
      <Grid
      container
      component="main"
      className={classes.inboxReq}
      >
        <div>
          <Typography
          component="h1"
          variant="h6"
          className={classes.subtitle}
          >Pal</Typography>
          <p>sent</p>
          <p>pending approval</p>
        </div>
        <div>
          <Typography
          component="h1"
          variant="h6"
          className={classes.subtitle}
          >Shopping</Typography>
          <p>sent</p>
          <p>Should include whose list this was sent to</p>
          <p>pending approval</p>
        </div>
        <div>
          <Typography
          component="h1"
          variant="h6"
          className={classes.subtitle}
          >Merge</Typography>
          <p>sent</p>
          <p>pending approval</p>
        </div>
        </Grid>
      </Paper>
    </Box>
  </div>
  )

}

export default withStyles(useStyles)(Inbox)