// Node Modules Files
import React from 'react'
import { Container, Grid, Button, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
// Local Files
import './style.css'

const createMarkup = (text) => {
  return { __html: text };
};

const BeerView = () => {
  const location = useLocation()
  const { cart } = useSelector((state) => state.beers);
  const { beer } = location.state


  return (
    <Container className="beer-view">
      <Grid container>
        <Grid item xs={12} md={6} className="image-wrapper">
          <img src={beer.image_url} style={{ width: "60%" }} alt={beer.title} />
        </Grid>
        <Grid item xs={12} md={5} className="text">
          <Typography variant="h2"><b>{beer.name}</b></Typography>
          <hr />
          <Typography variant="h3" color="secondary" ><b>Description </b> </Typography>
          <Typography variant="p" dangerouslySetInnerHTML={createMarkup(beer.description)} />

          <Typography variant="h3" color="secondary" style={{ marginTop: "15px" }}><b>Brewers Tips</b> </Typography>
          <Typography variant="p" dangerouslySetInnerHTML={createMarkup(beer.brewers_tips)} />

          <Typography variant="h3" color="secondary" style={{ marginTop: "15px" }}><b > volume : {beer.volume.value} {beer.volume.unit} </b> </Typography>
          <Typography variant="h3" color="secondary" ><b> Is commanded : {(cart.findIndex((item) => item?.id === beer?.id) > -1) ? "Yes" : "No"}</b> </Typography>
          <Typography variant="h3" color="secondary" ><b> ingrédients : </b> </Typography>
          <Typography variant="h3" color="secondary" ><b> 1 ) malt : </b> </Typography>
          {beer?.ingredients?.malt.map((item) => (
            <ul>
              <li key={item?.id}>
                name : {item?.name} || amount : {item?.amount?.value} {item?.amount?.unit}
              </li>
            </ul>
          ))}

          <Typography variant="h3" color="secondary" ><b> 2 ) hops : </b> </Typography>
          {beer?.ingredients?.hops.map((item) => (
            <ul>
              <li key={item?.id}>
                name : {item?.name} || amount : {item?.amount?.value} {item?.amount?.unit}
              </li>
            </ul>
          ))}


          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Button size="large" className="custom-button" component={Link} to='/' >
                Continue Shopping
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default BeerView;
