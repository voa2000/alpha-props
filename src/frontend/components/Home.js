import React from 'react';
import Header from './Header';
import Body from "./Body"
// import Search from './Search';


class Home extends React.Component {
  render() {
    return (
      <>
        <Header />
        {/* <Search /> */}
        <Body />
      </>
    );
  }
}

export default Home;
