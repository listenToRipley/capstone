import React from 'react';
import {useState} from 'react'
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box'
import { shadows } from '@material-ui/system';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Switch from '@material-ui/core/Switch';
import WifiIcon from '@material-ui/icons/Wifi';
import BluetoothIcon from '@material-ui/icons/Bluetooth';
import { Container } from '@material-ui/core';

  //birthday
//option to update information - button for update and save those updates 
  //setting for others to view -toggles 


//SAVE BUTTON TO COMMIT ANY CHANGES

//need a view mode ~ see pal profile 

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 10,
    padding: 20,
    width: '99%',
    justifyContent: 'center'
  },
  paper: {
    width: '80%',
    marginTop: theme.spacing(6),
    marginLeft: theme.spacing(10),
    marginBottom: theme.spacing(2),
    justifyContent: 'space-evenly',
    alignItems: 'center',
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
  displayPrefCell: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    },
}));

const DisplayPreferences  = () => {
  const classes = useStyles();
  //need to populate originally from the sign in info of the user
  const [checked, setChecked] = React.useState(['wifi']);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const handleUpdates = () => {
    //would be better to have an on handle change? 
  }

  return (
        <Container component={Card}>
        <Typography
          component="h1" 
          variant="h5"
          className={classes.subtitle} 
          >Display Preferences</Typography>

            <List subheader={<ListSubheader>View</ListSubheader>} className={classes.root}>
                <ListItem>
                  <ListItemIcon>
                    <WifiIcon />
                  </ListItemIcon>
                  <ListItemText id="switch-list-label-wifi" primary="Wi-Fi" />
                  <ListItemSecondaryAction>
                    <Switch
                      edge="end"
                      onChange={handleToggle('wifi')}
                      checked={checked.indexOf('wifi') !== -1}
                      inputProps={{ 'aria-labelledby': 'switch-list-label-wifi' }}
                    />
                  </ListItemSecondaryAction>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <BluetoothIcon />
                  </ListItemIcon>
                  <ListItemText id="switch-list-label-bluetooth" primary="Bluetooth" />
                  <ListItemSecondaryAction>
                    <Switch
                      edge="end"
                      onChange={handleToggle('bluetooth')}
                      checked={checked.indexOf('bluetooth') !== -1}
                      inputProps={{ 'aria-labelledby': 'switch-list-label-bluetooth' }}
                    />
                  </ListItemSecondaryAction>
                </ListItem>
              </List>
          {/* <Grid
            container
            component="main" 
            direction="column"
            alignItems="center"
            className={classes.form}
          >
            <CssBaseline/>
       
            <Grid item xs={4} alignItems="left" className={classes.displayPrefCell}>birthday</Grid>
            <Grid item xs={4} alignItems="right" className={classes.displayPrefCell}>toggle place holder</Grid>
            <Grid item xs={4} alignItems="left" className={classes.displayPrefCell}>location</Grid>
            <Grid item xs={4} alignItems="right" className={classes.displayPrefCell}>toggle place holder</Grid>
            <Grid item xs={4} alignItems="left" className={classes.displayPrefCell}>email</Grid>
            <Grid item xs={4} alignItems="right" className={classes.displayPrefCell}>toggle place holder</Grid>
            <Grid item xs={4} alignItems="left" className={classes.displayPrefCell}>phone</Grid>
            <Grid item xs={4} alignItems="right" className={classes.displayPrefCell}>toggle place holder</Grid>
            <Grid item xs={4} alignItems="left" className={classes.displayPrefCell}>likes</Grid>
            <Grid item xs={4} alignItems="right" className={classes.displayPrefCell}>toggle place holder</Grid>
            <Grid item xs={4} alignItems="left" className={classes.displayPrefCell}>dislikes</Grid>
            <Grid item xs={4} alignItems="right" className={classes.displayPrefCell}>toggle place holder</Grid>
            <Grid item xs={4} alignItems="left" className={classes.displayPrefCell}>allergies</Grid>
            <Grid item xs={4} alignItems="right" className={classes.displayPrefCell}>toggle place holder</Grid>
            <Grid item xs={4} alignItems="left" className={classes.displayPrefCell}>diets</Grid>
            <Grid item xs={4} alignItems="right" className={classes.displayPrefCell}>toggle place holder</Grid>

          </Grid> */}
        </Container>
        
    
  )
}

export default withStyles(useStyles)(DisplayPreferences)