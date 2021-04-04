import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderDirectoryItem({ location }) {
    return (
        <Card>
            <Link to={`/locations/${location.id}`}>
                <CardImg width='100%' src={location.image} alt={location.name} />
                <CardImgOverlay>
                    <CardTitle>{location.name}</CardTitle>
                </CardImgOverlay>
            </Link>
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
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Locations</BreadcrumbItem>
                    </Breadcrumb>
                </div>
            </div>
            <div className="row">
                {directory}
            </div>
        </div>
    );

}

export default Directory;