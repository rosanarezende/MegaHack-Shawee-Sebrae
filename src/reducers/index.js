import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import calendar from './calendar'
import navigation from './navigation'

export const generateReducers = history =>
  combineReducers({
    router: connectRouter(history),
    calendar,
    navigation,
  })