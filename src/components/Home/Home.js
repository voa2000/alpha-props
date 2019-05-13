import React from 'react';
import Header from './Header/Header';
import Body from './Body/Body';
import Footer from './Footer/Footer.js';


export default class Home extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
}

