import { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class LocationInfo extends Component {
    
    constructor(props) {
        super(props);
    }

    renderReviews(reviews) {
        if (reviews) {
            return (
                <div className="col-md-5 m-1">
                    <h4>Reviews</h4>
                    {
                        reviews.map((c) => (
                            <div key={c.id}>
                                <p>{c.text}</p>
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

    renderLocation(location) {
        return (
            <div className="col-md-5 m-1">
                <Card>
                    <CardImg top src={location.image} alt={location.name} />
                    <CardBody>
                        <CardTitle>{location.name}</CardTitle>
                        <CardText>{location.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        )
    }

    render() {
        if (this.props.location) {
            return (
                <div className="container">
                    <div className="row">
                        {this.renderLocation(this.props.location)}
                        {this.renderReviews(this.props.location.reviews)}
                    </div>
                </div>
            )
        } else {
            return (
                <div>{this.props.location}</div>
            )
        }
    }
}

export default LocationInfo;