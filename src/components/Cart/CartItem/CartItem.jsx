// Node Modules Files
import React from 'react';
import { useDispatch } from 'react-redux';
import { Typography, Button, Card, CardActions, CardContent, CardMedia } from '@material-ui/core';
import { Link } from 'react-router-dom';
// Local Files
import { removeBeerFromCart, handleUpdateCartQtyPlus, handleUpdateCartQtyMoins } from '../../../redux/beers/beers_actions';
import useStyles from './styles';

const CartItem = ({ item }) => {
  const classes = useStyles();
  const dispatch = useDispatch();


  return (
    <Card className="cart-item">
      <Link to={{pathname: `beer-view/${item.id}`, state:{ beer: item }} } >
      <CardMedia image={item.image_url} alt={item.title} className={classes.media} />
      </Link>
      <CardContent className={classes.cardContent}>
        <Typography variant="h6">{item.name}</Typography>
        <Typography variant="h6" color='secondary' >{item?.volume?.value} {item?.volume?.unit}</Typography>
      </CardContent>
      
      <CardActions className={classes.cardActions}>
        <div className={classes.buttons}>
          <Button disabled={item.qty === 1} type="button" size="small" onClick={() => dispatch(handleUpdateCartQtyMoins(item.id))}><b>-</b></Button>
          <Typography>&nbsp;{item.qty}&nbsp;</Typography>
          <Button type="button" size="small" onClick={() => dispatch(handleUpdateCartQtyPlus(item.id))}><b>+</b></Button>
        </div>
        <Button className={classes.button} variant="contained" size="small" type="button" color='secondary' onClick={() => dispatch(removeBeerFromCart(item.id))}>Remove</Button>
      </CardActions>
    </Card>
  );
};

export default CartItem;
