import React from 'react';
import { HashRouter, BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Root from './pages/Root';
import Admin from './pages/Admin';
import './App.css';

const withHashRouter = () => (
	<HashRouter>
		<Routes/>
	</HashRouter>
);

const withBrowserRouter = () => (
	<Router>
		<Routes/>
	</Router>
);

const Routes = () => {
  return (
    <Switch>
      <Route
        exact
        path="/"
        component={Root}
      />
      <Route
        path="/admin"
        component={Admin}
      />
    </Switch>
  )
}

const App = () => {
  const isGhPages = window.location.href.indexOf('github.io') > -1;
  return isGhPages ? withHashRouter() : withBrowserRouter();
}

export default App;