import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import  PropOne  from './Home/PropOne/PropOne';
import  PropTwo  from './Home/PropTwo/PropTwo';
import  PropThree  from './Home/PropThree/PropThree';
import NavBar from './NavBar';
import Home from '../components/Home/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <div className="App">
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/lyon" component={PropOne} />
            <Route exact path="/terry" component={PropTwo} />
            <Route exact path="/timber" component={PropThree} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
