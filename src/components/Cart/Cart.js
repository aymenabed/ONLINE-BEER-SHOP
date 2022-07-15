// Node Modules Files
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Typography, Button, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
// Local Files
import { onEmptyCart } from '../../redux/beers/beers_actions';
import CartItem from './CartItem/CartItem';
import useStyles from './styles';

const Cart = () => {

  const classes = useStyles();
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.beers);


  const renderEmptyCart = () => (
    <Typography variant="subtitle1">
      You have no Beers in your shopping cart,
      <Link className={classes.link} to="/"> start adding some</Link>!
    </Typography>
  );


  const renderCart = () => (
    <>
      <Grid container spacing={4}>
        {cart.map((item) => (
          <Grid item xs={12} sm={4} key={item.id}>
            <CartItem item={item} />
          </Grid>
        ))}
      </Grid>
      <div className={classes.cardDetails}>
        <div>
          <Button className={classes.emptyButton} size="large" type="button" variant="contained" onClick={() => dispatch(onEmptyCart())}>Empty cart</Button>
        </div>
      </div>
    </>
  );

  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant="h5" gutterBottom><b>Your Shopping Cart</b></Typography>
      <hr />
      {!cart.length ? renderEmptyCart() : renderCart()}
    </Container>
  );
};

export default Cart;
