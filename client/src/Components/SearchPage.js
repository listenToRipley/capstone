import React, {useState} from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faCartArrowDown} from '@fortawesome/free-solid-svg-icons';
import Slide from '@material-ui/core/Slide';
import FoodSearchBar from '../Containers/FoodSearchBar';
import CloseSearch from './CloseSearch'
import AddFood from './AddFood'
import './toolbar.css'

library.add(faCartArrowDown) 
dom.watch()

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
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
  console.log('search page props',props)

  const {searchResults} = props

  const [expanded, setExpanded] = useState(true)

  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  
  return (
    <Dialog fullScreen TransitionComponent={Transition}>
    <AppBar className={classes.appBar}>
      <Toolbar>
        <CloseSearch/>
      </Toolbar>
    </AppBar>
    <FoodSearchBar/>
    <List>
      <ListItem button>
        <ListItemText primary="Phone ringtone" secondary="Titania" />
      </ListItem>

      {searchResults.map((item, id) => {
      
        <Card className={classes.resultCard}>
        <CardMedia
          className={classes.media}
          image="/../../public/pantryImg.jpg"
          title="Paella dish"
        />
        <CardContent>
        <Typography
        variant="body2" color="textSecondary" component="p"
        >Food Title</Typography>
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

            <AddFood/>

          </CardContent>
        </Collapse>
       </Card>
      })

      }

    </List>
  </Dialog>
  )
}

export default SearchPage