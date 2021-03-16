import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

export default class Directory extends Component {

    renderSelectedLocation(clickedLocation) {
        if (clickedLocation) {
            return (
                <div className="col md-5 m-1">
                    <Card>
                        <CardImg top src={clickedLocation.image} alt={clickedLocation.name} />
                        <CardBody>
                            <CardTitle>{clickedLocation.name}</CardTitle>
                            <CardText>{clickedLocation.description}</CardText>
                            <CardText>Parking: {(clickedLocation.parking) ? 'Available' : 'Unavailable'}</CardText>
                        </CardBody>
                    </Card>
                </div>
            );
        }
        return <div />;
    }

    render() {

        const directory = this.props.locationsList.map(location => {
            return (
                <div key={location.id} className="col-md-5 m-1">
                    <Card onClick={() => this.props.onClick(location.id)}>
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
                    {directory}
                </div>
            </div>
        );
    }

}