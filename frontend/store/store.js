import { createStore, applyMiddleware } from 'redux';
import thunk from '../middleware/thunk';
import rootReducer from '../reducers/root_reducer';

const preloadState = {};

const configureStore = () => (
  createStore(rootReducer, preloadState, applyMiddleware(thunk))
);

export default configureStore;
