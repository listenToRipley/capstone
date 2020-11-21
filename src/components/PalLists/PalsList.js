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
import PalListToolBar from './PalListToolBar'
import PalActions from './PalActions'
import { withStyles } from '@material-ui/styles';


//!!!IMPORTANT NOTE ~ there will be two versions of the pal list. 
  //there is the current user :

//needs to include 
  //current pals of this user
  //search users

  //the pals view :
  //current pals of this user
  //link to individual users' profile 


  //need to add search. 

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 10,
    padding: 20,
    width: '99%',
    justifyContent: 'center'
  },
  paper: {
    width: '80%',
    marginTop: theme.spacing(6),
    marginLeft: theme.spacing(10),
    marginBottom: theme.spacing(2),
    justifyContent: 'center'
  },
  table: {
    width: '100%',
    minWidth: 450,
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

const createData = (pal, username, palActions) => {
return { pal, username, palActions};
}

//there is an issue with the drawer and page content. 

//need to add something to show role on table, are we going to need to write a query for that? 

//this will need to be replaced by content from the server 
const rows = [
createData( 'Cupcake', 'Cupcake'),
createData( 'Donut','Donut',),
createData( 'Eclair','Eclair',), 
createData( 'Frozen yoghurt','Frozen yoghurt'),  
createData( 'Gingerbread','Gingerbread')
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
{ id: 'pal', numeric: false, label: 'Pals' },
{ id: 'username', numeric: false,  label: 'Username' },
{ id: 'palActions', numeric: false, label: 'Pal Actions' },
];

const PalsHead = (props) =>  {
  const { classes, order, orderBy, rowCount, onRequestSort } = props;

  const createSortHandler = (property) => (event) => {
onRequestSort(event, property);
};

return (
<TableHead>

    {headCells.map((headCell) => (
      <TableCell
        key={headCell.id}
        align='center'
        padding='5'
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

</TableHead>
);
}

PalsHead.propTypes = {
classes: PropTypes.object.isRequired,
onRequestSort: PropTypes.func.isRequired,
order: PropTypes.oneOf(['asc', 'desc']).isRequired,
orderBy: PropTypes.string.isRequired,
rowCount: PropTypes.number.isRequired,
};
 
const PalsList = () =>  {
const classes = useStyles();
const [order, setOrder] = React.useState('asc');
const [orderBy, setOrderBy] = React.useState('pals');
const [selected, setSelected] = React.useState([]);
const [page, setPage] = React.useState(0);
const [rowsPerPage, setRowsPerPage] = React.useState(5);

const handleRequestSort = (event, property) => {
const isAsc = orderBy === property && order === 'asc';
setOrder(isAsc ? 'desc' : 'asc');
setOrderBy(property);
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
}

setSelected(newSelected);
};

const handleChangePage = (event, newPage) => {
setPage(newPage);
};

const handleChangeRowsPerPage = (event) => {
setRowsPerPage(parseInt(event.target.value, 10));
setPage(0);
};


const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

return (
<div className={classes.root}>
<PalListToolBar/>    
{/* move to the other side */}
  <Paper className={classes.paper}>
    <TableContainer>
      <Table
        className={classes.table}
        aria-labelledby="your pal list"
        aria-label="pal list"
      >
        <PalsHead
          classes={classes}

          order={order}
          orderBy={orderBy}
          onRequestSort={handleRequestSort}
          rowCount={rows.length}
        />
        <TableBody>
          {stableSort(rows, getComparator(order, orderBy))
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((row, index) => {
              return (
                <TableRow
                  hover
                  onClick={(event) => handleClick(event, row.name)}
                  tabIndex={-1}
                  key={row.name}

                >
  
                  <TableCell align="center">{row.pal}</TableCell>
                  <TableCell align="center">{row.username}</TableCell>
                  <TableCell align="center">{row.palActions}
                    <PalActions/>
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

export default withStyles(useStyles)(PalsList)