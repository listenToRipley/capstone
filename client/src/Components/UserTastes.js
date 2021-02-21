import React from 'react';
import {useState} from 'react'
import Card from '@material-ui/core/Card'
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton'
import {useInput} from '../Hooks/inputHook';
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faPlusCircle} from '@fortawesome/free-solid-svg-icons';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CloseIcon from '@material-ui/icons/Close';

import Slide from '@material-ui/core/Slide'

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
  },
  appBar: {
    position: 'relative',
  },

}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const UserTastes = (props) => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleRemoveLike = () => {
    console.log('like has been removed')
  }

  const handleAddLike = (e) => {
    console.log('congrats! you just added a like!')
    console.log(' e is for event', e)

  }

  const handleRemoveDislike = () => {
    console.log('dislike has been removed')
  }

  const handleAddDislike = () => {
    console.log('congrats! you just added a dislike!')
  }

  const handleRemoveDiet = () => {
    console.log('diet has been removed')
  }

  const handleAddDiet = () => {
    console.log('congrats! you just added an diet!')
  }

  const handleRemoveAllergy = (props) => {
    console.log('allergy has been removed')
  }

  const handleAddAllergy = () => {
    console.log('congrats! you just added an allergy!')
  }


  let mock = ['apples', 'bananas', 'rasberries', 'potatos']

  return (
      <Card className={classes.body}>
      <Typography
        component="h1" 
        variant="h5"
        className={classes.subtitle} 
        >Taste Preferences</Typography>
        <Grid
          container
          component="main" 
          direction="row"
          className={classes.form}
        >
        <CssBaseline/>
        <Grid
        item
        xs={8} sm={8} md={8} component={Card} elevation={4} 
        >
        <div>
        <Typography
          className={classes.subtitle} 
          >Likes
            <Tooltip onClick={() => {setOpen(true)}} title="Add a like">
              <IconButton   aria-label="Add Item to Your Likes List">
              <svg className="fas fa-plus-circle"></svg>
              </IconButton>
            </Tooltip> 
          </Typography> 


          <div className={classes.chipPaper}>
          {mock.map((item, idx) => {
            return <Chip color="primary" variant="outlined" className={classes.chipItems} key={idx} onDelete={handleRemoveLike} label={`${item}`}></Chip>
          })}
          </div>
        </div>
        <div>
          <Typography
          className={classes.subtitle} 
          >Dislikes
            <Tooltip title="Add a dislike">
              <IconButton  aria-label="Add Item to Your Dislikes List">
              <svg className="fas fa-plus-circle"></svg>
              </IconButton>
            </Tooltip>
          </Typography>
            <div className={classes.chipPaper}>
            {mock.map((item, idx) => {
              return <Chip color="primary" variant="outlined" className={classes.chipItems} key={idx} onDelete={handleRemoveDislike} label={`${item}`}></Chip>
            })}
            </div>
        </div>
        <div>
          <Typography
          className={classes.subtitle} 
          >Diets
            <Tooltip title="Add a diet">
              <IconButton  aria-label="Add Item to Your Diet List">
              <svg className="fas fa-plus-circle"></svg>
              </IconButton>
            </Tooltip>
          </Typography>

          <div className={classes.chipPaper}>
            {mock.map((item, idx) => {
              return <Chip color="primary" variant="outlined" className={classes.chipItems} key={idx} onDelete={handleRemoveDiet} label={`${item}`}></Chip>
            })}
            </div>
       </div>
       <div>
          <Typography
          className={classes.subtitle} 
          >Allergies
            <Tooltip title="Add a allergy">
              <IconButton aria-label="Add Item to Allergy List">
              <svg className="fas fa-plus-circle"></svg>
              </IconButton>
            </Tooltip>
          </Typography>
            <div className={classes.chipPaper}>
            {mock.map((item, idx) => {
              return <Chip color="primary" variant="outlined" className={classes.chipItems} key={idx} onDelete={handleRemoveAllergy} label={`${item}`}></Chip>
            })}
            </div>
        </div>
        </Grid>
      </Grid>
      <Dialog open={open} onClose={() => setOpen(false)}/>
    </Card>
  ) 
}

export default UserTastes
