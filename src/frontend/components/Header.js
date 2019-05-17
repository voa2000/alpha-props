import React from 'react';
import './Header.css';
import HeaderImage from '../common/images/header.png';

function Header() {
  return (
    <div className="outerbox">
      <div className="headerImage">
        <img src={HeaderImage} alt="" />
        <div className="overlay">
ALPHA PROPERTIES
          <br />
Your first stop for a Prime Propery in Central London
        </div>
      </div>
    </div>

  );
}

export default Header;
