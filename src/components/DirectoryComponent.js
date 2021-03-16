import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
// import LocationInfo from './LocationInfoComponent';

export default class Directory extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedLocation: null
        };
    }

    onLocationSelect(location) {
        this.setState({ selectedLocation: location });
    }

    renderSelectedLocation(clickedLocation) {
        if (clickedLocation) {
            return (
                <Card>
                    <CardImg top src={clickedLocation.image} alt={clickedLocation.name} />
                    <CardBody>
                        <CardTitle>{clickedLocation.name}</CardTitle>
                        <CardText>{clickedLocation.description}</CardText>
                        <CardText>Parking: {(clickedLocation.parking) ? 'Available' : 'Unavailable'}</CardText>
                    </CardBody>
                </Card>
            );
        }
        return <div />;
    }

    render() {

        const location = this.props.locationsList.map(location => {
            return (
                <div key={location.id} className="col-md-5 m-1">
                    <Card onClick={() => this.onLocationSelect(location)}>
                        <CardImg width='100%' src={location.image} alt={location.name} />
                        <CardImgOverlay>
                            <CardTitle>{location.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                    <h2>{location.name}</h2>
                    <p>{location.description}</p>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {location}
                </div>
                <div className="row">
                    <div className="col-md-5 m-1">
                        {this.renderSelectedLocation(this.state.selectedLocation)}
                    </div>
                </div>
            </div>
        );
    }

}
