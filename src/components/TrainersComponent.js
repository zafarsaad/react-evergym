import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderPartner({ partner }) {

    if (partner) {
        return (
            <React.Fragment>
                <Media object={true} src={partner.image} alt={partner.name} width="250"/>
                <Media body={true} className="ml-5 mb-4">
                    <Media heading={true}>{partner.name}</Media>
                    {partner.description}
                </Media>
            </React.Fragment>
        );
    } else {
        return (
            <div></div>
        );
    }

}

function About(props) {

    const partners = props.partners.map(partner => {
        return (
            <Media tag="li" key={partner.id}>
                <RenderPartner partner={partner} />
            </Media>
        );
    });

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Trainers</BreadcrumbItem>
                    </Breadcrumb>
                    <h2>Trainers</h2>
                    <hr />
                </div>
            </div>
            <div className="row row-content">
                {/* <div className="col-12">
                    <h3>Trainers</h3>
                </div> */}
                <div className="col">
                    <Media list>
                        {partners}
                    </Media>
                </div>
            </div>
            <div className="row row-content">
                <div className="col-sm-6">
                    <h3>Our Mission</h3>
                    <p>We want to make gyms a place where the best parts of you are found. In order to do that we don't have complex cancellation fees or make you jump through hoops to cancel. We keep moving forward. Those who are serious about getting in shape will stay. They are our family.</p>
                </div>
                <div className="col-sm-6">
                    <Card>
                        <CardHeader className="bg-danger text-white"><h3>Facts At a Glance</h3></CardHeader>
                        <CardBody>
                            <dl className="row">
                                <dt className="col-6">Founded</dt>
                                <dd className="col-6">February 3, 2018</dd>
                                <dt className="col-6">No. of Locations in 2021</dt>
                                <dd className="col-6">14</dd>
                                <dt className="col-6">No. of Reviews in 2019</dt>
                                <dd className="col-6">2055</dd>
                                <dt className="col-6">Employees</dt>
                                <dd className="col-6">142</dd>
                            </dl>
                        </CardBody>
                    </Card>
                </div>
                <div className="col">
                    <Card className="bg-light mt-3">
                        <CardBody>
                            <blockquote className="blockquote">
                                <p className="mb-0">The pain you feel today will be the strength you will feel tomorrow.</p>
                                <footer className="blockquote-footer">Stephen Richards{' '}
                                    <cite title="Source Title"></cite>
                                </footer>
                            </blockquote>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default About;