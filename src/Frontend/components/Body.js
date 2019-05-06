import React from "react";
import "../css/Body.css";
//Components
import Property from "./Property";
//Photos
import prop1 from "../images/properties/property1.jpg";
import prop2 from "../images/properties/property2.jpg";
import prop3 from "../images/properties/property3.jpg";

function Body() {
  return (
    <div>
      <h1 className={"mt-4"}>Featured Properties</h1>
      <div className="container">
        <div className="row">
          <Property
            photo={prop1}
            description={
              "The apartments at Lyons Place are spacious, light and quiet,designed with an elegant, understated flair and fine attention to detail."
            }
          />
          <Property
            photo={prop2}
            description={
              "The apartments at Lyons Place are spacious, light and quiet,designed with an elegant, understated flair and fine attention to detail."
            }
          />
          <Property
            photo={prop3}
            description={
              "The apartments at Lyons Place are spacious, light and quiet,designed with an elegant, understated flair and fine attention to detail."
            }
          />
        </div>
        <div className="row">
          <Property
            photo={prop1}
            description={
              "The apartments at Lyons Place are spacious, light and quiet,designed with an elegant, understated flair and fine attention to detail."
            }
          />
          <Property
            photo={prop2}
            description={
              "The apartments at Lyons Place are spacious, light and quiet,designed with an elegant, understated flair and fine attention to detail."
            }
          />
          <Property
            photo={prop3}
            description={
              "The apartments at Lyons Place are spacious, light and quiet,designed with an elegant, understated flair and fine attention to detail."
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Body;
