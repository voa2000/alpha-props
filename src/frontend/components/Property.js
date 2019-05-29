import React from 'react';
import { Link } from 'react-router-dom';
import './Property.css';
import LoadingIndicator from "./LoadingIndicator";

function Property(props) {
  return (
    <div className="property-card">
      <div className="property-card-body">
        <Link to={`/${props.id}`}>{
            props.id ?
                <img src={(`https://www.googleapis.com/storage/v1/b/alpha-properties-app.appspot.com/o/common%2fimages%2f${props.id}.jpg?alt=media`)} alt={`${props.id}`} />
                : <LoadingIndicator/>
          }</Link>
        <div className="property-card-text">
          <h3>{props.address}</h3>
          <h4>£{props.price}</h4>
          <h6>{props.bedrooms} bedroom {props.type} for sale</h6>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Property;
