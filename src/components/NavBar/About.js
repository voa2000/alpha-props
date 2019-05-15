import React, { Component } from 'react';
import { Link } from 'react-router-dom';




class About extends Component {
    render() {
        return (
            <div className='container'>
                <Link to='/About' className='navigation_items' />
                <h1>This is our about page</h1>
           </div>
        )
    }
}

export default About;