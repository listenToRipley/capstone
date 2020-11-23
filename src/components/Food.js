import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Button from '@material-ui/core/Button'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import { withStyles } from '@material-ui/styles';

library.add(faCartArrowDown) 
dom.watch()

const useStyles = makeStyles((theme) => ({
  root: {
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
  avatar: {
    backgroundColor: red[500],
  },
}));

//this should not be based on current user, but add will always add to the primary list of the current user
//this will be based on spoon, need to be able to search and add to shopping list or pantry 
const Food = (props) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleAddToPantry = () => {

  }

  const handleAddToShopList = () => {

  }

  const handleAddToLikes = () => {

  }

  const handleAddToDislikes = () => {

  }

  const handleAddToAllergies = () => {

  }

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Grid
    container
    component="main" 
    direction="row"
    justify="center"
    alignItems="center"
    spacing={2}
    >
      <Grid
      item xs={10} sm={10} md={9} elevation={10}>
        <Card className={classes.root}>
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
          <CardContent>
            <Button> Add To Pantry</Button>
            <Button> <svg className="fas fa-cart-arrow-down"></svg> Add To Shopping List <svg className="fas fa-cart-arrow-down"></svg> </Button>
            <Button> <FavoriteIcon /> Add To My Likes <FavoriteIcon /> </Button>
            <Button> Add To My Dislikes</Button>
            <Button> Add to My Allergies </Button>
          </CardContent>
        </Collapse>
       </Card>
      </Grid>
    </Grid>
  );
}

export default withStyles(useStyles)(Food)