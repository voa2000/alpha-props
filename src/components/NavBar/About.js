import React, { Component } from 'react';
import { Link } from 'react-router-dom';




class About extends Component {
    render() {
        return (
            <div className='container'>
                <h1>This is our about page</h1>
                <Link to='/' className='brand-logo' />
           </div>
        )
    }
}

export default About;