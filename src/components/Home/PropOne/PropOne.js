import React from "react";
import { Link } from 'react-router-dom';
import prop1 from '../../../images/property1.jpg';

class PropOne extends React.Component {
    render() {
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
              <Link to="/">Back to home</Link>
            </div>
          </div>
        );
    }
}

export default PropOne;