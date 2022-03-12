import React from 'react'
import Header from '../components/Headers/Header'
import {Container, Row, Col, Button} from 'reactstrap'

import './css/home.css'
import illus from '../assets/illustration.png'
import About from '../layout/About'
import Services from '../layout/Services'
import Pricing from '../layout/Pricing'
import BlogLayout from '../layout/BlogLayout'
import ContactLayout from '../layout/ContactLayout'
import Footer from '../components/Footers/Footer'

export default function Home() {
  return (
    <div className="bg-gradient-red" style={{height: '100vh', width: '100vw'}}>
        <Header />
        <Container className="w-100" style={{paddingTop: '100px'}}>
            <Row>
                <Col>
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
                        <Button href="#categories" className="d-flex align-items-center" style={{borderRadius: '50px', backgroundColor: '#198bff', height: '30px', }}>
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
                <Col className="illustration" sm={4} md={6}>
                    <img src={illus} width="100%" height="100%" alt="" className="home-img"/>  
                </Col>
            </Row>
        </Container>
        <About />

        <Services />

        <Pricing />

        <BlogLayout />

        <ContactLayout />

        <Footer />
    
    </div>
  )
}
