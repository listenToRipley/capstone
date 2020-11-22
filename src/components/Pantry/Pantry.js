import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Paper from '@material-ui/core/Paper';
import ItemActions from './ItemActions'
import PantryActions from './PantryToolbar'

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
const createData = (quantity, items, unit, itemActions) => {
  return { quantity, items, unit, itemActions};
}

//there is an issue with the drawer and page content. 

//need to add something to show role on table, are we going to need to write a query for that? 

//this will need to be replaced by content from the server 
const rows = [
  createData( 305, 'Cupcake', 3.7),
  createData( 452, 'Donut', 3.7),
  createData( 305, 'Eclair', 3.7), 
  createData( 5221, 'Frozen yoghurt', 159),  
  createData( 5, 'Gingerbread', 356),  
  createData( 1, 'Honeycomb', 408), 
  createData( 32, 'Ice cream sandwich', 237), 
  createData( 66, 'Jelly Bean', 375), 
  createData( 23, 'KitKat', 518),  
  createData( 6565, 'Lollipop', 392),
  createData( 13.2, 'Marshmallow', 318),
  createData( 33, 'Nougat', 360),
  createData( 6666, 'Oreo', 437)
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

//sorting functions  DON'T TOUCH 
const descendingComparator = (a, b, orderBy) => {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

const headCells = [
  { id: 'quantity', numeric: true, disablePadding: false, label: 'Quantity' },
  { id: 'items', numeric: false, disablePadding: false, label: 'Items' },
  { id: 'unit', numeric: true, disablePadding: false, label: 'Unit' },
  { id: 'itemActions', numeric: false, disablePadding: false, label: 'Action Items' },
];

//EnhancedTableHead
const PantryHead = (props) =>  {

  const { classes, order, orderBy, onRequestSort } = props;

  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>

        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'center' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'default'}
            /* We don't really need sorting on update and delete, we should change that  */
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

PantryHead.propTypes = {
  classes: PropTypes.object.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
}


const Pantry = () =>  {
  const classes = useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('item');
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };


  
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <PantryActions />
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="your pantry"
            aria-label="pantry"
          >
            <PantryHead
              classes={classes}
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}  
            />
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {

                  return (
                    <TableRow
                      hover
                    >
                      <TableCell component="th" scope="row" align="center">
                        {row.quantity}
                      </TableCell>
                      <TableCell align="left">{row.items}</TableCell>
                      <TableCell align="right">{row.unit}</TableCell>
                      <TableCell align="left">{row.itemActions}
                        <ItemActions/>
                        </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
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

export default Pantry