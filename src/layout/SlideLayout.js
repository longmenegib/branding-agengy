import React from 'react';
import {Container, Row, Col, Button} from 'reactstrap'
import illus from '../assets/slide.jpg'

export default function SlideLayout() {
  return (
    <div className='slideLayout'>
        <Container className="w-100 slideContainer" style={{paddingTop: '80px'}}>
            <Row>
                <Col sm={12} md={7} lg={6}>
                    <span className="slidetitle">
                        CREATE <span style={{ color: '#ffd600'}}>YOUR</span> <span style={{ color: '#198bff'}}>BRAND</span>
                    </span>
                    <p className="slidetext">
                        We specialize in creating personalized designs for all kinds of businesses.
                        We are ready to bring <span style={{ color: '#ffd600'}}>YOUR</span> <span style={{ color: '#198bff'}}>BRAND </span> 
                        to life. We don't just <span style={{ color: '#ffd600'}}>CREATE</span> <span style={{ color: '#198bff'}}>DESIGNS</span>. We
                        <span style={{ color: '#ffd600'}}> BUILD</span> <span style={{ color: '#198bff'}}>DREAMS. LET'S BUILD YOURS!</span>
                    </p>
                    <Row style={{width: '300px', alignItems: 'center'}}>
                        <Col>
                        <Button href="#brandpackage" className="d-flex align-items-center" style={{borderRadius: '50px', backgroundColor: '#198bff', height: '30px', }}>
                            Get Started
                        </Button>
                        </Col>
                        <Col>
                        <div style={{color: '#198bff', fontWeight: 'bold'}}>
                            Learn more
                        </div>
                        </Col>
                    
                    </Row>
                </Col>
                <Col className="illustration" sm={4} md={5} lg={6}>
                    <img src={illus} width="100%" height="100%" alt="" className="home-img"/>  
                </Col>
            </Row>
        </Container>
    </div>
  )
}
