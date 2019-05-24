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
                    <h3>{props.address}</h3>
                    <h6>{props.bedrooms} bedrooms {props.type} - £{props.price}</h6>
                    <p>{props.description}</p>
                </div>
            </div>
        </div >
    );
}
export default Property;
