import React from 'react';

import { CssBaseline, Grid, Paper, TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import VmarketSalesItemDetailedDialog from './VmarketSalesItemDetailedDialog';

const emails = ['username@gmail.com', 'user02@gmail.com'];

const salesList = [
    {
        id: 1,
        name: "Selling for store A",
        type: "Sale",
        price: 25000,
        memberId: "Seller A",
        date: "2020-09-14"
    },
    {
        id: 2,
        name: "Selling for store B",
        type: "Sale",
        price: 23000,
        memberId: "Seller B",
        date: "2020-09-14"
    },
    {
        id: 3,
        name: "Buying for store C",
        type: "Buying",
        price: 20000,
        memberId: "Buyer C",
        date: "2020-09-14"
    }
]

const useStyles = makeStyles((theme) => ({
    layout: {
      width: 'auto',
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      [theme.breakpoints.up(1000 + theme.spacing(2) * 2)]: {
        width: 1000,
        marginLeft: 'auto',
        marginRight: 'auto',
      }
    },
    paper: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(3),
      padding: theme.spacing(2),
      [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(6),
        padding: theme.spacing(3),
      },
    },
    buttons: {
      display: 'flex',
      justifyContent: 'flex-end',
    },
    button: {
      marginTop: theme.spacing(3),
      marginLeft: theme.spacing(1),
    },
}));

export default function VmarketMain() {
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState(emails[1]);
    
    const handleDetailDialogOpen = () => {
        setOpen(true);
    }

    const handleDetailDialogClose = () => {
        setOpen(false);
    }

    return(
        <React.Fragment>
            <CssBaseline />
            <main className={classes.layout}>
                <Paper className={classes.paper}>
                    <Typography variant="h6" gutterBottom>
                        Search Condition
                    </Typography>
                    <Grid container spacing={1}>
                        <Grid item xs={12} sm={12}>
                            <Typography>
                                Search Condition: Type (auction | reverse auction | sales | buying | My interest), Date, Price etc...
                            </Typography>
                        </Grid>
                    </Grid>
                    <Typography variant="h6" gutterBottom>
                        Sales List
                    </Typography>
                    <Grid container spacing={1}>
                        <Grid item xs={12} sm={1} alignContent='center'>
                            <Typography>No</Typography>
                        </Grid>
                        <Grid item xs={12} sm={3} alignContent='center'>
                            <Typography>Name</Typography>
                        </Grid>
                        <Grid item xs={12} sm={2} alignContent='center'>
                            <Typography>Type</Typography>
                        </Grid>
                        <Grid item xs={12} sm={2} alignContent='center'>
                            <Typography>Price</Typography>
                        </Grid>
                        <Grid item xs={12} sm={2} alignContent='center'>
                            <Typography>Buyer/Seller</Typography>
                        </Grid>
                        <Grid item xs={12} sm={2} alignContent='center'>
                            <Typography>Date</Typography>
                        </Grid>
                    { salesList.map((salesItem) => (
                        <Grid container spacing={1}>
                            <Grid item xs={12} sm={1}>
                                <Typography>{ salesItem.id }</Typography>
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                <Typography onClick={handleDetailDialogOpen} style={{ cursor: 'pointer'}}>{ salesItem.name}</Typography>
                            </Grid>
                            <Grid item xs={12} sm={2}>
                                <Typography>{ salesItem.type }</Typography>
                            </Grid>
                            <Grid item xs={12} sm={2}>
                                <Typography>{ salesItem.price }</Typography>
                            </Grid>
                            <Grid item xs={12} sm={2}>
                                <Typography>{ salesItem.memberId }</Typography>
                            </Grid>
                            <Grid item xs={12} sm={2}>
                                <Typography>{ salesItem.date }</Typography>
                            </Grid>
                        </Grid>
                    ))}
                    </Grid>
                </Paper>
                <VmarketSalesItemDetailedDialog selectedValue={selectedValue} open={open} onClose={handleDetailDialogClose} />
            </main>
        </React.Fragment>        
    );
}