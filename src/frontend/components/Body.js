import React from "react";
// import { Link } from "react-router-dom";
import "./Body.css";
import Property from "./Property";

export default class Body extends React.Component {
  constructor() {
      super();
      this.state = { propertyList: []};
  }
  
  componentDidMount() {
      fetch("/api/properties/")
        .then(res => res.json())
        // .then(propertyList => console.log(propertyList))
        .then(propertyList => this.setState({propertyList}))
        // .then(propertyList => this.setState({propertyList :[{price: 'free'}]}))
        .catch(e => console.log(e))
     
  }
  render() {
    return (
        <div className="body-container">
          <h1>Featured Properties</h1>
          <div className="body-properties">
                {this.state.propertyList.map( property => (
                  <Property
                    key={property.id}
                    id= {property.id}
                    type={property.type}
                    price={property.price}
                    />
                ))
                }         
          </div>
        </div>
      );
  }
    
}

