import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PropOne from './PropOne';
import PropTwo from './PropTwo';
import PropThree from './PropThree';
import NavBar from './NavBar';
import Home from './Home';
import './App.css';
import Search from './Search';
import About from './About';
import Login from './Login';
import Footer from "./Footer";

function App() {
  return (
    <Router>
      <div className="App">

        <div>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Search" component={Search} />
            <Route exact path="/About" component={About} />
            <Route exact path="/Login" component={Login} />
            <Route exact path="/lyon" component={PropOne} />
            <Route exact path="/terry" component={PropTwo} />
            <Route exact path="/timber" component={PropThree} />
          </Switch>
          <Footer/>
        </div>
      </div>
    </Router>
  );
}

export default App;
