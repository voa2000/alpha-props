import React from 'react';
import './PropertyPageStack.css';
import Map from "./Map";

function PropertyPageStack(props) {
  return (
    <div className="propertyPage-container">
      <img src={require(`../common/images/${props.id}.jpg`)} alt={`${props.id}`} />
      <div className="propertyPage-body">
        <div className="propertyPage-text">
          <h3>{props.address}</h3>
          <h4>£{props.price}</h4>
          <h6>{props.bedrooms} bedroom {props.type} for sale</h6>
          <p>{props.description}</p>
        </div>
        <div className="propertyPage-Map">
          <Map lat={props.lat} lng={props.lng} title={props.title} />
        </div>
      </div>
    </div>
  );
}

export default PropertyPageStack;
