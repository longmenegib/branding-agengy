import React from 'react'
import {Container, Row, Col, Button, Card, CardBody, CardTitle, CardText,} from 'reactstrap'
import illus from '../assets/illustration.png';
import Packages from '../views/services/Packages';

export default function Pricing() {

    const packages = [
        {
          id: 1,
          title: 'Power Launch',
          text: 'KICKOFF Your Brand with a IMPACT',
          price: 4.499,
          link: 'https://form.jotform.com/220388517444156',
          features: [
            '2 Branding Sessions',
            'Website strategy Session',
            'Logo suite',
            'Custom built website',
            'Social media content templates',
            'Instagram audit',
            'nstagram highlight covers',
            'Promotional flyers',
            'Business cards',
            'Thank you cards',
          ]
        },
        {
          id: 2,
          title: 'Fresh Start',
          text: 'Impress YOUR Audience on LAUNCH DAY',
          price: 1.499,
          link: 'https://form.jotform.com/220412811723141',
          features: [
            'Branding strategy session',
            'Logo',
            'Standard Website',
            'Social Media content templates',
            'Business cards',
          ]
        }
      ]

  return (
    <div style={{paddingTop: '20px', width: '100%', paddingBottom: 40, backgroundColor:'rgba(0,0,0,0.1)'}}>
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
                <Packages packages={packages}/>
                {/* <Row className='justify-content-center'>
                <Col xs={10} sm="6" md="4" className="offset-md-1 offset-sm-0" style={{ marginBottom: '20px'}}>
                    <Card className="pricing-card" body  className="pricing-image">
                    <div className="pricing">
                        <div className="pricing-image">
                            <img src={illus} width="100px" height="100px" alt=""/>  
                        </div>
                        <h5 className="text-left pt-3 pb-1" style={{color: '#198bff'}}>Power Launch</h5>
                        <div style={{marginTop: '10px', marginBottom: '10px'}}>
                            <span className="fonttrivia">$550</span>
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
                <Col xs={10} sm="6" md="4" className="offset-md-1 offset-sm-0" style={{ marginBottom: '20px'}}>
                    <Card className="pricing-card" body  className="pricing-image">
                    <div className="pricing">
                        <div className="pricing-image">
                            <img src={illus} width="100px" height="100px" alt=""/>  
                        </div>
                        <h5 className="text-left pt-3 pb-1" style={{color: '#198bff'}}>Facebook Campaings</h5>
                        <div style={{marginTop: '10px', marginBottom: '10px'}}>
                            <span className="fonttrivia">$350</span>
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
                </Row> */}
            </div>
        </Container>
    </div>
  )
}
