import React, { Component } from 'react';
import { Link } from 'react-router-dom';




class Home extends Component {
    render() {
        return (
            <div className='container'>
                <Link to='/' className='navigation_items' />
            </div>
        )
    }
}

export default Home;