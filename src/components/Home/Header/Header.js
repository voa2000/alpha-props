import React from 'react';
import './Header.css';
import HeaderImage from '../../../images/header.png';

export default function Header() {
  return (
    <div className="outerbox">
    <div class="headerImage">

<img src={HeaderImage} alt="" />

<div className= 'overlay'>ALPHA PROPERTIES<br />Your first stop for a Prime Propery in Central London</div>

</div>
    </div>

  );
}
