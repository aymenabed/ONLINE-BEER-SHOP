// Node Modules Files
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// Local Files
import beersReducer from './beers/beers_reducers';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  beers: beersReducer,
});

export default persistReducer(persistConfig, rootReducer);
