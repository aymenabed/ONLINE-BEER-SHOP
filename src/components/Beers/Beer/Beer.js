// Node Modules Files
import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, Button, CardActionArea } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// Local Files
import useStyles from './styles';
import { addBeerToCart } from '../../../redux/beers/beers_actions';




const Beer = ({ beer }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { cart } = useSelector((state) => state.beers);

  return (
    <Card className={classes.root} raised>
      <Link to={{ pathname: `beer-view/${beer.id}`, state: { beer: beer } }} >
        <CardActionArea>

          <CardMedia className={classes.media} image={beer.image_url} title={beer.title} />

        </CardActionArea>
      </Link>
      <CardContent>
        <div className={classes.cardContent}>
          <Typography variant="h6">
            {beer?.name}
          </Typography>
          <Typography variant="h6" color="secondary">
            <b>{beer?.volume?.value} {beer?.volume?.unit}</b>
          </Typography>
        </div>
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <Button variant="contained" disabled={cart.findIndex((item) => item?.id === beer?.id) > -1} className={classes.button} endIcon={<AddShoppingCart />} onClick={() => dispatch(addBeerToCart(beer.id))} >
          <b>ADD TO CART</b>
        </Button>
      </CardActions>
    </Card>
  )
}

export default Beer;