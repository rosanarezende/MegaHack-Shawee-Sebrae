import React from 'react';
import { ConnectedRouter } from 'connected-react-router'
import { Switch, Route } from 'react-router-dom'

import Home from '../Home';
import Calendar from '../Calendar';

export const routes = {
    home: '/',
    calendar: '/calendar'

}

function Router(props){
    const { history } = props
    
    return(
        <ConnectedRouter history={history}>
            <Switch>
                <Route exact path={routes.home} component={Home}/>
                <Route exact path={routes.calendar} component={Calendar}/>
                <Route path="*" component={() => "Página não encontrada"} />
            </Switch>
        </ConnectedRouter>
    )
}

export default Router