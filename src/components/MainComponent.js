import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Directory from './DirectoryComponent';
import { GYMLOCATIONS } from '../shared/gymLocations';
import LocationInfo from './LocationInfoComponent';

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            locationsImported: GYMLOCATIONS,
            selectedLocation: null
        };
    }

    onLocationSelect(locationId) {
        this.setState({ selectedLocation: locationId });
    }

    render() {
        return (
            <div>
                <Navbar dark color="primary">
                    <div className="container">
                        <NavbarBrand href="/">EverGym</NavbarBrand>
                    </div>
                </Navbar>
                <Directory locationsList={this.state.locationsImported} onClick={locationId => this.onLocationSelect(locationId)} />
                <LocationInfo location={this.state.locationsImported.filter(location => location.id === this.state.selectedLocation)[0]} />
            </div>
        );
    }
}

export default Main;