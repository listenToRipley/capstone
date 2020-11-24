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
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faStar,  faSkullCrossbones, faThumbsDown, faSeedling, faBirthdayCake, faSearchLocation, faEnvelopeOpenText, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';

library.add(faStar,faSkullCrossbones, faThumbsDown, faSeedling, faBirthdayCake, faSearchLocation, faEnvelopeOpenText, faPhoneVolume) 
dom.watch()

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
    //this will actually need to import the settings from backend. 

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
        <Card className={classes.root}>
            <Card>
            <List subheader={
            <Typography
               component="h1" 
                variant="h5"
                className={classes.subtitle} 
              >Display Preferences</Typography>} >
             
                <Button alignItems="right">Save</Button>
         
                <ListItem>
                  <ListItemIcon>
                    <svg className="fas fa-birthday-cake"/>
                  </ListItemIcon>
                  <ListItemText id="switch-list-label-wifi" primary="Birthday" />
                  <ListItemSecondaryAction>
                    <Switch
                      edge="end"
                      onChange={handleToggle('birthday')}
                      checked={checked.indexOf('birthday') !== -1}
                      inputProps={{ 'aria-labelledby': 'switch-list-label-birthday' }}
                    />
                  </ListItemSecondaryAction>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <svg className="fas fa-search-location"/>
                  </ListItemIcon>
                  <ListItemText id="switch-list-label-location" primary="Location" />
                  <ListItemSecondaryAction>
                    <Switch
                      edge="end"
                      onChange={handleToggle('location')}
                      checked={checked.indexOf('location') !== -1}
                      inputProps={{ 'aria-labelledby': 'switch-list-label-location' }}
                    />
                  </ListItemSecondaryAction>
                </ListItem>

                <ListItem>
                  <ListItemIcon>
                    <svg className="fas fa-envelope-open-text"/>
                  </ListItemIcon>
                  <ListItemText id="switch-list-label-email" primary="Email" />
                  <ListItemSecondaryAction>
                    <Switch
                      edge="end"
                      onChange={handleToggle('email')}
                      checked={checked.indexOf('email') !== -1}
                      inputProps={{ 'aria-labelledby': 'switch-list-label-email' }}
                    />
                  </ListItemSecondaryAction>
                </ListItem>

                <ListItem>
                  <ListItemIcon>
                    <svg className="fas fa-phone-volume"/>
                  </ListItemIcon>
                  <ListItemText id="switch-list-label-phone" primary="Phone" />
                  <ListItemSecondaryAction>
                    <Switch
                      edge="end"
                      onChange={handleToggle('phone')}
                      checked={checked.indexOf('phone') !== -1}
                      inputProps={{ 'aria-labelledby': 'switch-list-label-phone' }}
                    />
                  </ListItemSecondaryAction>
                </ListItem>

                <ListItem>
                  <ListItemIcon>
                    <svg className="fas fa-star"/>
                  </ListItemIcon>
                  <ListItemText id="switch-list-label-phone" primary="Likes" />
                  <ListItemSecondaryAction>
                    <Switch
                      edge="end"
                      onChange={handleToggle('likes')}
                      checked={checked.indexOf('likes') !== -1}
                      inputProps={{ 'aria-labelledby': 'switch-list-label-likes' }}
                    />
                  </ListItemSecondaryAction>
                </ListItem>

                <ListItem>
                  <ListItemIcon>
                    <svg className="fas fa-thumbs-down"/>
                  </ListItemIcon>
                  <ListItemText id="switch-list-label-dislikes" primary="Dislikes" />
                  <ListItemSecondaryAction>
                    <Switch
                      edge="end"
                      onChange={handleToggle('dislikes')}
                      checked={checked.indexOf('dislikes') !== -1}
                      inputProps={{ 'aria-labelledby': 'switch-list-label-dislikes' }}
                    />
                  </ListItemSecondaryAction>
                </ListItem>


                <ListItem>
                  <ListItemIcon>
                    <svg className="fas fa-seedling"/>
                  </ListItemIcon>
                  <ListItemText id="switch-list-label-diets" primary="diets" />
                  <ListItemSecondaryAction>
                    <Switch
                      edge="end"
                      onChange={handleToggle('diets')}
                      checked={checked.indexOf('diets') !== -1}
                      inputProps={{ 'aria-labelledby': 'switch-list-label-diets' }}
                    />
                  </ListItemSecondaryAction>
                </ListItem>

                <ListItem>
                  <ListItemIcon>
                    <svg className="fas fa-skull-crossbones"/>
                  </ListItemIcon>
                  <ListItemText id="switch-list-label-allergies" primary="allergies" />
                  <ListItemSecondaryAction>
                    <Switch
                      edge="end"
                      onChange={handleToggle('allergies')}
                      checked={checked.indexOf('allergies') !== -1}
                      inputProps={{ 'aria-labelledby': 'switch-list-label-allergies' }}
                    />
                  </ListItemSecondaryAction>
                </ListItem>

              </List>
            </Card>
        </Card>
        
    
  )
}

export default withStyles(useStyles)(DisplayPreferences)