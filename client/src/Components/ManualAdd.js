import React from 'react'
import Paper from '@material-ui/core/Paper'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import { FormControl } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import {useInput} from '../Hooks/inputHook'
import AddToShoppingList from '../Containers/AddToShoppingList'
import AddToPantry from '../Containers/AddToShoppingList'

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

const ManualAdd = (props) => {
  const classes = useStyles()

  const {list} = props
  console.log('manual add knows the list', list)

  const {value: quantity, bind: bindQuantity, reset: resetQuantity} = useInput(1) 
  const {value: item, bind: bindItem, reset: resetItem} = useInput('') 
  const {value: measurement, bind: bindMeasurement, reset: resetMeasurement} = useInput('') 

  const addButton = (need) => {
    console.log('you seeing the button here?', need)
    if (need==='pantry') {
      return (
        <AddToPantry quantity={bindQuantity} item={bindItem} itemID={0}/>
      )
    } else if (need==='shopList') {
      return (
        <AddToShoppingList quantity={bindQuantity} item={bindItem} itemID={0}/>
      )
    } 
  }

  return (
  <Paper className={classes.root}>
    <Box className={classes.box}>
      <Typography className={classes.title}>Can't find what you are looking for?</Typography>
      <p>Manually Add Your Item here</p>
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
            min="1"
            placeholder="1"
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
            autoFocus
            className={classes.fields}
            aria-label="item you want"
          />
          
      </FormControl>
      <div className={classes.button}>
       {addButton(list)}
      </div>
    </Box>
  </Paper>
  )
}

export default ManualAdd