import React from "react";
import "../Body/Body.css";
import prop1 from "../../../images/property1.jpg";
import prop2 from "../../../images/property2.jpg";
import prop3 from "../../../images/property3.jpg";

function Body() {
  return (
    <div>
      <h1>Featured Properties</h1>
      <div className="body-container">
        <div className="body-box">
          <img src={prop1} alt="Property 1" />
          <p>
            The apartments at Lyons Place are spacious, light and quiet,
            designed with an elegant, understated flair and fine attention to
            detail.
          </p>
        </div>
        <div className="body-box">
          <img src={prop2} alt="Property 2" />
          <p>
            The attention to detail and hand selected materials are inclusive of
            timber, natural stone and impeccable craft elements.
          </p>
        </div>
        <div className="body-box">
          <img src={prop3} alt="Property 3" />
          <p>
            This property was designed by renowned architect Sir Terry Farrell,
            considered to be one of London’s best Central London's scheme.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Body;
