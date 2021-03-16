import React, { Component } from 'react';

export default class LocationInfo extends Component {
    
    render() {
        if (this.props.location) {
            return (
                <div className="row">Inside LocationInfoComp if Location = True</div>
            );
        } else {
            return (
                <div>Inside LocationInfoComp when Location = False</div>
            )
        }
    }

}