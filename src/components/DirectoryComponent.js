import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

function RenderDirectoryItem({ location }) {
    return (
        <Card>
            <CardImg width='100%' src={location.image} alt={location.name} />
            <CardImgOverlay>
                <CardTitle>{location.name}</CardTitle>
            </CardImgOverlay>
        </Card>
    );
}

function Directory(props) {

    const directory = props.locationsList.map(location => {
        return (
            <div key={location.id} className="col-md-5 m-1">
                <RenderDirectoryItem location={location} />
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

export default Directory;