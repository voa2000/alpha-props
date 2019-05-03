import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className="Footer">
      <div className="card-header">
        <h4>Contact us!</h4>
      </div>
      <div className="card-body">
        <h5 className="card-title">Your perfect home is just a click away!</h5>
        <p className="card-text">To find out more details about Alpha Props:</p>
        <a href="/" className="btn btn-primary">Contact us!</a>
      </div>
      <div className="card-footer text-muted">
        <p>@copyright Alpha Props 2019</p>
      </div>
    </div>
  );
}

export default Footer;
