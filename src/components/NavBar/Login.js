import React, { Component } from 'react';
import { Link } from 'react-router-dom';




class Login extends Component {
    render() {
        return (
            <div className='container'>
                <Link to='/Login' className='navigation_items' />
                <h1>This is login page working</h1>
            </div>
        );
    }
}

export default Login;