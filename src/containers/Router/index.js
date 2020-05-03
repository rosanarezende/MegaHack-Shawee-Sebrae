import React from 'react';
import { ConnectedRouter } from 'connected-react-router'
import { Switch, Route } from 'react-router-dom'

import Home from '../Home';
import Calendar from '../Calendar';
import Produtos from '../Produtos';
import InitialScreen from '../InitialScreen';
import Login from '../Login';
import MyAccount from '../MyAccount';
import SignUp from '../SignUp';
import Cart from '../Cart';

export const routes = {
  root: '/', 
  login: '/login',
  signUp: '/cadastro', // por fazer
  home: '/home',
  agendamento: '/agendamento',
  produtos: '/produtos',
  detalheDeProduto: '/detalhe', // por fazer
  carrinho: '/carrinho', // por fazer
  minhaConta: '/minha-conta' // em andamento - Rosana
} 

function Router(props) {
  const { history } = props

  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path={routes.root} component={InitialScreen} />
        <Route exact path={routes.login} component={Login} />
        <Route exact path={routes.signUp} component={SignUp} />
        <Route exact path={routes.home} component={Home} />
        <Route exact path={routes.agendamento} component={Calendar} />
        <Route exact path={routes.produtos} component={Produtos} />
        <Route exact path={routes.minhaConta} component={MyAccount}/>
        <Route exact path={routes.carrinho} component={Cart}/>
        <Route path="*" component={() => "Página não encontrada"} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;