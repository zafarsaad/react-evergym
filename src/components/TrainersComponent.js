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
                    <p>We present a curated database of the best campsites in the vast woods and backcountry of the World Wide Web Wilderness. We increase access to adventure for the public while promoting safe and respectful use of resources. The expert wilderness trekkers on our staff personally verify each campsite to make sure that they are up to our standards. We also present a platform for campers to share reviews on campsites they have visited with each other.</p>
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
                                <p className="mb-0">I will not follow where the path may lead, but I will go where there is no path, and I will leave a trail.</p>
                                <footer className="blockquote-footer">Muriel Strode,{' '}
                                    <cite title="Source Title">"Wind-Wafted Wild Flowers" -
                                    The Open Court, 1903</cite>
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