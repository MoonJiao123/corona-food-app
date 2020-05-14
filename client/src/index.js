/**
 * This is the main index.js file used to route the webpage.
 * 
 * Conntributors: Tabassum Alam
 */

import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App';
import ErrorPage from './components/ErrorPage';
import BusinessDashboardParent from './components/BusinessDashboardParent';
import CustomerDashboardParent from './components/CustomerDashboardParent';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import withAuth from './withAuth';

/** creates routing to different pages */
export const routing = (
    <BrowserRouter>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/ErrorPage" component={ErrorPage} />
          <Route path="/Business" component={BusinessDashboardParent} /> 
          <Route path="/Customer" component={CustomerDashboardParent} />
          {/** use these lines instead of previous two lines once backend is good to go */}
          {/**<Route path="/Business" component={withAuth(BusinessDashboardParent)} /> 
          <Route path="/Customer" component={withAuth(CustomerDashboardParent)} />**/}
        </Switch>
    </BrowserRouter>
)

/** render */
ReactDOM.render(
    routing,
  document.getElementById('root')
); 
