import React, {useEffect, useState}  from 'react';
import { lighten, makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx'
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faShoppingBasket, faCartArrowDown, faPlusCircle, faCogs, faHandHoldingWater } from '@fortawesome/free-solid-svg-icons';
import SearchPage from '../Containers/SearchPage';
import DeleteShopItem from '../Containers/DeleteShopItem';
import UpdateShopItem from '../Containers/UpdateShopItem';
import './toolbar.css'


library.add(faShoppingBasket, faCartArrowDown, faPlusCircle, faCogs) 
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
      actions:{
        display: 'flex',
        justifyContent:"space-evenly",
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

  const classes = useStyles();
  const {shopping, setShopping} = useState(false)
  const [holding, setHolding] = useState([]);
  const {numSelected , setNumSelected } = useState(0)
  const {selected, setSelected} = useState(0)
  const {checked, setChecked} = useState(false)

  useEffect(() => {
    
      return props.findShopList(shopListId, token, props.user.username)
    
  }, [])
  //need to change this out so it refresh properly on changes

  const handleCheck = (e) => {
    e.preventDefault();
    let check = e.target.checked
    let item = e.target.value
    check? false : true
  }


  const handleSelectAll =(e) => {

    let check = e.target.checked
        check? false : true

  }

  const headCells = [
    { id: 'quantity', numeric: true, disablePadding: false, label: 'Quantity' },
    { id: 'items', numeric: false, disablePadding: false, label: 'Items' },
    { id: 'actions', numeric: false, disablePadding: false, label: 'Actions' },
  ]

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
                Your Shopping List 
              </Typography>
            )}
              
              <SearchPage list='shopList'/>
               
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
                       checked={checked}
                      onClick={handleSelectAll}
                      inputprops={{ 'aria-label': 'select all items on shopping list' }}
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

                  {userShopList.list.map((row, index) => {
                
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
                            onChange={handleCheck}
                          />
                        </TableCell>
                        <TableCell component="th" id={row.entryId} scope="row" align="center">
                          {null ? 1 : row.quantity}
                        </TableCell>
                        <TableCell align="center">{row.item}</TableCell>
                        <TableCell className={classes.actions} align="center">{row.actions}
                         <DeleteShopItem q={row.quantity} it={row.item} m={row.measurement} entryId={row.entryId}/>
                        <UpdateShopItem q={row.quantity} it={row.item} m={row.measurement} entryId={row.entryId}/>
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

export default ShoppingList