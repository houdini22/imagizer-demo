import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { routerReducer, syncHistoryWithStore, routerMiddleware } from 'react-router-redux'
import thunkMiddleware from 'redux-thunk'

import './styles/main.scss'

import * as reducers from './reducers'
import PageLayout from './layouts/PageLayout/PageLayout'

import IndexContainer from './routes/Index'
import EffectsContainer from './routes/Effects'
import DocumentationContainer from './routes/Documentation'

const baseHistory = browserHistory
const routingMiddleware = routerMiddleware(baseHistory)
const reducer = combineReducers({
  ...reducers,
  routing: routerReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(reducer, composeEnhancers(
  applyMiddleware(thunkMiddleware, routingMiddleware)
))

const history = syncHistoryWithStore(baseHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Router history={history}>
        <Route path='/' component={PageLayout}>
          <IndexRoute component={IndexContainer}/>
          <Route path='effects' component={EffectsContainer}/>
          <Route path='documentation' component={DocumentationContainer}/>
        </Route>
      </Router>
    </div>
  </Provider>,
  document.getElementById('root')
)
