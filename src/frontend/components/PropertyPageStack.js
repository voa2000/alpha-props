import React from 'react';
import './PropertyPageStack.css';
import Map from "./Map";

function PropertyPageStack(props) {
  return (
    <div className="propertyPage-container">
      <img src={(`https://www.googleapis.com/storage/v1/b/alpha-properties-app.appspot.com/o/common%2fimages%2f${props.id}.jpg?alt=media`)} alt={`${props.id}`} />
        <h1>Property Details</h1>
      <div className="propertyPage-body">
        <div className="propertyPage-text">
          <h2>{props.address}</h2>
          <h3>{props.bedrooms} bedroom {props.type} for sale - £{props.price}</h3>
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
