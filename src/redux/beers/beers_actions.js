import axios from 'axios';
// Local Files
import {
  GET_BEERS,
  ADD_BEER_TO_CART,
  REMOVE_BEER_FROM_CART,
  ON_EMPTY_CART,
  UPDATE_CART_QTY_PLUS,
  UPDATE_CART_QTY_MOINS,
} from './beers_types';

const URL = 'https://api.punkapi.com/v2/beers';

export const getBeers = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(URL);
      dispatch({ type: GET_BEERS, payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };
};

export const addBeerToCart = (beerID) => {
  return {
    type: ADD_BEER_TO_CART,
    payload: beerID,
  };
};

export const removeBeerFromCart = (beerID) => {
  return {
    type: REMOVE_BEER_FROM_CART,
    payload: beerID,
  };
};

export const handleUpdateCartQtyPlus = (beerID) => {
  return {
    type: UPDATE_CART_QTY_PLUS,
    payload: beerID,
  };
};

export const handleUpdateCartQtyMoins = (beerID) => {
  return {
    type: UPDATE_CART_QTY_MOINS,
    payload: beerID,
  };
};

export const onEmptyCart = () => {
  return {
    type: ON_EMPTY_CART,
  };
};


