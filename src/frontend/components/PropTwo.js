import React from 'react';
import prop2 from '../common/images/property2.jpg';

function PropTwo() {
  return (
    <div className="col">
      <div className="card">
        <img className="rounded mx-auto d-block" src={prop2} alt="Property 2" />
        <div className="card-body">
          <p className="card-text">
              The attention to detail and hand selected materials are
              inclusive of timber, natural stone and impeccable craft elements.
          </p>
        </div>
      </div>
    </div>
  );
}

export default PropTwo;
