import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import './App.css';
import Search from './components/Search';
import About from './components/About';
import Login from './components/Login';
import Footer from './components/Footer';
import NavbarSpacer from "./components/NavbarSpacer";
import PropertyPage from "./components/PropertyPage";

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
            <Route exact path="/:propertyId" component={PropertyPage} />
          </Switch>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
