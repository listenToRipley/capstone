import React, {useEffect, useState}  from 'react';
import { lighten, makeStyles, useTheme } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import useMediaQuery from '@material-ui/core/useMediaQuery';
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
import Actions from './ShopActions'
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faShoppingBasket, faCartArrowDown, faPlusCircle, faCogs } from '@fortawesome/free-solid-svg-icons';
import MenuItem from '@material-ui/core/MenuItem'
import SearchPage from '../Containers/SearchPage'
import './toolbar.css'


library.add(faShoppingBasket, faCartArrowDown, faPlusCircle, faCogs) 
dom.watch()


  //IMPORTANT NOTE!!!

  //there should be three version of this 

  //primary list 
  //rename shop list 
  //view items 
  //start shopping  - end shopping 
    //check items off 
    //add items to pantry 
  //add items 
  //remove items
  //update items  

  //~~editor 
    //view items 
    //add items
    //update items 
    //remove items
    //start shopping  - end shopping 
    //check items off 

  //~~requests
    //view items 
    //request items 

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


const ShoppingList = (props) =>  {

  const {shopListId} = props.userDetails
  const {call} = props.userShopList
  const {token} = props.user.pass
  const {userShopList} = props
  const {list} = props.userShopList

  const lLength = list.length 

  const classes = useStyles();
  const {shopping, setShopping} = useState(false)
  const [selected, setSelected] = useState([]);
  const {numSelected , setNumSelected } = useState(0)
  const {checked, setChecked} = useState(false)

  useEffect( () => {
    if (call===false) {
      return props.findShopList(shopListId, token, props.user.username)
    }
  })

  //click handlers 
  const handleClick = (e, name) => {
    e.preventDefault();
      console.log('checked', name)
    }

  const handleCheckUpdate = (e, item, status) => {
    checked=!status
    console.log('you want to had the item to the hold list it check and remove if un checked', item)
    if(status) {
      setSelected.push(item)
    } else {
      console.log('remove item from selected list ')
    }
  }


  //header sorting 
  const headCells = [
    { id: 'quantity', numeric: true, disablePadding: false, label: 'Quantity' },
    { id: 'items', numeric: false, disablePadding: false, label: 'Items' },
    { id: 'unit', numeric: true, disablePadding: false, label: 'Unit' },
    { id: 'actions', numeric: false, disablePadding: false, label: 'Actions' },
  ]

  //tool bar
  const openSearch = (e) => {
    e.preventDefault();
    openFoodSearch(true)
  }

  const startShopping = (e) => {
    e.preventDefault();
    console.log('so you want to start shopping')
    setShopping(true)
  }

  if(call) {
    return (
      <div className={classes.root}>
        <Paper className={classes.paper}>

          <Toolbar
            className={clsx(classes.toolbar, {
            [classes.highlight]: selected.length > 0,
          })}
            > 
            {selected.length > 0 ? (
              <Typography className={classes.title} color="inherit" variant="subtitle1" component="div">
                {selected.length} selected
              </Typography>
            ) : (
              <Typography className={classes.title} variant="h6" id="tableTitle" component="div">
                Your Shopping List 
              </Typography>
            )}
              
              <SearchPage/>
               
               {setShopping ? (
              <Tooltip title="Finished Shopping">
                <IconButton aria-label="finish shopping"
                onClick={() => { console.log('you should add the items on hold list to pantry and reset hold list and well as render place')}}>
                <svg className="fas fa-cart-arrow-down"/> 
                </IconButton>
              </Tooltip>
            ) : (
              <Tooltip title="Start Shopping">
                <IconButton aria-label="start shopping"
                onClick={startShopping}>
                <svg className="fas fa-shopping-basket"/>
                </IconButton>
              </Tooltip>
              )}
           </Toolbar>
          
          <TableContainer>
            <Table
              className={classes.table}
              aria-labelledby="your shopping list"
              aria-label="shopping list"
              >

                <TableHead>
                  <TableRow>

                  <TableCell padding="checkbox">
                      <Checkbox
                      checked={setNumSelected<=lLength}
                      onChange={() => console.log('you the list count')}
                      inputProps={{ 'aria-label': 'select all items on shopping list' }}
                    />
                  </TableCell>

                    {headCells.map((headCell) => (
                      <TableCell
                        key={headCell.id}
                        align={'center'}
                        inputProps={{ 'aria-label': 'select to mark item off' }}
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

                  {userShopList.list.map((row, index) => {
                
                    return (
                      <TableRow
                        hover
                        onClick={() => console.log('should be the opposite of what is currently is and added it or remove it to the hold list')}
                        role="checkbox"
                        itemId={`${row.entryId} is selected`}
                        key={row.entryId}
                      >
                        <TableCell padding="checkbox">
                          <Checkbox
                            padding="10"
                            checked={checked}
                            inputProps={{ 'list item number ': row.entryId }}
                            onChange={handleCheckUpdate(row.entryId, checked)}
                          />
                        </TableCell>
                        <TableCell component="th" id={row.entryId} scope="row" align="center">
                          {null ? 1 : row.quantity}
                        </TableCell>
                        <TableCell align="left">{row.item}</TableCell>
                        <TableCell align="right">{row.measId}</TableCell>
                        <TableCell align="left">{row.actions}
                        <Actions action={userShopList.list.entryId}/>
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
              aria-labelledby="your shopping list"
              aria-label="shopping list"
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

// export default withStyles(useStyles)(ShoppingList)
export default ShoppingList