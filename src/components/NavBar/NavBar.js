import React from 'react';
import { Link } from 'react-router-dom';


const NavBar = () => (
  <nav className="nav-wrapper grey darken-3">
    <div className="container">
      <Link to="/" className="brand-logo" />
      <Link to={'/'} >Home </Link>  
      <Link to={'/About'} >About </Link>  
      <Link to={'Search'} >Search </Link> 
      <Link to={'/Login'} >Login </Link> 
    </div>
  </nav>
);

export default NavBar;
