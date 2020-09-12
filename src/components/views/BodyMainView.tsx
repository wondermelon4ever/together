import React from 'react';
import { Link } from 'react-router-dom';

import { Button, Card, CardActions, CardContent, CardMedia, Container, CssBaseline, Grid, ListItemText, Typography } from '@material-ui/core';

import CameraIcon from '@material-ui/icons/PhotoCamera';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = [
  {
    id: 1,
    title: "Virtual Voucher",
    viewId: "voucherIssueView"
  }, 
  {
    id: 2,
    title: "V-Market",
    viewId: "voucherIssueView"
  }, 
  {
    id: 3,
    title: "Registration",
    viewId: "voucherIssueView"
  },
  {
    id: 4,
    title: "Alliance",
    viewId: "voucherIssueView"
  }, 
  {
    id: 5,
    title: "Promotion",
    viewId: "voucherIssueView"
  }, 
  {
    id: 6,
    title: "Payment",
    viewId: "voucherIssueView"
  } 
]

export default function BodyMainView() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card.id} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                      <Link to={{ pathname: "/tp1", state: { viewId: card.viewId }}}>
                        <ListItemText primary={ card.title } />
                      </Link>
                    {/* <Typography>
                      This is a media card. You can use this section to describe the content.
                    </Typography> */}
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
}

// export default BodyMainView;