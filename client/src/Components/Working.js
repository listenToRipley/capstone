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
    marginLeft: `calc(115% - ${window.innerWidth/1.5}px)`,
  },
  body: {
    color: 'navyBlue'
  },
  text1: {
    display: 'block',
    position: 'absolute',
    marginTop: '95px',
    marginLeft: `calc(115% - ${window.innerWidth/1.5}px)`,
    fontSize: '25px',
  },
  text2: {
    display: 'block',
    position: 'absolute',
    marginTop: '150px',
    marginLeft: `calc(88.5% - ${window.innerWidth/1.5}px)`,
    fontSize: '25px',
  },
  img: {
    marginTop: '70px',
    marginLeft: `calc(86% - ${window.innerWidth/1.5}px)`,
  },
  text3: {
    position: 'absolute',
    marginTop: '-2em',
    marginLeft: `calc(110% - ${window.innerWidth/1.5}px)`,
    fontSize: '25px',
  },
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
      <div className={classes.body}>
       <p className={classes.text1}>Sorry!</p>
       <p className={classes.text2}>Pantry Pals is working on some improvements, we'll be back soon</p>
       <img className={classes.img} src={working}/>
       <p className={classes.text3}>Better than ever!</p>
      </div>
    </div>
  )
};

export default Working; 