import React from 'react';
import './Body.css';
import prop1 from '../images/property1.jpg';
import prop2 from '../images/property2.jpg';
import prop3 from '../images/property3.jpg';

function Body() {
  return (
    <div>
      <h1>Featured Properties</h1>
      <div className="container">
        <div className="row">
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
          <div className="col">
            <div className="card">
              <img className="rounded mx-auto d-block" src={prop3} alt="Property 3" />
              <div className="card-body">
                <p className="card-text">
                    This property was designed by renowned architect Sir Terry Farrell,
                    considered to be one of London’s best Central London's scheme.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
