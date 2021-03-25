import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderReviews({ comments }) {
    if (comments) {
        return (
            <div className="col-md-5 m-1">
                <h4>Reviews</h4>
                {
                    comments.map((c) => (
                        <div key={c.id}>
                            <p>-- "{c.text}"</p>
                            <p>
                                {c.author},
                                    {new Intl.DateTimeFormat('en-US', {
                                    year: 'numeric',
                                    month: 'short',
                                    day: '2-digit'
                                }).format(new Date(Date.parse(c.date)))}</p>
                        </div>
                    ))
                }
            </div>
        )
    }
    return (
        <div></div>
    )
}

function RenderLocation({ location }) {
    return (
        <div className="col-md-5 m-1">
            <Card>
                <CardImg top src={location.image} alt={location.name} />
                <CardBody>
                    <CardText>{location.description}</CardText>
                </CardBody>
            </Card>
        </div>
    )
}

function LocationInfo(props) {
    if (props.location) {
        return (
            <div className="container">
                <div className="row">
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/directory">Directory</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.location.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <h2>{props.location.name}</h2>
                    <hr />
                </div>
            </div>
                <div className="row">
                    <RenderLocation location={props.location} />
                    <RenderReviews comments={props.comments} />
                </div>
            </div>
        )
    } else {
        return (
            <div>{props.location}</div>
        )
    }
}

export default LocationInfo;