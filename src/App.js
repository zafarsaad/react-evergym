import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';
import Locations from './components/LocationsComponent';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Navbar dark color="primary">
                <div className="container">
                    <NavbarBrand href="/">EverGym</NavbarBrand>
                </div>
                </Navbar>
                <Locations />
            </div>
        );
    }
}

export default App;