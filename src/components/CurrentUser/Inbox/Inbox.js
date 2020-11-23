import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box'

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
        table: {
          minWidth: 750,
        },
        visuallyHidden: {
          border: 0,
          clip: 'rect(0 0 0 0)',
          height: 1,
          margin: -1,
          overflow: 'hidden',
          padding: 0,
          position: 'absolute',
          top: 20,
          width: 1,
        }
      }));
  

const Inbox = () => {
  const classes = useStyles();

  return (
  <div className={classes.root}>
  <Box>
    <Paper classes={classes.paper}>
      <h1>Requests</h1>
      <div>
        <h2>Pal</h2>
        <p>sent</p>
        <p>pending approval</p>
      </div>
      <div>
        <h2>Shopping</h2>
        <p>sent</p>
        <p>Should include whose list this was sent to</p>
        <p>pending approval</p>
      </div>
      <div>
        <h2>Merge</h2>
        <p>sent</p>
        <p>pending approval</p>
      </div>
    </Paper>
    </Box>
  </div>
  )

}

export default withStyles(useStyles)(Inbox)