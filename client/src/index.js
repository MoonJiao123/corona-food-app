/**
 * This is the main index.js file used to route the webpage.
 * 
 * Conntributors: Tabassum Alam
 */

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ErrorPage from './components/ErrorPage';
import BusinessDashboardParent from './components/BusinessDashboardParent';
import CustomerDashboardParent from './components/CustomerDashboardParent';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

/** creates the routing options */
export const routing = (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/ErrorPage" component={ErrorPage} />
        <Route path="/BusinessDashboardParent" component=
        {BusinessDashboardParent} /> 
        <Route path="/CustomerDashboardParent" component=
        {CustomerDashboardParent} />
      </Switch>
    </BrowserRouter>
)

/** render */
ReactDOM.render(
    routing,
  document.getElementById('root')
); 

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
