import React, { Component } from 'react';
import { Link } from 'react-router-dom';




class Search extends Component {
    render() {
        return (
            <div className='container'>
                <h1>This is search component</h1>
                <Link to='/' className='brand-logo' />
            </div>
        );
    }
}

export default Search;