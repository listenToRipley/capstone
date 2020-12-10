import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton';
import UpdateIcon from '@material-ui/icons/Update';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField'
import { FormControl } from '@material-ui/core';
import Slide from '@material-ui/core/Slide';
import {useInput} from '../Hooks/inputHook'

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '5%',
    paddingLeft: '5%',
    width: '90%',
  },
  box: {
    width: '100%',
    justifyContent: 'space-evenly',
  },
  title: {
    padding: 10,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  fields: {
    margin: theme.spacing(2),
    width: '100%'
    },
  form: {
    flexDirection: 'row',
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),
  },
  button: {
    width: '100%',
    margin: '4%',
    paddingLeft: '25%'
  }
}));


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const UpdateShopItem = (props) => {
  const classes = useStyles()
  console.log('update props ', props)
  const {action} = props
  const currentItem = props.userShopList.list.find(entry => entry.entryId===action)

  const [open, setOpen] = useState(false)
  const {value: quantity, bind: bindQuantity, reset: resetQuantity} = useInput(`${currentItem.quantity}`) 
  const {value: item, bind: bindItem, reset: resetItem} = useInput(`${currentItem.item}`) 
  const {value: measurement, bind: bindMeasurement, reset: resetMeasurement} = useInput(`${currentItem.measId}`) 

  const handleUpdateItem = () => {
    console.log('update this item!', props.action)
    props.upShopItem(action)
  }

  const openEditor = () => {
    console.log('hello you want to edit it?')
    setOpen(!open)
  }

  return (
    <div>
    <IconButton
    onClick={openEditor}
    aria-label='update'
    aria-controls='update-item'
    aria-haspopup='false' >
      <UpdateIcon />
    </IconButton>

    <Dialog
        open={setOpen}
        TransitionComponent={Transition}
        keepMounted
        onClose={setOpen(false)}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{"Update Your Entry"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
          <FormControl className={classes.form}>
      <TextField
            {...bindQuantity}
            variant="outlined"
            margin="normal"
            required
            id="quantity"
            label="Quantity"
            name="quantity"
            type="number"
            placeholder={quantity}
            autoFocus
            className={classes.fields}
            aria-label="item you want to buy"
          />
                <TextField
            {...bindItem}
            variant="outlined"
            margin="normal"
            id="item"
            label="Item"
            name="item"
            type="text"
            placeholder={item}
            autoFocus
            className={classes.fields}
            aria-label="item you want"
          />
            {/* <TextField
            {...bindMeasurement}
            variant="outlined"
            margin="normal"
            required
            id="measurement"
            label="Unit"
            name="measurement"
            type="text"
            placeholder={measurement}
            from="measurementsList"
            autoFocus
            className={classes.fields}
            aria-label="unit of measurement"
          /> */}
          
          </FormControl>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleUpdateItem} color="primary">
            Save Changes
          </Button>
        </DialogActions>
      </Dialog>

    </div>
  )
}

export default UpdateShopItem 