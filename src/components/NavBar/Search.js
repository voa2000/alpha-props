import React, { Component } from 'react';
import { Link } from 'react-router-dom';




class Search extends Component {
    render() {
        return (
            <div className='container'>
                <Link to='/' className='navigation_items' />
                <h1>This is search component</h1>
            </div>
        );
    }
}

export default Search;