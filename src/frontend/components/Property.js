import React from 'react';
import { Link } from 'react-router-dom';

export default function Property(props) {
    return (
        <Link to={"/" + props.id}>
            <div className="body-card">
                <div className="col">
                    <div className="card">
                        <img className="rounded mx-auto d-block" src={require(`../common/images/${props.id}.jpg`)}  alt={`${props.title}`} />
                        <div className="card-body">
                            <p className="card-text">
                                <p>Property ID: {props.id}</p>
                                <p>{props.bedrooms} bedrooms {props.type}</p>
                                <p>Property PRICE: {props.price}</p>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

