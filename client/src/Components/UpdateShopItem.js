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
import Tooltip from '@material-ui/core/Tooltip';
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
  },
  dialogActions: {
    display: 'flex',
    justifyContent: 'space-evenly',
  }
}));


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const UpdateShopItem = (props) => {
  const classes = useStyles()
  const {entryId, q, it, m} = props
  const {username} = props.user
  const {token} = props.user.pass

  const [open, setOpen] = useState('')
  const {value: quantity, bind: bindQuantity, reset: resetQuantity} = useInput(q) 
  const {value: item, bind: bindItem, reset: resetItem} = useInput(it) 
  const {value: measurement, bind: bindMeasurement, reset: resetMeasurement} = useInput(m) 

  const handleUpdateItem = (e) => {
    e.preventDefault()
    props.upShopItem(username, token ,entryId, bindQuantity.value ? bindQuantity.value : q , bindItem.value? bindItem.value : item)
    setOpen(false)
  }

  const openEditor = (e) => {
    console.log('click update')
    setOpen(true)
  }

  const closeEditor = () => {
    setOpen(false)
  }

  return (
    <div>
    <Tooltip title="update-item">
      <IconButton
      onClick={openEditor}
      aria-label='update'
      aria-controls='update-item'
      >
        <UpdateIcon />
      </IconButton>
    </Tooltip>
    {open? 
      <Dialog
        open={setOpen}
        TransitionComponent={Transition}
        keepMounted
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
            autoFocus
            className={classes.fields}
            aria-label="item you want to buy"
            defaultValue={quantity}
          />
            <TextField
            {...bindItem}
            variant="outlined"
            margin="normal"
            id="item"
            label="Item"
            name="item"
            type="text"
            autoFocus
            className={classes.fields}
            aria-label="item you want"
            defaultValue={item}
          />
          </FormControl>
          </DialogContentText>
        </DialogContent>
        <DialogActions className={classes.dialogActions}>
        <Button onClick={closeEditor} color="primary">
            Cancel Changes
          </Button>
          <Button onClick={handleUpdateItem} color="primary">
            Save Changes
          </Button>
        </DialogActions>
      </Dialog> 
       : <div/> }
    
    </div>
  )
}

export default UpdateShopItem 