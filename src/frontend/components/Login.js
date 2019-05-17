import React from 'react';
import { Link } from 'react-router-dom';


function Login() {
  return (
    <div className="container">
      <Link to="/Login" className="navigation_items" />
      <h1>This is login page working</h1>
    </div>
  );
}

export default Login;
