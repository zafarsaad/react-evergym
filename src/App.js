import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';
import Directory from './components/DirectoryComponent';
import { GYMLOCATIONS } from './shared/gymLocations';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      locationsImported: GYMLOCATIONS
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
        <Directory locationsList={this.state.locationsImported} />
      </div>
    );
  }
}

export default App;