import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
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
import PantryToolbar from './PantryToolbar'

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

  const { classes, order, orderBy, numSelected, rowCount, onRequestSort } = props;

  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow
      indeterminate={numSelected > 0 && numSelected < rowCount}>

        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'center' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'default'}
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
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};


const Pantry = (props) =>  {
  const classes = useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };


  //need to work on this since it is handle everything right now 
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
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
    console.log(newPage)
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <PantryToolbar numSelected={props} />
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="your pantry"
            aria-label="pantry"
          >
            <PantryHead
              classes={classes}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            
            />
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.name);
                  const labelId = `check box${index}`;

                  return (
                    <TableRow
                      hover
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={index}
                      selected={isItemSelected}
                    >

                      <TableCell component="th" id={labelId} scope="row" align="center">
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
          rowsPerPageOptions={[10, 25, 50]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
          rowsPerPageOptions={[10, 50, { value: -1, label: 'All' }]}
        />
      </Paper>
    </div>
  );
}

export default withStyles(useStyles)(Pantry)