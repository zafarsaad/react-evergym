import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Directory from './DirectoryComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import LocationInfo from './LocationInfoComponent';
import CheckIn from './CheckInComponent';
import Trainers from './TrainersComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import { GYMLOCATIONS } from '../shared/gymLocations';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { PARTNERS } from '../shared/partners';

class Main extends Component {


    constructor(props) {
        super(props);
        this.state = {
            locationsImported: GYMLOCATIONS,
            comments: COMMENTS,
            partners: PARTNERS,
            promotions: PROMOTIONS
        };
        this.addReivew = this.addReivew.bind(this);
    }

    addReivew(location, rating, review) {
        console.log('Outhere in the Main Comp!');
        const reviewShell = {
            campsiteId: 1,
            author: location,
            rating: rating,
            text: review
        };
        reviewShell.id = this.state.comments.length;
        reviewShell.date = new Date().toISOString();
        this.setState({
            comments: this.state.comments.concat(reviewShell)
        });
    }   

    render() {

        // we are using a feature of arrow function (the nature of ".this" in arrow functions)
        // Arrow functions inherit the "THIS" of their parent scope
        // Otherwise a normal function declaration "this" would have nbeen undefined for this.state
        const HomePage = () => {
            return (
                <Home
                    location={this.state.locationsImported.filter(location => location.featured)[0]}
                    promotion={this.state.promotions.filter(promotion => promotion.featured)[0]}
                    partner={this.state.partners.filter(partner => partner.featured)[0]}
                />
            );
        }

        const LocationWithId = ({ match }) => {
            return (
                <LocationInfo
                    location={this.state.locationsImported.filter(location => location.id ===
                        +match.params.locationId)[0]}
                    comments={this.state.comments.filter(comment => comment.campsiteId ===
                        +match.params.locationId)} 
                    addReview={this.addReivew}/>
            )
        }

        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    {/* Here we are actually passing state Data therefore, we use the render syntax for Directory */}
                    <Route exact path='/locations' render={() => <Directory
                        locationsList={this.state.locationsImported} />} />
                    <Route path='/locations/:locationId' component={LocationWithId} />
                    <Route path='/trainers' render={() => <Trainers partners={this.state.partners} />} />
                    <Route path='/checkin' component={CheckIn} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default Main;