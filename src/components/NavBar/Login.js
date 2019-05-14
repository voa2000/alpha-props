import React, { Component } from 'react';
import { Link } from 'react-router-dom';




class Login extends Component {
    render() {
        return (
            <div className='container'>
                <h1>This is login page working</h1>
                <Link to='/' className='brand-logo' />
            </div>
        );
    }
}

export default Login;