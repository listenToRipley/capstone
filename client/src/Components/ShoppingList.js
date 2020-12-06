import React from 'react';
import {useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Actions from './ShopActions'
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faShoppingBasket, faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import { withStyles } from '@material-ui/styles';
import { getShopList } from '../redux/actions/userShopList';
import ShopListToolBar from './ShopListToolBar'
import ShopListHeaders from './ShopListHeaders'

library.add(faShoppingBasket, faCartArrowDown) 
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
      }
    }));


    //quantity, measurement, item, spoonId
const createData = (quantity, items, unit, actions) => {
  return { quantity, items, unit, actions};
}

//there is an issue with the drawer and page content. 

//need to add something to show role on table, are we going to need to write a query for that? 

//this will need to be replaced by content from the server 
const rows = [ 'pull the props from the state'
  // createData( 305, 'Cupcake', 3.7),
  // createData( 452, 'Donut', 3.7),
  // createData( 305, 'Eclair', 3.7), 
  // createData( 5221, 'Frozen yoghurt', 159),  
  // createData( 5, 'Gingerbread', 356),  
  // createData( 1, 'Honeycomb', 408), 
  // createData( 32, 'Ice cream sandwich', 237), 
  // createData( 66, 'Jelly Bean', 375), 
  // createData( 23, 'KitKat', 518),  
  // createData( 6565, 'Lollipop', 392),
  // createData( 13.2, 'Marshmallow', 318),
  // createData( 33, 'Nougat', 360),
  // createData( 6666, 'Oreo', 437)
];

//sorting functions  DON'T TOUCH 
const getComparator =(order, orderBy) => {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

//sorting functions  DON'T TOUCH 
const stableSort = (array, comparator) =>{
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}



const ShoppingList = (props) =>  {
  console.log('props on shopping list', props)

  // const {shopListId} = props.userDetails

  const classes = useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('item');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  useEffect(() => {
    console.log('need to load the shop list first! ')
    return getShopList(props.shopListId)
  }, [])

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };
  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
      console.log('click', name)
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
    console.log('new page', newPage)
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
    console.log('set pages?', setPage(0))
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <ShopListToolBar  numSelected={selected.length} />
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="your shopping list"
            aria-label="shopping list"
          >
            <ShopListHeaders 
              classes={classes}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.name);
                  const labelId = `check box${index}`;
                    console.log('is item selected? ', isItemSelected)
                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row.name)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.name}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          padding="10"
                          checked={isItemSelected}
                          inputProps={{ 'list item number ': labelId }}
                        />
                      </TableCell>
                      <TableCell component="th" id={labelId} scope="row" align="center">
                        {row.quantity}
                      </TableCell>
                      <TableCell align="left">{row.items}</TableCell>
                      <TableCell align="right">{row.unit}</TableCell>
                      <TableCell align="left">{row.actions}
                        <Actions/>
                        </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 50]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
}

// export default withStyles(useStyles)(ShoppingList)
export default ShoppingList