import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import calendar from './calendar'

export const generateReducers = history =>
    combineReducers({
        router: connectRouter(history),
        calendar

})