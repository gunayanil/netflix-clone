import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './pages/home';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/signin'>
          <p>Sign in</p>
        </Route>
        <Route path='/signup'>
          <p>Sign up</p>
        </Route>
        <Route path='/browse'>
          <p>Browse</p>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
