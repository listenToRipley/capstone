import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import working from './Img/work.gif'

const useStyles = makeStyles((theme) => ({ 

  })
);

const Working = () => {

  const classes = useStyles();

  return (
    <div>
      <img src={working}/>
    </div>
  )
};

export default Working; 