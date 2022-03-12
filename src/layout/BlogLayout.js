import React from 'react'
import {Container, Row, Col, Button, Card, CardBody, CardTitle, CardText,} from 'reactstrap'
import illus from '../assets/illustration.png';

export default function BlogLayout() {
  return (
    <div>
      <Container fluid className="" style={{paddingTop: '50px'}}>
        <div className="" style={{marginBottom: '20px', textAlign: 'center'}}>
            <p className="pricing-small-title">
              OUR NEWS & TIPS
            </p>
            <p className="pricing-title">
               Latest Blogs And Attactive News
            </p>
            <p>
                Our Internet Marketing plan is built round your business.
                Our team work transparently, giving you control over your 
                marketing activities.
            </p>
        </div>
        <div>
          <Row>
            <Col
            className="offset-md-1 offset-sm-0"
            md="3"
            sm="6"
            xs="12"
            style={{backgroundColor: 'white', marginBottom: '50px'}}
            >
            <div style={{backgroundColor: 'white'}}>
              <div style={{width: '100%', height: '150px'}}>
                <img src={illus} width="100%" height="100%" alt=""/>  
              </div>
              <p style={{fontWeight: '800'}}>
                Starting A Marketing Revolution In Your Company
              </p>
              <p>
                March 26, 2022
              </p>
              <p>
                Marketing plan is built round your business.
                Our team work transparently, giving you control over your 
                marketing activities.
              </p>
              <div style={{color: '#198bff', fontWeight: 'bold', textDecoration: 'underline'}}>
                  Read more
              </div>
            </div>
            </Col>
            <Col
            className="offset-md-1 offset-sm-0"
            md="3"
            sm="6"
            xs="12"
            style={{backgroundColor: 'white', marginBottom: '50px'}}
            >
            <div style={{backgroundColor: 'white'}}>
              <div style={{width: '100%', height: '150px'}}>
                <img src={illus} width="100%" height="100%" alt=""/>  
              </div>
              <p style={{fontWeight: '800'}}>
                Starting A Marketing Revolution In Your Company
              </p>
              <p>
                March 26, 2022
              </p>
              <p>
                Marketing plan is built round your business.
                Our team work transparently, giving you control over your 
                marketing activities.
              </p>
              <div style={{color: '#198bff', fontWeight: 'bold', textDecoration: 'underline'}}>
                  Read more
              </div>
            </div>
            </Col>
            <Col
            className="offset-md-1 offset-sm-0"
            md="3"
            sm="6"
            xs="12"
            style={{backgroundColor: 'white', marginBottom: '50px'}}
            >
            <div style={{backgroundColor: 'white'}}>
              <div style={{width: '100%', height: '150px'}}>
                <img src={illus} width="100%" height="100%" alt=""/>  
              </div>
              <p style={{fontWeight: '800'}}>
                Starting A Marketing Revolution In Your Company
              </p>
              <p>
                March 26, 2022
              </p>
              <p>
                Marketing plan is built round your business.
                Our team work transparently, giving you control over your 
                marketing activities.
              </p>
              <div style={{color: '#198bff', fontWeight: 'bold', textDecoration: 'underline'}}>
                  Read more
              </div>
            </div>
            </Col>
          </Row>
          </div>
      </Container>
    </div>
  )
}
