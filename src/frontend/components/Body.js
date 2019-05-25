import React from 'react';
// import { Link } from "react-router-dom";
import './Body.css';
import Property from './Property';
import LoadingIndicator from './LoadingIndicator';

export default class Body extends React.Component {
  constructor() {
    super();
    this.state = { propertyList: [], isLoading: true };
  }

  async componentDidMount() {
    const response = await fetch('/api/properties');
    const data = await response.json();
    await this.setState({ propertyList: data, isLoading: false });
  }

  render() {
    if (this.state.isLoading) {
      return <LoadingIndicator />;
    } if (this.state.propertyList[0] === null) {
      return <h1>Backend is unreachable:(, please try to reload the page</h1>;
    }
    return (
      <div className="body-container">
        <h1>Featured Properties</h1>
        <div className="body-properties">
          {this.state.propertyList.map(property => (
            <Property
              key={property.id}
              id={property.id}
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
