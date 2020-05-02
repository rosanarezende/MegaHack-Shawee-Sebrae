import React from 'react';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'
import thunk from 'redux-thunk'

import { generateReducers } from './reducers'

import Router from './containers/Router'

const history = createBrowserHistory()

const middlewares = [
  applyMiddleware(routerMiddleware(history), thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : f => f
];

const store = createStore(
  generateReducers(history),
  compose(...middlewares)
)


function App() {
  return (
    <Provider store={store}>
      <Router history={history} />
    </Provider>
  );
}

export default App;
