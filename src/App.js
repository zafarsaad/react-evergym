import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';
import Locations from './components/LocationsComponent';
import { GYMLOCATIONS } from './shared/gymLocations';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      locationsImport: GYMLOCATIONS
    };
  }

  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">EverGym</NavbarBrand>
          </div>
        </Navbar>
        <Locations locationsLink={this.state.locationsImport} />
      </div>
    );
  }
}

export default App;