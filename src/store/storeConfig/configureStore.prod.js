import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers';

const enhancer = compose(applyMiddleware(thunkMiddleware));

export default function configureStore() {
  return createStore(rootReducer, enhancer);
}
