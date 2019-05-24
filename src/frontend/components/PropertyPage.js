import React from 'react';
import './PropertyPage.css';

export default class PropertPage extends React.Component {
    constructor() {
        super();
        this.state = { propertyList: [] };
    }

    componentDidMount() {
        fetch("/api/properties/")
            .then(res => res.json())
            // .then(propertyList => console.log(propertyList))
            .then(propertyList => {
                let propId = this.props.match.params.propertyId;
                // console.log(tvShowId);
                let property = propertyList.find(prop => prop.id === propId);
                this.setState({ propertyList: property })
            });

    }

    render() {
        return (
            <div className="propertyPage-container">
                <div className="propertyPage-image">
                    <img src={require(`../common/images/${this.props.match.params.propertyId}.jpg`)} alt={`${this.props.match.params.propertyId}`} />
                </div>
                <div className="propertyPage-body">
                    <h1>{this.state.propertyList.address}</h1>
                    <h3>{this.state.propertyList.bedrooms} bedroom {this.state.propertyList.type} - £{this.state.propertyList.price}</h3>
                    <p>{this.state.propertyList.description} </p>
                </div>
            </div>
        );
    }
}

