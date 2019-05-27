import React from 'react';
import './LoadingIndicator.css';

function LoadingIndicator() {
  return (
    <div className="loader-container">
      <div className="loader" />
      <h1>Loading...</h1>
    </div>
  );
}

export default LoadingIndicator;
