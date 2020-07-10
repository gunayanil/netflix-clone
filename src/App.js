import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import { Home, Signin, Signup } from './pages';

function App() {
  return (
    <Router>
      <Switch>
        <Route path={ROUTES.HOME} exact>
          <Home />
        </Route>
        <Route path={ROUTES.SIGN_IN}>
          <Signin />
        </Route>
        <Route path={ROUTES.SIGN_UP}>
          <Signup />
        </Route>
        <Route path={ROUTES.BROWSE}>
          <p>Browse</p>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
