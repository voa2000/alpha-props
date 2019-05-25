import React from 'react';
import {Link} from "react-router-dom";
import './PropertyPageStack.css';

function PropertyPageStack(props) {
  return (
      <div className="body-container">
        <div className="body-properties">
      <div className="property-card">
        <div className="property-card-body">
          <Link to={`/${props.id}`}>
            <img src={require(`../common/images/${props.id}.jpg`)} alt={`${props.id}`} />
          </Link>
          <div className="property-card-text">
            <h3>{props.address}</h3>
            <h4>£{props.price}</h4>
            <h6>{props.bedrooms} bedroom {props.type} for sale</h6>
            <p>{props.description}</p>
          </div>
        </div>
      </div>
        </div>
      </div>
  );
}

export default PropertyPageStack;
