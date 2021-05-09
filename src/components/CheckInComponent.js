import React from 'react';
import {
    Breadcrumb, BreadcrumbItem,
    Button, Form, FormGroup, Label, Input, Col, FormFeedback } from 'reactstrap';
import { Link } from 'react-router-dom';

// I converted this from a functional component to Class component
// Main reason was to go from stateless comp to stateful
// Future plans - read on new React method to useState() in React w/Functional Comps

class CheckIn extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            location: '',
            date: '',
            trainerUsed: false,
            touched: {
                name: false,
                location: false,
                date: false,
            }
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    validate(name, location, date) {

        const errors = {
            name: '',
            location: '',
            date: ''
        };

        if (this.state.touched.name) {
            if (name.length < 2) {
                errors.name = 'Name must be longer than 2 characters.';
            } else if (name.length > 15) {
                errors.name = 'Name must be shorter than 15 characters.';
            }
        }

        if (this.state.touched.location) {
            if (location.length < 2) {
                errors.location = 'Location must be longer than 2 characters.';
            } else if (location.length > 15) {
                errors.location = 'Location must be shorter than 15 characters.';
            }
        }

        if (this.state.touched.date) {
            if (date.length < 2) {
                errors.date = 'Date must be longer than 2 characters.';
            } else if (date.length > 15) {
                errors.date = 'Date must be shorter than 15 characters.';
            }
        }

        return errors;

    }

    handleBlur = (field) => () => {
        this.setState({
            touched: {...this.state.touched, [field]: true}
        });
    }

    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;

        this.setState({
            [name]: value
        });
        console.log(name + ":" +target.value);
    }

    handleSubmit(event) {
        console.log("Current state is: " + JSON.stringify(this.state));
        alert("Current State is: " + JSON.stringify(this.state));
        // todo - test without preventDefault() on form submit to see UI issue/problem
        event.preventDefault();
    }

    render() {

        const errors = this.validate(this.state.name, this.state.location, this.state.date);

        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                            <BreadcrumbItem active>Check-In</BreadcrumbItem>
                        </Breadcrumb>
                        {/* <h2>Check-In</h2>
                        <hr /> */}
                    </div>
                </div>

                {/* todo - remove this code formerly there */}
                {/* <div className="row row-content align-items-center">
                    <div className="col-sm-4">
                        <h5>Our Address</h5>
                        <address>
                            1 Nucamp Way<br />
                        Seattle, WA 98001<br />
                        U.S.A.
                    </address>
                    </div>
                    <div className="col">
                        <a role="button" className="btn btn-link" href="tel:+12065551234"><i className="fa fa-phone" /> 1-206-555-1234</a><br />
                        <a role="button" className="btn btn-link" href="mailto:fakeemail@fakeemail.co"><i className="fa fa-envelope-o" /> campsites@nucamp.co</a>
                    </div>
                </div> */}

                <div className="row row-content">
                    <div className="col-12">
                        <h2>Check-In</h2>
                        <hr />
                    </div>
                    <div className="col-md-10">
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup row>
                                <Label htmlFor="name" md={2}>Name</Label>
                                <Col md={10}>
                                    <Input type="text" id="name" name="name"
                                        placeholder="Name"
                                        value={this.state.name}
                                        invalid={errors.name}
                                        onBlur={this.handleBlur('name')}
                                        onChange={this.handleInputChange} />
                                        <FormFeedback>{errors.name}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="location" md={2}>Location</Label>
                                <Col md={10}>
                                    <Input type="text" id="location" name="location"
                                        placeholder="Location"
                                        value={this.state.location}
                                        invalid={errors.location}
                                        onBlur={this.handleBlur('location')}
                                        onChange={this.handleInputChange} />
                                    <FormFeedback>{errors.location}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="date" md={2}>Date</Label>
                                <Col md={10}>
                                    <Input type="date" id="date" name="date"
                                        placeholder="Date"
                                        value={this.state.date}
                                        invalid={errors.date}
                                        onBlur={this.handleBlur('date')}
                                        onChange={this.handleInputChange} />
                                        <FormFeedback>{errors.date}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{ size: 4, offset: 2 }}>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox"
                                                name="trainerUsed"
                                                checked={this.state.trainerUsed}
                                                onChange={this.handleInputChange} /> {' '}
                                            <strong>Trainer-led Session?</strong>
                                        </Label>
                                    </FormGroup>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{ size: 10, offset: 2 }}>
                                    <Button type="submit" color="primary" disabled={errors.location || errors.name || errors.date || 
                                        !this.state.touched.location || !this.state.touched.name || !this.state.touched.date }>
                                        Check-in!
                                    </Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

export default CheckIn;