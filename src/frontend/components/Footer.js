import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="Footer">
      <div className="Footer-Header">
        <h1>Contact us!</h1>
      </div>
      <div className="Footer-Body">
        <h3>Your perfect home is just a click away!</h3>
        <p>To find out more details about Alpha Props: </p>
        <button className="Button">
          <Link to="/About">Contact us!</Link>
        </button>
      </div>
      <div className="Footer-End">
        <p>&#xa9; Copyright Alpha Props 2019-{new Date().getFullYear()}</p>
      </div>
    </div>
  );
}

export default Footer;
