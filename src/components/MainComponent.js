import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Directory from './DirectoryComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import LocationInfo from './LocationInfoComponent';
import CheckIn from './CheckInComponent';
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
        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    {/* Here we are actually passing state Data therefore, we use the render syntax for Directory */}
                    <Route exact path='/directory' render={() => <Directory
                        locationsList={this.state.locationsImported} />} />
                    <Route path='/checkin' component={CheckIn} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default Main;