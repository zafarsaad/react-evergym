import React, { Component } from 'react';

export default class Locations extends Component {

    constructor(props) {
        super(props);
        this.state = {
            locations: [
                {
                    id: 0,
                    name: 'Jersey City',
                    image: 'assets/images/react-lake.jpg',
                    parking: false,
                    description: 'Our very first location, and our most popular!'
                },
                {
                    id: 1,
                    name: 'Princeton',
                    image: 'assets/images/chrome-river.jpg',
                    parking: true,
                    description: 'Located right next to Princeton University!'
                },
                {
                    id: 2,
                    name: 'Edison',
                    image: 'assets/images/breadcrumb-trail.jpg',
                    parking: false,
                    description: 'Not just known for where the famous inventor!'
                },
                {
                    id: 3,
                    name: 'New York City',
                    image: 'assets/images/redux-woods.jpg',
                    parking: true,
                    description: 'The first location in New York!'
                },
            ]
        };
    }

    render() {
        const location = this.state.locations.map(location => {
            return (
                <div key={location.id} className="col">
                    <img src={location.image} alt={location.name} />
                    <h2>{location.name}</h2>
                    <p>{location.description}</p>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {location}
                </div>
            </div>
        );
    }

}
