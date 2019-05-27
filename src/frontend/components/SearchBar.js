import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {
  componentDidMount() {
    (function () {
      const cx = '011063999714675990338:_vzq_m6zmzg';
      const gcse = document.createElement('script');
      gcse.type = 'text/javascript';
      gcse.async = true;
      gcse.src = `https://cse.google.com/cse.js?cx=${cx}`;
      const s = document.getElementsByTagName('script')[0];
      s.parentNode.insertBefore(gcse, s);
    }());
  }

  render() {
    return (
      <div
        className="gcse-search"
        data-resultsUrl="http://www.example.com"
        data-newWindow="true"
        data-queryParameterName="search"
      />
    );
  }
}

export default SearchBar;
