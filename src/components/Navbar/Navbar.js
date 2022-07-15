// Node Modules Files
import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';
// Local Files
import logo from '../../assets/logo.png';
import useStyles from './styles';

const Navbar = ({ totalBeers }) => {
  const classes = useStyles();
  const location = useLocation();

  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography component={Link} to="/" variant="h5" className={classes.title} color="inherit">
            <img src={logo} alt="Beers Store App" height="50px" className={classes.image} />
            <strong >ONLINE BEER SHOP KATA</strong>
          </Typography>
          <div className={classes.grow} />
          {location.pathname === '/' && (
            <div className={classes.button}>
              <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
                <Badge badgeContent={totalBeers} color="secondary">
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </div>
          )}
        </Toolbar>
      </AppBar>

    </>
  )
}

export default Navbar