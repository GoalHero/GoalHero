import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import user from './user';
import hero from './hero';
import test from './test';
import goals from './goals';
import game from './game';
import heroes from './heroes';

const reducer = combineReducers({
  user,
  hero,
  heroes,
  goals,
  game,
});

const middleware = composeWithDevTools(
  applyMiddleware(
    thunkMiddleware
    // , createLogger({ collapsed: true,logging:false })
  )
);

const store = createStore(reducer, middleware);

export default store;
