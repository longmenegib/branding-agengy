import React from 'react'
import {Container, Row, Col, Button, Card, CardBody, CardTitle, CardText,} from 'reactstrap'
import illus from '../assets/illustration.png';

export default function Pricing() {
  return (
    <div style={{marginTop: '20px', width: '100%', paddingBottom: 40}}>
        <Container className="" style={{paddingTop: '100px'}}>
            <div className="" style={{marginBottom: '50px', textAlign: 'center'}}>
                <p className="pricing-small-title">
                    PRICES AND PLANS
                </p>
                <p className="pricing-title">
                    A digital marketing plan for business
                </p>
                <p>
                    Our Internet marketing plan is built round your business.
                    Our team work transparently, giving you control over your 
                    marketing activities.
                </p>
            </div>
            <div>
                <Row>
                <Col sm="6" md="4" className="offset-md-1 offset-sm-0">
                    <Card className="pricing-card" body  className="pricing-image">
                    <div className="pricing">
                        <div className="pricing-image">
                            <img src={illus} width="100px" height="100px" alt=""/>  
                        </div>
                        <h5 className="text-left pt-3 pb-1" style={{color: '#198bff'}}>Google Ad Campaings</h5>
                        <div style={{marginTop: '10px', marginBottom: '10px'}}>
                            <span className="fonttrivia">$550</span>/Month
                        </div>
                        <ul className="mb-4">
                            <li>Site SEO</li>
                            <li>Site Optimisation</li>
                            <li>Monthly Request</li>
                            <li>Keywords Research</li>
                        </ul>

                        <Button href="#categories" className="d-flex align-items-center justify-content-center"
                         style={{borderRadius: '10px', border: 'none',backgroundColor: '#ffd600', color: 'black', fontWeight: 'bold', height: '50px', width: '80%'}}>
                            Select Now
                        </Button>
                    </div>
                       
                    </Card>
                </Col>
                <Col  sm="6" md="4" className="offset-md-1 offset-sm-0">
                    <Card className="pricing-card" body  className="pricing-image">
                    <div className="pricing">
                        <div className="pricing-image">
                            <img src={illus} width="100px" height="100px" alt=""/>  
                        </div>
                        <h5 className="text-left pt-3 pb-1" style={{color: '#198bff'}}>Facebook Campaings</h5>
                        <div style={{marginTop: '10px', marginBottom: '10px'}}>
                            <span className="fonttrivia">$350</span>/Month
                        </div>
                        <ul className="mb-4">
                            <li>Page Management</li>
                            <li>Visual Content</li>
                            <li>Weekly Report</li>
                            <li>Custom Tags</li>
                        </ul>

                        <Button href="#categories" className="d-flex align-items-center justify-content-center"
                         style={{borderRadius: '10px', border: 'none',backgroundColor: '#ffd600', color: 'black',
                          fontWeight: 'bold', height: '50px', width: '80%',}}>
                            Select Now
                        </Button>
                    </div>
                       
                    </Card>
                </Col>
                </Row>
            </div>
        </Container>
    </div>
  )
}
