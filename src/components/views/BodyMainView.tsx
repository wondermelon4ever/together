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
    viewId: "voucherIssueView",
    description: "Virtual voucher menus for members.",
    subMenus: [
      {
        id: '1-1',
        title: "My voucher",
        viewId: "myVoucherView"
      },
      {
        id: '1-2',
        title: "Issue",
        viewId: "voucherIssueView"
      },
      {
        id: '1-3',
        title: "History",
        viewId: "voucherHistoryView"
      }
    ]
  }, 
  {
    id: 2,
    title: "V-Market",
    viewId: "vmarketMainView",
    description: "My cart | Issue | Participate | Transaction History",
    subMenus: [
     
    ]
  }, 
  {
    id: 3,
    title: "Registration",
    viewId: "voucherIssueView",
    description: "Registeration for customer or member",
    subMenus: [
      {
        id: '3-1',
        title: "고객등록",
        viewId: "myVoucherView"
      },
      {
        id: '3-2',
        title: "사용자등록",
        viewId: "myVoucherView"
      }
    ]
  },
  {
    id: 4,
    title: "Alliance",
    viewId: "voucherIssueView",
    description: "ddd",
    subMenus: [
     
    ]
  }, 
  {
    id: 5,
    title: "Promotion",
    viewId: "promotionIssueView",
    description: "Issue promotion.",
    subMenus: [
      {
        id: '5-1',
        title: "Promotion ad.",
        viewId: "promotionListCarouselView"
      },
      {
        id: '5-2',
        title: "My Promotion List",
        viewId: "promotionListCarouselView"
      },
    ]
  }, 
  {
    id: 6,
    title: "Payment",
    viewId: "announceListView",
    description: "상품구매 고객의 결재를 위한 메뉴",
    subMenus: [
     
    ]
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
                    <Link to={{ pathname: "/tp1", state: { viewId: card.viewId }}} style={{ textDecoration: 'none' }}>
                      <ListItemText primary={ card.title } />
                    </Link>
                    <Typography>{ card.description }</Typography>
                  </CardContent>
                  <CardActions>
                  {
                    card.subMenus.map((subItem) => (
                    <Button key={subItem.id} size="small" color="primary">
                      <Link to={{ pathname: "/tp1", state: { viewId: subItem.viewId }}} style={{textDecoration: 'none'}}>
                        <ListItemText primary={ subItem.title }/>
                      </Link>
                    </Button>
                    ))
                  }
                  </CardActions>
                </Card>
              </Grid>
            ))}
            <Grid>

            </Grid>
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
}