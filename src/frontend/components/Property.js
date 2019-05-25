import React from 'react';
import { Link } from 'react-router-dom';

export default function Property(props) {
  return (
    <Link to={`/${props.id}`} key={props.id}>
      <div className="body-card">
        <div className="col">
          <div className="card">
            <img
              className="rounded mx-auto d-block"
              src={require(`../common/images/${props.id}.jpg`)}
              alt={`${props.title}`}
            />
            <div className="card-body">
              <div className="card-text">
                <p>Property TYPE: {props.type}</p>
                <p>Property PRICE: {props.price}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
