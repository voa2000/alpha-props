import React from "react";
import { Link } from "react-router-dom";
import "./Body.css";
import prop1 from "../common/images/property1.jpg";
import prop2 from "../common/images/property2.jpg";
import prop3 from "../common/images/property3.jpg";

function Body() {
  return (
    <div className="body-container">
      <h1>Featured Properties</h1>
      <div className="body-properties">
        <div className="body-card">
          <Link to="/lyon">
            <img src={prop1} alt="Property 1" />
          </Link>
          <p>
            The apartments at Lyons Place are spacious, light and quiet,
            designed with an elegant, understated flair and fine attention to
            detail.
          </p>
        </div>
        <div className="body-card">
          <Link to="/terry">
            <img src={prop2} alt="Property 1" />
          </Link>
          <p>
            The attention to detail and hand selected materials are inclusive
            imber, natural stone and impeccable craft elements.
          </p>
        </div>
        <div className="body-card">
          <Link to="/timber">
            <img src={prop3} alt="Property 1" />
          </Link>
          <p>
            This property was designed by renowned architect Sir Terry
            Farrell, considered to be one of London’s best Central London's
            scheme.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Body;
