import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';


const NavBar = () => (
  <div className="navigation">
    <div className="container">
      <nav to="/" className="navigation_items">
        <ul>
            <Link to={'/'} >Home </Link>
            <Link to={'/About'} >About </Link>
            <Link to={'/Search'} >Search </Link>
            <Link to={'/Login'} >Login </Link>
        </ul>
      </nav>
    </div>
  </div>
);

export default NavBar;
