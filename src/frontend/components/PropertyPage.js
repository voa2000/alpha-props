import React from 'react';

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
            
            <div className="body-card">
                    <div className="card">
                        <img src={require(`../common/images/${this.props.match.params.propertyId}.jpg`)} alt={`${this.props.match.params.propertyId}`} />
                        <div className="card-body">
                            <p className="card-text">
                                <p>Property ID: {this.state.propertyList.id}</p>
                                <p>Property TYPE: {this.state.propertyList.type}</p>
                                <p>Property PRICE: {this.state.propertyList.price}</p>
                                <p>DESCRIPTION: {this.state.propertyList.description} </p>
                            </p>
                        </div>
                    </div>
                </div>
        );
    }

}

