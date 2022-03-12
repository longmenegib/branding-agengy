import React from 'react'
import {Container, Row, Col, Button} from 'reactstrap'

import illus from '../assets/illustration.png'

export default function About() {
  return (
    <div className="w-100 m-auto" style={{marginTop: '20px', width: '100%', margin: 'auto'}}>
        <Container className="" style={{paddingTop: '100px'}}>
            <Row>
                <Col>
                    {/* <p className="slidetitle">
                        ABOUT US
                    </p> */}
                    <p className="slidetitle subtitle">
                       WHY US!
                    </p>
                    <p className="slidetext">
                       We, at 24/7 ceo, are all about creating an online
                       experience that transforms users into followers and customers into ambassadors.
                    </p>
                    <p className="slidetext">
                       We do this by you <br/>
                       Listening to you, <br/>
                       Understanding your target audience, <br/>
                       Improving your brand, and increasing your digital footprint <br/>
                    </p>
                    <Button href="#categories" className="d-flex align-items-center justify-content-center mt-5" style={{borderRadius: '50px', 
                    backgroundColor: '#198bff', height: '30px', width: '200px'}}>
                        VIEW YOUR SERVICES
                    </Button>
                </Col>
                <Col className="illustration" sm={4} md={6}>
                    <img src={illus} width="100%" height="100%" alt="" className="home-img"/>  
                </Col>
            </Row>
        </Container>
    </div>
  )
}
