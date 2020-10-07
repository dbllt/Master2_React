import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import About from './About';
import './App.css';

import BeerList from './BeerList';


function App() {
  return (
    <div>
      <div className="w3-bar w3-black w3-card">
        <a className="w3-bar-item w3-button w3-padding-large" href="/">Beer list</a>
        <a className="w3-bar-item w3-button w3-padding-large" href="/about">About</a>
      </div>
      <div className="w3-container">
        <Router>
          <Switch>
            <Route class="w3-bar-item w3-button w3-padding-large" exact path='/' component={BeerList} />
            <Route class="w3-bar-item w3-button w3-padding-large" path='/about' component={About} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}



export default App;