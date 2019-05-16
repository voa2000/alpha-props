import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PropOne from './Home/PropOne/PropOne';
import PropTwo from './Home/PropTwo/PropTwo';
import PropThree from './Home/PropThree/PropThree';
import NavBar from './NavBar/NavBar';
import Home from './Home/Home';
import './App.css';
import Search from './NavBar/Search';
import About from './NavBar/About';
import Login from './NavBar/Login';
import Footer from "./Home/Footer/Footer";

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
