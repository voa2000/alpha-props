import React from 'react';
import { Redirect } from 'react-router-dom';
import LoadingIndicator from './LoadingIndicator';
import PropertyPageStack from './PropertyPageStack';

class PropertyPage extends React.Component {
  constructor() {
    super();
    this.state = { propertyList: [], isLoading: true };
  }

  async componentDidMount() {
    const property = this.props.match.params.propertyId;
    const response = await fetch(`/api/properties/${property}`);
    const data = await response.json();
    await this.setState({ propertyList: data, isLoading: false });
  }

  render() {
    if (this.state.isLoading) {
      return <LoadingIndicator />;
    } if (this.state.propertyList[0] === null) {
      return <Redirect to="/NotFound" />;
    }
    return (
      <div>
        {this.state.propertyList.map(property => (
          <PropertyPageStack
            key={property.id}
            id={property.id}
            type={property.type}
            price={property.price}
            bedrooms={property.bedrooms}
            description={property.description}
          />
        ))}
      </div>
    );
  }
}

export default PropertyPage;
