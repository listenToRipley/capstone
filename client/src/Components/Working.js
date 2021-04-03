import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import working from './Img/work.gif'

const useStyles = makeStyles((theme) => ({ 
  root: {
    display: 'flex',
    position: 'absolute !important' 
  },
  toolbar: theme.mixins.toolbar,
  appBar: {
    toolbar: theme.mixins.tool,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  title:{
    marginLeft: `calc(100% - ${window.innerWidth/1.5}px)`,
  },
  text: {
    position: 'absolute',
    marginTop: '95px',
    marginLeft: `calc(93% - ${window.innerWidth/1.5}px)`,
  },
  img: {
    marginTop: '70px',
    marginLeft: `calc(86% - ${window.innerWidth/1.5}px)`,
  }
  })
);

const Working = () => {

  const classes = useStyles();

  return (
    <div>
      <div className={classes.root} style={{position: "fixed"}}></div>
      <AppBar
        position="fixed"
        className={classes.appBar}
      >
        <Toolbar position="fixed">
          <Typography className={classes.title} variant="h6" noWrap>
            Pantry Pals
          </Typography>
        </Toolbar>
      </AppBar>
      <p className={classes.text}>Sorry! We are working on some improvements, Pantry Pals will be back soon and better than every!</p>
      <img className={classes.img} src={working}/>
    </div>
  )
};

export default Working; 