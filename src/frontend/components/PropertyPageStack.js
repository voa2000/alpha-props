import React from 'react';

function PropertyPageStack(props) {
  return (
    <div className="body-card">
      <div className="card">
        <img src={require(`../common/images/${props.id}.jpg`)} alt={`${props.id}`} />
        <div className="card-body">
          <div className="card-text">
            <p>Property ID: {props.id}</p>
            <p>Property TYPE: {props.type}</p>
            <p>Property PRICE: {props.price}</p>
            <p>DESCRIPTION: {props.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PropertyPageStack;
