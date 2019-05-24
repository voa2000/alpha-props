import React from 'react';
import { Link } from 'react-router-dom';
import './Property.css';

function Property(props) {
    return (
        <div className="property-card">
            <div className="property-card-body">
                <Link to={"/" + props.id}>
                    <img src={require(`../common/images/${props.id}.jpg`)} alt={`${props.title}`} />
                </Link>
                <div className="property-card-text">
                    <p>Property ID: {props.id}</p>
                    <p>{props.bedrooms} bedrooms {props.type}</p>
                    <p>Property PRICE: {props.price}</p>
                </div>
            </div>
        </div >
    );
}
export default Property;
