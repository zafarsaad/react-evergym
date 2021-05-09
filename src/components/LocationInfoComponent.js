import React, { Component } from "react";
import {
    Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem,
    Button, Modal, ModalBody, ModalHeader,
    Form, FormGroup, FormFeedback, Label, Col, Input
} from 'reactstrap';
import { Link } from 'react-router-dom';

class ReviewForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isRevModalOpen: false,
            location: '',
            rating: '',
            review: '',
            touched: {
                location: false,
                rating: false,
                review: false,
            }
        };
        this.toggleRevModal = this.toggleRevModal.bind(this);
        this.handleRevSubmit = this.handleRevSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    validate(location, rating, review) {

        const errors = {
            location: '',
            rating: '',
            review: ''
        };

        if (this.state.touched.location) {
            if (location !== "Bayonne" && location !== "Jersey City") {
                errors.location = 'Only "Jersey City" or "Bayonne" can be reviewed.';
            }
        }

        if (this.state.touched.rating) {
            if (rating < 1) {
                errors.rating = "Choose a rating between 1 and 5.";
            }
        }

        if (this.state.touched.review) {
            if (review.length < 10) {
                errors.review = 'Review must be longer than 10 characters.';
            } else if (review.length > 100) {
                errors.review = 'Review must be shorter than 100 characters.';
            }
        }

        return errors;
    }

    toggleRevModal() {
        this.setState({
            isRevModalOpen: !this.state.isRevModalOpen
        });
    }

    handleBlur = (field) => () => {
        this.setState({
            touched: { ...this.state.touched, [field]: true }
        });
    }

    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;

        this.setState({
            [name]: value
        });
        console.log(name + ":" + target.value);
    }

    handleRevSubmit(event) {
        event.preventDefault();
        console.log('Current state is: ' + JSON.stringify(this.state));
        console.log('Props of Site: ' + JSON.stringify(this.props.locationChosen));
        this.props.addReview(this.state.location, this.state.rating, this.state.review);
        this.toggleRevModal();
    }

    addReview() {
        console.log('just a test function inside ReviewForm');
    }

    render() {

        const errors = this.validate(this.state.location, this.state.rating, this.state.review);

        return (
            <>
                <Button onClick={this.toggleRevModal}>
                    <i className="fa fa-pencil fa-lg" /> Submit Review</Button>
                <Modal isOpen={this.state.isRevModalOpen} toggle={this.toggleRevModal}>
                    <ModalHeader toggle={this.toggleRevModal}>{this.props.locationChosen}</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleRevSubmit}>
                            <FormGroup row>
                                <Label htmlFor="location" md={2}>Location</Label>
                                <Col md={10}>
                                    <Input type="text" id="location" name="location"
                                        placeholder="Location"
                                        value={this.state.location}
                                        invalid={errors.location}
                                        onBlur={this.handleBlur("location")}
                                        onChange={this.handleInputChange} />
                                    <FormFeedback>{errors.location}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="rating" md={2}>Rating</Label>
                                <Col md={10}>
                                    <Input type="select" id="rating" name="rating"
                                        invalid={errors.rating}
                                        onBlur={this.handleBlur('rating')}
                                        onChange={this.handleInputChange} >
                                        <option>0</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Input>
                                    <FormFeedback>{errors.rating}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="review" md={2}>Review</Label>
                                <Col md={10}>
                                    <Input type="text" id="review" name="review"
                                        placeholder="Review"
                                        value={this.state.review}
                                        invalid={errors.review}
                                        onBlur={this.handleBlur('review')}
                                        onChange={this.handleInputChange} />
                                    <FormFeedback>{errors.review}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{ size: 10, offset: 2 }}>
                                    <Button type="submit" color="primary" disabled={errors.location || errors.rating || errors.review ||
                                        !this.state.touched.location || !this.state.touched.rating || !this.state.touched.review}>
                                        Submit Review
                                    </Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </>
        );
    }
}

function RenderReviews({ comments, addReview, locationId }) {
    if (comments) {
        return (
            <div className="col-md-5 m-1">
                <h4>Reviews</h4>
                {
                    comments.map((c) => (
                        <div key={c.id}>
                            <p>"{c.text}"</p>
                            <p>-- {' '}
                                {c.author},
                                {' - '}
                                {new Intl.DateTimeFormat('en-US', {
                                    year: 'numeric',
                                    month: 'short',
                                    day: '2-digit'
                                }).format(new Date(Date.parse(c.date)))}</p>
                        </div>
                    ))
                }
                <ReviewForm locationChosen={locationId} addReview={addReview} />
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
                            <BreadcrumbItem><Link to="/locations">Locations</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.location.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <h2>{props.location.name}</h2>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <RenderLocation location={props.location} />
                    <RenderReviews
                        comments={props.comments}
                        addReview={props.addReview}
                        locationId={props.location.id}
                    />
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