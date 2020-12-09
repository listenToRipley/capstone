import React from 'react'
import Paper from '@material-ui/core/Paper'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import { FormControl } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import {useInput} from '../Hooks/inputHook'
import AddToShoppingList from './AddToShoppingList'

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

const ManualAdd = () => {
  const classes = useStyles()

  const {value: quantity, bind: bindQuantity, reset: resetQuantity} = useInput(1) 
  const {value: item, bind: bindItem, reset: resetItem} = useInput('') 
  const {value: measurement, bind: bindMeasurement, reset: resetMeasurement} = useInput('') 

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
            from="measurementsList"
            autoFocus
            className={classes.fields}
            aria-label="unit of measurement"
          /> */}
          
      </FormControl>
      <div className={classes.button}>
        <AddToShoppingList/>
      </div>
    </Box>
  </Paper>
  )
}

export default ManualAdd