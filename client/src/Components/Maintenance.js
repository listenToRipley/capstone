import React, { useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import work from "./Img/work.gif";
import useImgResize from "../Hooks/useImgResize";
import { StayPrimaryLandscape } from '@material-ui/icons';

const windowWidth = window.innerWidth

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
    marginLeft: `calc(115% - ${windowWidth/1.5}px)`,
  },
  body: {
    color: 'navyBlue',
  },
  textBody: {
    position: 'absolute',
    marginTop: '10%',
    fontSize: '25px',
    transform: 'translate(20%, 50%)',  
    textAlign: 'center',
  },
  textTop: {
    marginTop: '-27%'
  },
  textMiddle: {
    marginTop: '-1%'
  },
  textBottom: {
    marginTop: '52%'
  },
  textContact: {
    marginTop: '10%',
    fontSize: '20px'
  },

  })
);


const Maintenance = () => {

  const classes = useStyles();
  const bodyRef = useRef(null)

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
    <div disabled className={classes.body} ref={bodyRef}>
      <div className={classes.textBody}>
        <p className={classes.textTop}>Sorry!</p>
        <p className={classes.textMiddle}>Pantry Pals is currently down for some much needed Maintenance</p>
        <p className={classes.textBottom}>Sorry for any inconveniences this might case.</p>
        <p className={classes.textContact}>If you have questions or concerns, please  
          <a href="mailto:natalie.m.kendrick@gmail.com?subject=PantryPalsMaintenance"> feel free to reach out</a>
        </p>
      </div>
      <img src={work} width={useImgResize(bodyRef)}/>
    </div>
  </div>

  )
}

export default Maintenance