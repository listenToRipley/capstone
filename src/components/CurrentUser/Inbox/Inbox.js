import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

//needs to get added to NavBar or should this be notification in the top bar, bell Icon?

    //merge request
    //accept
    //decline 

    //pal requests
      //accept request
      //decline requests

      const useStyles = makeStyles((theme) => ({
        root: {
          width: '95%',
          margin: theme.spacing(4),
        },
        paper: {
          width: '90%',
          marginLeft: theme.spacing(4),
          marginBottom: theme.spacing(2),
        },
        title: {
          padding: 5,
          display: 'none',
          justifyContent: 'center',
          [theme.breakpoints.up('xs')]: {
            display: 'block',
          },
        },
        subtitle: {
          padding: 20,
        },
        inboxReq: {
          marginLeft: theme.spacing(4),
          alignItems:"space-evenly",
          width: '100%'
        },
        reqBody: {
          width:'100%',
          marginBottom: theme.spacing(3),
          padding:'25px'
        },
        table: {
          minWidth: 650,
        },
      }));
  

    const createPalData = (reqId, sender, pal, action) => {
      return {reqId, sender, pal, action}
    }

    const createShopData = (reqId, quantity, items, unit, actions) => {
      return { reqId, quantity, items, unit, actions};
    }

    const createMergeData = (reqId, sender, pal, action) => {
      return {reqId, sender, pal, action}
    }

    const mockPal = [
      createPalData(1, 'cheese', 'job', 'action'),
      createPalData(2, 'job', 'cheese', 'action'),
      createPalData(3, 'cheese', 'work', 'action'),
      createPalData(4, 'cheese', 'honey', 'action'),
      createPalData(5, 'cheese', 'hobby', 'action'),
    ]

    const mockFood = [
      createShopData(1 ,305, 'Cupcake', 3.7),
      createShopData(2 ,452, 'Donut', 3.7),
      createShopData(3 ,305, 'Eclair', 3.7), 
      createShopData(4 ,5221, 'Frozen yoghurt', 159),  
      createShopData(5 ,5, 'Gingerbread', 356),  
      createShopData(6 ,1, 'Honeycomb', 408), 
      createShopData(7 ,32, 'Ice cream sandwich', 237), 
      createShopData(8 ,66, 'Jelly Bean', 375), 
      createShopData(9 ,23, 'KitKat', 518),  
      createShopData(10 ,6565, 'Lollipop', 392),
      createShopData(11 ,13.2, 'Marshmallow', 318),
      createShopData(12 ,33, 'Nougat', 360),
      createShopData(13 ,6666, 'Oreo', 437)
    ];
    


    const mockMerge = [
      createPalData(1, 'cheese', 'job', 'action'),
      createPalData(1, 'job', 'cheese', 'action'),
      createPalData(1, 'cheese', 'work', 'action'),
      createPalData(1, 'cheese', 'honey', 'action'),
      createPalData(1, 'cheese', 'hobby', 'action'),
    ]

const Inbox = (props) => {
  const classes = useStyles();

  return (
  <div className={classes.root}>

    <Paper classes={classes.paper}>
    <Typography 
        component="h1"
        variant="h4"
        className={classes.title}
        >Requests</Typography>
      <Grid
      container
      component="main"
      direction="column"
      className={classes.inboxReq}
      >
        <Grid
        item
        xs={11}
        component={Card}
        elevation={2}
        className={classes.reqBody}>
          <Typography
          component="h1"
          variant="h6"
          className={classes.subtitle}
          >Pal</Typography>
          <TableContainer>
            <Table
            className={classes.table}
            size="small"
            aria-lable="pal request table"
            >
            <TableHead>
              <TableRow>
                <TableCell>Req Id </TableCell>
                <TableCell>Sender </TableCell>
                <TableCell>Pal </TableCell>
                <TableCell>Actions </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {mockPal.map((data) => (
                <TableRow key={data.reqId}>
                  <TableCell component="th" scope="data">
                    {data.reqId}
                  </TableCell>
                  <TableCell align="left" >{data.sender}</TableCell>
                  <TableCell align="left" >{data.pal}</TableCell>
                  <TableCell align="right" >{data.actions}</TableCell>
                </TableRow>
              ))}
            </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid
        item
        xs={11}
        component={Card}
        elevation={4}
        className={classes.reqBody}>
          <Typography
          component="h1"
          variant="h6"
          className={classes.subtitle}
          >Shopping</Typography>
          <p>sent</p>
          <p>Should include whose list this was sent to</p>
          <p>pending approval</p>
        </Grid>
        <Grid
        item
        xs={11}
        component={Card}
        elevation={4}
        className={classes.reqBody}>
          <Typography
          component="h1"
          variant="h6"
          className={classes.subtitle}
          >Merge</Typography>
          <p>sent</p>
          <p>pending approval</p>
        </Grid>
        </Grid>
      </Paper>
    
  </div>
  )

}

export default withStyles(useStyles)(Inbox)