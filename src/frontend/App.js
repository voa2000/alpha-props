import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PropOne from './components/PropOne';
import PropTwo from './components/PropTwo';
import PropThree from './components/PropThree';
import NavBar from './components/NavBar';
import Home from './components/Home';
import './App.css';
import Search from './components/Search';
import About from './components/About';
import Login from './components/Login';
import Footer from './components/Footer';
import NavbarSpacer from "./components/NavbarSpacer";

function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <NavBar />
          <NavbarSpacer/>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Search" component={Search} />
            <Route exact path="/About" component={About} />
            <Route exact path="/Login" component={Login} />
            <Route exact path="/lyon" component={PropOne} />
            <Route exact path="/terry" component={PropTwo} />
            <Route exact path="/timber" component={PropThree} />
          </Switch>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
