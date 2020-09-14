import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Accordion, AccordionDetails, AccordionSummary, CssBaseline, Grid, Paper, Typography } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import MyVoucherHistoryView from './MyVoucherHistoryView';

const useStyles = makeStyles((theme) => ({
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(800 + theme.spacing(2) * 2)]: {
      width: 800,
      marginLeft: 'auto',
      marginRight: 'auto',
    }
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(800 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(1),
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

function MyVoucherView() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange = (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return(
    <React.Fragment>
      <CssBaseline />
      <main className={classes.layout}>
      <Paper className={classes.paper}>
        <Typography variant="h6" gutterBottom>
          My Voucher Information
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={10} md={3}>
            <Typography variant="body1" gutterBottom>Member name:</Typography>
          </Grid>
          <Grid item xs={10} md={7}>
            <Typography variant="body1" gutterBottom>Seller A (Corporation)</Typography>
          </Grid>
          <Grid item xs={10} md={3}>
            <Typography variant="body1" gutterBottom>Total Amount:</Typography>
          </Grid>
          <Grid item xs={10} md={7}>
            <Typography variant="body1" gutterBottom>27,000 W</Typography>
          </Grid>
        </Grid>
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography className={classes.heading}>Voucher Details</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container spacing={2}>
              <Grid item xs={10} md={2}>
                <Typography className={classes.secondaryHeading}>No</Typography>
              </Grid>
              <Grid item xs={10} md={5}>
                <Typography className={classes.secondaryHeading}>Store ID</Typography>
              </Grid>
              <Grid item xs={10} md={3}>
                <Typography className={classes.secondaryHeading}>Amount</Typography>
              </Grid>
              <Grid item xs={10} md={2}>
                <Typography className={classes.secondaryHeading}>1</Typography>
              </Grid>
              <Grid item xs={10} md={5}>
                <Typography className={classes.secondaryHeading}>A Store voucher</Typography>
              </Grid>
              <Grid item xs={10} md={3}>
                <Typography className={classes.secondaryHeading}>2500</Typography>
              </Grid>
              <Grid item xs={10} md={2}>
                <Typography className={classes.secondaryHeading}>2</Typography>
              </Grid>
              <Grid item xs={10} md={5}>
                <Typography className={classes.secondaryHeading}>B Store voucher</Typography>
              </Grid>
              <Grid item xs={10} md={3}>
                <Typography className={classes.secondaryHeading}>7500</Typography>
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Typography className={classes.heading}>Voucher History</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <MyVoucherHistoryView />
          </AccordionDetails>
        </Accordion>
      </Paper>
      </main>
    </React.Fragment>
  );
}

export default MyVoucherView;