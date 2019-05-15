import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './NavBar/NavBar';
import Home from '../components/Home/Home';
import './App.css';
import Login from './NavBar/Login';
import About from './NavBar/About';
import Search from './NavBar/Search';

function App() {
  return (
    <div className="App">
      <Router>
        <div className="App">
          <NavBar />
          <main className='main-container'>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/About" component={About} />
              <Route exact path="/Login" component={Login} />
              <Route exact path="/Search" component={Search} />
            </Switch>
          </main>
        </div>
      </Router>
    </div>
  );
}

export default App;
