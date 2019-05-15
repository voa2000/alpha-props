import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <div className="Footer">
      <div className="Footer-Header">
        <h1>Contact us!</h1>
      </div> 
      <div className="Footer-Body">
        <h3>Your perfect home is just a click away!</h3>
        <p>To find out more details about Alpha Props: </p>
        <button className="Button">
          <a href="/">Contact us!</a>
        </button>
      </div>
      <div className="Footer-End">
        <p>@Copyright Alpha Props 2019</p>
      </div>
    </div>
  );
}