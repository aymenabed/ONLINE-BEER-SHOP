// Local Files
import {
  GET_BEERS,
  ADD_BEER_TO_CART,
  REMOVE_BEER_FROM_CART,
  UPDATE_CART_QTY_PLUS,
  UPDATE_CART_QTY_MOINS,
  ON_EMPTY_CART,
} from './beers_types';

const initialState = {
  beers: [],
  cart: [],
};

const beersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BEERS:
      return {
        ...state,
        beers: action.payload,
      };

    case ADD_BEER_TO_CART:
      // Get Beer data from beers array
      const item = state.beers.find(
        (beer) => beer.id === action.payload
      );

      return {
        ...state,
        cart: [...state.cart, { ...item, qty: 1 }],
      };

    case REMOVE_BEER_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };

    case UPDATE_CART_QTY_PLUS:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload ? { ...item, qty: item.qty + 1 } : item
        )
      };

    case UPDATE_CART_QTY_MOINS:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload ? { ...item, qty: item.qty - 1 } : item
        )
      };

    case ON_EMPTY_CART:
      return {
        ...state,
        cart: [],
      };

    default:
      return state;
  }
};

export default beersReducer;
