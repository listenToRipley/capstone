import React, {useEffect, useState}  from 'react';
import { lighten, makeStyles, useTheme } from '@material-ui/core/styles';
import clsx from 'clsx'
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import {  faPlusCircle, faCogs, faHandHoldingWater } from '@fortawesome/free-solid-svg-icons';
import MenuItem from '@material-ui/core/MenuItem';
import SearchPage from '../Containers/SearchPage';
import DeletePantryItem from '../Containers/DeletePantryItem';
import UpdatePantryItem from '../Containers/UpdatePantryItem';
import './toolbar.css'

 //IMPORTANT NOTES!!! 
  //~there are three version of this component based on users roles on current list  
  //the primary list of the current user :
  //needs to include 
    //edit pantry name
    //add items
    //remove items 

//~editor 
  //view items 
  //add and remove items 

//~ requesters 
  //view 
  //request items 


library.add(faPlusCircle, faCogs) 
dom.watch()


    const useStyles = makeStyles((theme) => ({
      root: {
        width: '100%',
        marginTop: theme.spacing(4),
      },
      paper: {
        width: '90%',
        marginLeft: theme.spacing(4),
        marginBottom: theme.spacing(2),
      },
      toolbar: {
        display: 'flex',
        justifyContent: 'space-around',
        alignSelf: 'start',
        padding: '2%'
      },
      table: {
        minWidth: 750,
      },
      visuallyHidden: {
        border: 0,
        clip: 'rect(0 0 0 0)',
        height: 1,
        margin: -1,
        overflow: 'hidden',
        padding: 0,
        position: 'absolute',
        top: 20,
        width: 1,
      },
      highlight:
      theme.palette.type === 'light'
        ? {
            color: theme.palette.secondary.main,
            backgroundColor: lighten(theme.palette.secondary.light, 0.85),
          }
        : {
            color: theme.palette.text.primary,
            backgroundColor: theme.palette.secondary.dark,
          },
    }));


const Pantry = (props) =>  {

  const {pantryId} = props.userDetails
  const {call} = props.userPantry
  const {token} = props.user.pass
  const {userPantry} = props
  const {list} = props.userPantry

  const lLength = list.length 

  const classes = useStyles();
  const [holding, setHolding] = useState([]);
  const {numSelected , setNumSelected } = useState(0)
  const {selected, setSelected} = useState(0)
  const {checked, setChecked} = useState(false)

  useEffect(() => {
      return props.findPantry(pantryId, token, props.user.username)
  },[])

  //click handlers 
  const handleCheck = (e) => {
    e.preventDefault();
    let check = e.target.checked
    let item = e.target.value
    check? false : true
    console.log('checked for singles', check, ' item', e.target.value)
    
    //   if(check) {
    //     setHolding([...setHolding, item])
    //   } else {
    //     let finder = setHolding.indexOf(item)
    //     if (finder) {
    //       setHolding([...setHolding.splice(1,finder)])
    //     }
    // }
  }

  // const handleSelected = (e) => {
  //   e.preventDefault()
  //   // let item = e.target.value
  //   // setSelected(item)
  // }

  const handleSelectAll =(e) => {
    // e.preventDefault()
    let check = e.target.checked
        check? false : true
        console.log('checked event',e.target.checked)
        
          if(check) {
            console.log('add all items entryIds to is selected')
            // list.forEach((item) => { setHolding(item)})
            // setNumSelected=lLength
          } else {
            console.log('return the state to original')
            // setHolding('')
            // setNumSelected=0
          }
  }

  //header sorting 
  const headCells = [
    { id: 'quantity', numeric: true, disablePadding: false, label: 'Quantity' },
    { id: 'items', numeric: false, disablePadding: false, label: 'Items' },
    // { id: 'unit', numeric: true, disablePadding: false, label: 'Unit' },
    { id: 'actions', numeric: false, disablePadding: false, label: 'Actions' },
  ]

  //tool bar
  const openSearch = (e) => {
    e.preventDefault();
    openFoodSearch(true)
  }

  if(call) {
    return (
      <div 
      position="static"
      className={classes.root}>
        <Paper className={classes.paper}>

          <Toolbar
            className={clsx(classes.toolbar, {
            [classes.highlight]: setHolding.length-1 > 0,
          })}
            > 
            {setHolding.length-1 > 0 ? (
              <Typography className={classes.title} color="inherit" variant="subtitle1" component="div">
                {setHolding.length-1} selected
              </Typography>
            ) : (
              <Typography className={classes.title} variant="h6" id="tableTitle" component="div">
                Your Pantry List
              </Typography>
            )}
              
              <SearchPage/>
               
           </Toolbar>
          
          <TableContainer>
            <Table
              className={classes.table}
              aria-labelledby="your-pantry-list"
              >

                <TableHead>
                  <TableRow>

                  <TableCell padding="checkbox">
                      <Checkbox
                       checked={checked}
                      onClick={handleSelectAll}
                      inputprops={{ 'aria-label': 'select all items in the pantry' }}
                    />
                  </TableCell>

                    {headCells.map((headCell) => (
                      <TableCell
                        key={headCell.id}
                        align={'center'}
                        inputprops={{ 'aria-label': 'select to mark item off' }}
                      >
                      <TableSortLabel
                        align={'center'}>
                        {headCell.id}
                      </TableSortLabel>
                      </TableCell>
                    ))}
                 </TableRow>
              </TableHead>

              <TableBody>

                  {userPantry.list.map((row, index) => {
                
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        itemId={`${row.entryId} is selected`}
                        key={row.entryId}
                      >
                        <TableCell padding="checkbox">
                          <Checkbox
                            padding="10"
                            checked={checked}
                            inputProps={{ 'number ': row.entryId }}
                            onChange={handleCheck}
                            // onClick={handleSelected}
                          />
                        </TableCell>
                        <TableCell component="th" id={row.entryId} scope="row" align="center">
                          {null ? 1 : row.quantity}
                        </TableCell>
                        <TableCell align="center">{row.item}</TableCell>
                        {/* <TableCell align="right">{row.measId}</TableCell> */}
                        <TableCell align="center">{row.actions}
                         <DeletePantryItem q={row.quantity} it={row.item} m={row.measurement} entryId={row.entryId}/>
                          <UpdatePantryItem q={row.quantity} it={row.item} m={row.measurement} entryId={row.entryId}/>
                          </TableCell>
                      </TableRow>
                    )
                  })
                  }
              </TableBody>
            </Table>
          </TableContainer>

        </Paper>
      </div>
    );
  } else {
    return (
      <Paper>
      <Toolbar/>
        <TableContainer>
        <Table
              className={classes.table}
              aria-labelledby="your pantry list"
              aria-label="pantry-list"
            >
            <TableHead>
            
            </TableHead>
            <TableBody>
              <TableRow></TableRow>
            </TableBody>
            </Table>
        </TableContainer>
    </Paper>
    )
  }
}

export default Pantry