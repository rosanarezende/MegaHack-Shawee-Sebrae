import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import calendar from './calendar'
import navigation from './navigation'
import professional from './professional'
import shopping from './shopping'
import user from './user'

export const generateReducers = history =>
  combineReducers({
    router: connectRouter(history),
    calendar,
    navigation,
    professional,
    shopping,
    user,
  })