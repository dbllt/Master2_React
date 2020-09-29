import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import About from './About';
import './App.css';

import BeerList from './BeerList';


function App() {
  return (
    <div>
      <Router>

        <Switch>
          <Route exact path='/' component={BeerList} />
          <Route path='/about' component={About} />
        </Switch>
      </Router>
    </div>
  );
}



export default App;