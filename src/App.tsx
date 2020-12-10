import React from 'react';

import './App.scss';
import Cake from './components/cakePage/Cake';
import Greeting from './components/greeting/Greeting';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Card from './components/greeting/Card';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Cake} />
          <Route path="/greeting" component={Greeting} />

          <Route path="/card" component={Card} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
