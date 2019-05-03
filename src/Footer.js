import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <div class="Footer">
            <div class="card-header">
                <h4>Contact us!</h4>
            </div>
            <div class="card-body">
                <h5 class="card-title">Your perfect home is just a click away!</h5>
                <p class="card-text">To find out more details about Alpha Props:</p>
                <a href="#" class="btn btn-primary">Contact us!</a>
            </div>
            <div class="card-footer text-muted">
               <p>@copyright Alpha Props 2019</p>
            </div>
        </div>
    );
}

export default Footer;