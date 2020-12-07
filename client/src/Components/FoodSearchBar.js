import React from 'react';
import {useState} from 'react'
import MenuItem from '@material-ui/core/MenuItem'
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Food from './Food/Food';
import {useInput} from '../Hooks/inputHook';

// import Card from '@material-ui/core/Card'
// import Paper from '@material-ui/core/Paper';
// import Chip from '@material-ui/core/Chip';
// import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';
// import { withStyles } from '@material-ui/styles';
// import Grid from '@material-ui/core/Grid';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import Tooltip from '@material-ui/core/Tooltip';
// import IconButton from '@material-ui/core/IconButton'
// import {useInput} from '../../../Hooks/inputHook';
// import { library, dom } from '@fortawesome/fontawesome-svg-core';
// import { faPlusCircle} from '@fortawesome/free-solid-svg-icons';

// import MenuItem from '@material-ui/core/MenuItem'
// import InputBase from '@material-ui/core/InputBase';
// import SearchIcon from '@material-ui/icons/Search';

// import Button from '@material-ui/core/Button';
// import Dialog from '@material-ui/core/Dialog';
// import ListItemText from '@material-ui/core/ListItemText';
// import ListItem from '@material-ui/core/ListItem';
// import List from '@material-ui/core/List';
// import Divider from '@material-ui/core/Divider';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import CloseIcon from '@material-ui/icons/Close';

// import Slide from '@material-ui/core/Slide'

// library.add(faPlusCircle) 
// dom.watch()



// const useStyles = makeStyles((theme) => ({
//   title: {
//     padding: 10,
//     display: 'none',
//     justifyContent: 'center',
//     [theme.breakpoints.up('sm')]: {
//       display: 'block',
//     },
//   },
//   subtitle: {
//     padding: 20,
//   },
//   fields: {
//     margin: theme.spacing(4),
//     width: '90%',

//     },
//     fieldLabel: {
//       padding: theme.spacing(1),
//     },
//   form: {
//     width: '100vw', // Fix IE 11 issue.
//     paddingLeft: '5%',
//     margin: theme.spacing(1),
//     // marginBottom: theme.spacing(1),
//   },
//   tastes: {
//     width: '80%', // Fix IE 11 issue.
//     paddingLeft: '5%',
//     marginTop: theme.spacing(1),
//     marginBottom: theme.spacing(1),
//     borderRadius: 3
//   },
//   chipPaper: {
//     padding: theme.spacing(1),
//     },
//   chipItems: {
//     margin: '.5em'
//   },
//   appBar: {
//     position: 'relative',
//   },

// }));


// const Transition = React.forwardRef(function Transition(props, ref) {
//   return <Slide direction="up" ref={ref} {...props} />;
// });


const foodSearchBar = (open, children) => {
  console.log('are you hitting?')

  let {value:searchWord, bind:bindSearchWord, reset:resetSearch} = useInput('')


  const handleSearch = () => {
    //need to map for search result using food. 
  }

  if(!open) return null

  return(

    <div className='searchbar'>
    <MenuItem className='search'>
     <div className='searchIcon'>
       <SearchIcon />
     </div>
     <InputBase
        {...bindSearchWord}
       placeholder="Search…"
       className={'inputRoot','inputInput'}
       inputProps={{ 'aria-label': 'search' }}
       id="searchWord"
       name="searchWord"
       type="text"
       autoFocus
     />
    </MenuItem>
   </div>

  )
   
}

export default foodSearchBar
