import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers/index';

const store = createStore (
  reducer,
  compose (
    applyMiddleware (thunk),
    // if redux extension installed instanciate it, otherwise make sure app doesn't crash if redux extension does not exist
    typeof window === 'object' &&
      typeof window.devToolsExtension !== 'undefined'
      ? window.devToolsExtension ()
      : f => f
  )
);

export default store;
