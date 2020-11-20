import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { lighten, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import PalsListActions from './PalsListActions'
import PalActions from './PalActions'
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faCogs} from '@fortawesome/free-solid-svg-icons';

library.add(faCogs)
dom.watch()

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
    width: '100%',
    marginTop: theme.spacing(4),
  },
  paper: {
    width: '100%',
    marginLeft: theme.spacing(4),
    marginBottom: theme.spacing(2),
  },
  table: {
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
{ id: 'username', numeric: false,  label: 'username' },
{ id: 'palActions', numeric: false, label: 'Pal Actions' },
];

//EnhancedTableHead
const PalsHead = (props) =>  {

const { classes, order, orderBy, rowCount, onRequestSort } = props;

const createSortHandler = (property) => (event) => {
onRequestSort(event, property);
};

return (
<TableHead>

    <TableCell >
    </TableCell>
    {headCells.map((headCell) => (
      <TableCell
        key={headCell.id}
        align='left'
        padding='none'
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

const useToolbarStyles = makeStyles((theme) => ({
root: {
paddingLeft: theme.spacing(3),
paddingRight: theme.spacing(1),
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
title: {
flex: '1 1 80%',
},
}));

//EnhancedTableToolbar
const PalsToolbar = (props) => {
const classes = useToolbarStyles();

return (
<Toolbar>
  <Tooltip title="Start Shopping">
    <IconButton aria-label="start shopping">
    <svg className="fas fa-cogs"></svg>
    </IconButton>
  </Tooltip>
</Toolbar>
)
};

//EnhancedTable 
const PalsList = () =>  {
const classes = useStyles();
const [order, setOrder] = React.useState('asc');
const [orderBy, setOrderBy] = React.useState('calories');
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
<PalsToolbar/>    
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
  
                  <TableCell align="left">{row.pal}</TableCell>
                  <TableCell align="right">{row.username}</TableCell>
                  <TableCell align="left">{row.palActions}
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

export default PalsList