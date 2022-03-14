import React from 'react'
import { Card, CardBody, CardTitle, CardText, Row, Col, Container } from "reactstrap";
import illus from '../assets/illustration.png'
import website from '../assets/website.png'
import mobile from '../assets/website.png'
import social from '../assets/socialmedia.jpg'
import brand from '../assets/brandstyle.png'

export default function Services() {
  return (
      <>
        <Container >
        <div style={{marginTop: '50px'}}>
            <h1 style={{color: '#198bff'}}>
                SERVICES
            </h1>
            <p>
                some thext is here so you cna do what it takes to make sure 
            </p>
        </div>
        <Row className='d-flex align-items-stretch'>
              <Col sm="6" lg="6" xl="3" className='d-flex'>
                <Card className="mb-4 mb-xl-0 service-card">
                  <CardBody className="card-body">
                    <div>
                      <img src={brand} width="100px" height="80%" alt="" className="home-img"/> 
                    </div>
                    <CardTitle tag="h5" style={{textAlign: 'center', fontWeight: 'bold'}}>
                        Branding Design
                      </CardTitle>
                      <CardText style={{textAlign:'center'}}>
                      Unleash YOUR Brands true potential and grab the stage of success with innovative branding solutions!
                    </CardText>  
                  </CardBody>
                </Card>
              </Col>
              <Col sm="6" lg="6" xl="3" className='d-flex'>
                <Card className="mb-4 mb-xl-0 service-card">
                  <CardBody className="card-body">
                    <div>
                      <img src={website} width="100px" height="80%" alt="" className="home-img"/> 
                    </div>
                    <CardTitle tag="h5" style={{textAlign: 'center', fontWeight: 'bold'}}>
                        Website Design
                  </CardTitle>
                  <CardText style={{textAlign:'center'}}>
                        Make your first impression count. Enhance functionality, improve user experience, innovative marketing tool
                    </CardText> 
                  </CardBody>
                </Card>
              </Col>
              <Col sm="6" lg="6" xl="3" className='d-flex'>
                <Card className="mb-4 mb-xl-0 service-card">
                  <CardBody className="card-body">
                    <div>
                      <img src={mobile} width="100px" height="80%" alt="" className="home-img"/> 
                    </div>
                    <CardTitle tag="h5" style={{textAlign: 'center', fontWeight: 'bold'}}>
                        Custom Logo Design
                      </CardTitle>
                      <CardText style={{textAlign:'center'}}>
                      Work with our team to create a custom logo that leaves a lasting impression.
                    </CardText>  
                  </CardBody>
                </Card>
              </Col>
              <Col sm="6" lg="6" xl="3" className='d-flex'>
                <Card className="mb-4 mb-xl-0 service-card">
                  <CardBody className="card-body">
                    <div>
                      <img src={social} width="100px" height="80%" alt="" className="home-img"/> 
                    </div>
                    <CardTitle tag="h5" style={{textAlign: 'center', fontWeight: 'bold'}}>
                        Social Media Template Design
                      </CardTitle>
                      <CardText style={{textAlign:'center'}}>
                        Effective content will help you build long term relationships with your audience, ultimately 
                        leading to an increase in revenue for your business
                    </CardText>  
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
    </>
  )
}
