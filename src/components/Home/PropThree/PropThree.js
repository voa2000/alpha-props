import React from 'react';
import prop3 from '../../../images/property3.jpg';

class PropThree extends React.Component {
  render() {
    return (
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
    );
  }
}

export default PropThree;
