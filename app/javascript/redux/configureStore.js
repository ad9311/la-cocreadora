import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import challengesSlice from './challenges/challengesSlice';
import ratingSlice from './rating/ratingSlice';

const combineMiddleware = [thunk, logger];

const reducer = combineReducers(
  {
    challenges: challengesSlice.reducer,
    rating: ratingSlice.reducer,
  },
);

const store = createStore(
  reducer,
  applyMiddleware(...combineMiddleware),
);

export default store;
