import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row">
                    <div className="col-4 col-sm-2">
                        <h5>Quick Links</h5>
                        <ul className="list-unstyled">
                            <li><Link to="/home">Home</Link></li>
                            <li><Link to="/locations">Locations</Link></li>
                            <li><Link to="/trainers">Trainers</Link></li>
                            <li><Link to="/checkin">Check-In</Link></li>
                        </ul>
                    </div>
                    <div className="col-6 col-sm-4 text-center offset-5">
                        <h5>Get in touch!</h5>
                        <a role="button" className="btn btn-link" href="tel:+12065551234"><i className="fa fa-phone" /> 1-206-555-1234</a><br />
                        <a role="button" className="btn btn-link" href="mailto:notreal@notreal.co"><i className="fa fa-envelope-o" /> campsites@nucamp.co</a>
                        <div className="row container-fluid mx-auto">
                            <a className="btn btn-social-icon col-3" href="http://instagram.com/"><i className="fa fa-instagram" /></a>{' '}
                            <a className="btn btn-social-icon col-3" href="http://www.facebook.com/"><i className="fa fa-facebook" /></a>{' '}
                            <a className="btn btn-social-icon col-3" href="http://twitter.com/"><i className="fa fa-twitter" /></a>{' '}
                            <a className="btn btn-social-icon col-3" href="http://youtube.com/"><i className="fa fa-youtube" /></a>
                        </div>
                        {/* </div>
                    <div className="col-sm-4 text-center"> */}
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;