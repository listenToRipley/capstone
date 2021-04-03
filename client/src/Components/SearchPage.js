import React, {useState, Fragment} from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faPlusCircle} from '@fortawesome/free-solid-svg-icons';
import FoodSearchBar from '../Containers/FoodSearchBar';
import CloseIcon from '@material-ui/icons/Close';
import TextField from '@material-ui/core/TextField'
import AddToShoppingList from '../Containers/AddToShoppingList'
import ManualAdd from './ManualAdd'
import {useInput} from '../Hooks/inputHook'
import './toolbar.css'

library.add(faPlusCircle) 
dom.watch()

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  cardContainer: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  resultCard: {
    maxWidth: 345,
    marginTop: theme.spacing(4),
    marginLeft: theme.spacing(1),
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  actionList: {
    width: '100vw'
  },
  actions: {
    display: 'flex',
    justifyContent:"space-around",
   
  },
  fas: {
    display: 'flex',
    justifyContent:"space-between",
  }
}));

const SearchPage = (props) => {

  const classes = useStyles();
  const {searchResults, openFoodSearch, openFoodFinder, list} = props

  console.log('list your open is ', list)

  console.log('tell me about the props in food search', props.searchResults)

  const [expanded, setExpanded] = useState(true)
  const {value: quantity, bind: bindQuantity, reset: resetQuantity} = useInput(1) 

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  
  return (
    <div >
    
    <Tooltip className="add" title="Find items to add">
      <IconButton 
      onClick={() => openFoodSearch(true)}>
        <svg className="fas fa-plus-circle"></svg>
      </IconButton>
    </Tooltip> 


    <Dialog open={openFoodFinder} fullScreen >
    <AppBar className={classes.appBar}>
      <Toolbar>
      <IconButton edge="start" color="inherit" onClick={() => openFoodSearch(false)} 

      >
       <CloseIcon />
     </IconButton>
      </Toolbar>
    </AppBar>
    <FoodSearchBar/>
    <List>

      {searchResults.length-1 !==undefined  ? 
      <div className={classes.cardContainer}>
          {
            searchResults.map((item, index) => (
  
            <Card 
            className={classes.resultCard}
            key={item.id}>
            <CardMedia
              className={classes.media}
              image={item.image}
              title={item.title}
            />
            <CardContent>
            <Typography
            variant="body2" color="textSecondary" component="p"
            >{item.title}</Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent 
              className="actionList">
                    <TextField
            {...bindQuantity}
            variant="outlined"
            margin="normal"
            required
            id="quantity"
            label="Quantity"
            name="quantity"
            type="number"
            min="1"
            placeholder="1"
            autoFocus
            className={classes.fields}
            aria-label="item you want to buy"
          />
              <AddToShoppingList itemId={item.id} item={item.title} quantity={bindQuantity}/>
              </CardContent>
            </Collapse>
           </Card>
        
           ))
          }
      </div> : 
      <div/>}

    </List>

    <ManualAdd list={list}/>

  </Dialog>
    </div>
  )
}

export default SearchPage
