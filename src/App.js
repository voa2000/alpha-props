import React from 'react';
import Body from './Body/Body';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './Navbar';
import Home from './Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <Body />
      <Router>
        <div className="App">
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
