import React from 'react';
import prop1 from '../common/images/property1.jpg';

function PropOne() {
  return (
    <div className="col">
      <div className="card">
        <img className="rounded mx-auto d-block" src={prop1} alt="Property 1" />
        <div className="card-body">
          <p className="card-text">
              The apartments at Lyons Place are spacious, light and quiet, designed with an elegant,
              understated flair and fine attention to detail.
          </p>
        </div>
      </div>
    </div>
  );
}

export default PropOne;
