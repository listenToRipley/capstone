import React, { useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import work from "./Img/work.gif";
import useImgResize from "../Hooks/useImgResize";

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
    marginLeft: `calc(115% - ${window.innerWidth/1.5}px)`,
  },
  body: {
    color: 'navyBlue'
  },
  textBody: {
    display: 'block',
    position: 'absolute',
    textAlign: 'center',

  },
  text: {
    position: 'relative',
    top: '50%',
    left: '-50%',
    fontSize: '25px',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    height: '100%'
  },
  img: {
    marginTop: '70px',
    margin: '5%',
    position: 'relative',
    zIndex: '-1',
    overflow: 'hidden',
  },
  // text3: {
  //   position: 'absolute',
  //   marginTop: '-2.75em',
  //   marginLeft: `calc(${windowWidth - windowWidth * .72 }px)`,
  //   fontSize: '25px',
  // },
  // text4: {
  //   position: 'absolute',
  //   marginTop: '-2em',
  //   marginLeft: `calc(${windowWidth - windowWidth * .68 }px)`,
  //   fontSize: '15px',
  // },
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
    <div className={classes.body} ref={bodyRef}>
      <div className={classes.textBody}>
        <p className={classes.text}>Sorry!</p>
        <p className={classes.text}>Pantry Pals is currently down for some much needed Maintenance</p>
        <p className={classes.text}>Sorry for any inconveniences this might case.</p>
        <p className={classes.text}>If you have questions or concerns, please  
          <a href="mailto:natalie.m.kendrick@gmail.com?subject=PantryPalsMaintenance"> feel free to reach out</a>
        </p>
      </div>
      <img src={work} width={useImgResize(bodyRef)}/>
    </div>
  </div>

  )
}

export default Maintenance