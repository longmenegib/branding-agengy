import React from 'react';
import {Container, Row, Col, Button, Card, CardBody, CardTitle, CardText,} from 'reactstrap'

export default function AboutService() {
  return <div>
      <Container  className="" style={{paddingTop: '50px'}}>
            <div>
                <div className='d-flex' style={{textAlign: 'center', flexDirection: 'column'}}>
                    <span className="pricing-title" style={{fontSize: '18px'}}>
                        Need to make a lasting impression ?
                    </span>
                    <span className="pricing-small-title" style={{fontSize: '28px', textAlign: 'center'}}>
                        Branding Design
                    </span>
                </div>
                <Col sm={12} md={6} className='offset-md-3' style={{textAlign: 'center', marginTop: '20px', marginBottom: '20px'}}>
                    Our Internet Marketing plan is built round your business.
                    Our team work transparently, giving you control over your 
                    marketing activities.
                </Col>
                
                <div  className="d-flex align-items-center justify-content-center mb-5 mt-5">
                    <Button href="#categories" className="d-flex align-items-center justify-content-center"
                    style={{borderRadius: '10px', border: 'none',backgroundColor: '#ffd600', color: 'black',
                    fontWeight: 'bold', height: '50px', width: '200px',}}>
                        Contact us
                    </Button>
                </div>
            </div>
        </Container>
  </div>;
}
