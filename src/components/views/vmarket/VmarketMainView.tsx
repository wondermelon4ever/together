import React from 'react';

import { CssBaseline, Grid, Paper, TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import VmarketSalesItemDetailedDialog from './VmarketSalesItemDetailedDialog';

const emails = ['username@gmail.com', 'user02@gmail.com'];

const useStyles = makeStyles((theme) => ({
    layout: {
      width: 'auto',
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
        width: 800,
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
                        <Grid item xs={12} sm={1}>
                            <Typography>1</Typography>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <Typography onClick={handleDetailDialogOpen}>Selling for store A</Typography>
                        </Grid>
                        <Grid item xs={12} sm={2}>
                            <Typography>Sell</Typography>
                        </Grid>
                        <Grid item xs={12} sm={2}>
                            <Typography>25000</Typography>
                        </Grid>
                        <Grid item xs={12} sm={2}>
                            <Typography>Seller A</Typography>
                        </Grid>
                        <Grid item xs={12} sm={2}>
                            <Typography>2020-09-14</Typography>
                        </Grid>
                        <Grid item xs={12} sm={1}>
                            <Typography>2</Typography>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <Typography onClick={handleDetailDialogOpen}>Selling for store B</Typography>
                        </Grid>
                        <Grid item xs={12} sm={2}>
                            <Typography>Sell</Typography>
                        </Grid>
                        <Grid item xs={12} sm={2}>
                            <Typography>25000</Typography>
                        </Grid>
                        <Grid item xs={12} sm={2}>
                            <Typography>Seller B</Typography>
                        </Grid>
                        <Grid item xs={12} sm={2}>
                            <Typography>2020-09-14</Typography>
                        </Grid>
                    </Grid>
                </Paper>
                <VmarketSalesItemDetailedDialog selectedValue={selectedValue} open={open} onClose={handleDetailDialogClose} />
            </main>
        </React.Fragment>        
    );
}