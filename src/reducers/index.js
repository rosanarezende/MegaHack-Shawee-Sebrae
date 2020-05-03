import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import calendar from './calendar'
import navigation from './navigation'
import professional from './professional'
import user from './user'

export const generateReducers = history =>
  combineReducers({
    router: connectRouter(history),
    calendar,
    navigation,
    professional,
    user,
  })