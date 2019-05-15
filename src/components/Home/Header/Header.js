import React from 'react';
import './Header.css';
import HeaderImage from '../../../images/header.png';

export default function Header() {
  return (
    <div className="container">
      <div className="card bg-dark text-white">
        <div className="card-img-overlay">
          <h5 className="card-title">APLHA PROPS</h5>
        <img className="card-img" src={HeaderImage} alt="Card" />
          <p className="card-text">Your first stop for a prime Central London Property</p>
          <p className="card-text">
              If you are looking for a lifetime property in central London, we are here to help
          </p>
          <button className="btn btn-primary">
            <span className="glyphicon glyphicon-earphone" /> Call us
          </button>
        </div>
      </div>
    </div>
  );
}
