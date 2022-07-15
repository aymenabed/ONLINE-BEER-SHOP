// Node Modules Files
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
// Local Files
import Beers from './components/Beers/Beers';
import BeerView from './components/BeerView/BeerView';
import Cart from './components/Cart/Cart';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
// Redux
import { getBeers } from './redux/beers/beers_actions';
// CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


const App = () => {

  const { beers, cart } = useSelector((state) => state.beers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBeers());
  }, [dispatch]);


  return (
    <>
      <Router>
        <div style={{ display: 'flex' }}>
          <CssBaseline />
          <Navbar totalBeers={cart.length} />
          <Switch>
            <Route exact path="/">
              <Beers beers={beers} />
            </Route>
            <Route exact path="/cart">
              <Cart cart={cart} />
            </Route>
            <Route exact path="/beer-view/:id">
              <BeerView />
            </Route>
          </Switch>
        </div>
      </Router>
      <Footer />
    </>
  );
};

export default App;
