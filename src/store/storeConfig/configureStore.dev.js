import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers';

const enhancer = compose(
  applyMiddleware(thunkMiddleware),
  typeof window === 'object' && typeof window.devToolsExtension !== 'undefined'
    ? window.devToolsExtension()
    : f => f
);

export default function configureStore() {
  return createStore(rootReducer, enhancer);
}
