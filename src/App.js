import React from 'react';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'

import { generateReducers } from './reducers'

import Router from './containers/Router'

const history = createBrowserHistory()

const store = createStore(
  generateReducers(history),
  applyMiddleware(routerMiddleware(history))
)

function App() {
  return (
    <Provider store={store}>
      <Router history={history}/>
    </Provider>
  );
}

export default App;
