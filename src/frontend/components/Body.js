import React from 'react';
import './Body.css';
import Property from './Property';
import LoadingIndicator from './LoadingIndicator';

class Body extends React.Component {
  constructor() {
    super();
    this.state = { propertyList: [], isLoading: true };
  }

  async componentDidMount() {
    const response = await fetch('/api/properties');
    const data = await response.json();
    await this.setState({ propertyList: data, isLoading: false });
    this.setState({originalProperties: this.state.propertyList.length});
  }

  searchProperty(input){
    return this.state.propertyList.filter(home => (
                home.id.includes(input) ||
                home.type.includes(input) ||
                home.address.includes(input) ||
                home.description.includes(input)
              )
       )
  }
  inputHandler(e) {
    this.setState({originalProperties: this.state.propertyList.length});
    if (e.target.value.length > 3){
      let res = this.searchProperty(e.target.value);
    if (res.length > 0){
      this.setState({propertyList: res});
    }
    } else {
      this.componentDidMount();

      if (this.state.originalProperties !== this.state.propertyList.length){
       this.componentDidMount();
        // console.log(this.state.propertyList);
      }
    } 
}

  render() {
    if (this.state.isLoading) {
      return <LoadingIndicator />;
    } if (this.state.propertyList[0] === null) {
      return <h1>Backend is unreachable:(, please try to reload the page</h1>;
    }
    return (
      <div className="body-container">
        <input type="text" placeholder="Search properties" onChange={(e) => this.inputHandler(e)} />
      {/* <label>Property</label> */}
        <h1>Featured Properties</h1>
        <div className="body-properties">
          {this.state.propertyList.map(property => (
            <Property
              key={property.id}
              id={property.id}
              address={property.address}
              type={property.type}
              bedrooms={property.bedrooms}
              price={property.price}
            />
          ))
          }
        </div>
      </div>
    );
  }
}

export default Body;
