import React from "react";

export default function Property({ photo, description }) {
  return (
    <div className="col mt-4">
      <div className="card">
        <img className="d-block card-img-top" src={photo} alt="Property 1" />
        <div className="card-body">
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  );
}
