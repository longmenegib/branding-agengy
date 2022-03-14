import React from 'react'
import {Container, Row, Col, Button, Form, 
    FormGroup, Input, Label, FormText} from 'reactstrap'

import illus from '../assets/illustration.png'

export default function ContactLayout() {
  return (
    <div style={{marginTop: '0px'}}>
        <Container  className="" style={{paddingTop: '50px'}}>
            <Row>
                <Col className='d-flex'>
                <div className="d-flex" style={{marginBottom: '50px', textAlign: 'center', width: '100%'}}>
                    <iframe width={'100%'} height={'100%'} src='https://form.jotform.com/220387506125149'></iframe>
                    {/* <p className="pricing-small-title">
                        TELL US MORE
                    </p>
                    <p className="pricing-title">
                        Let's discuss your project
                    </p>
                    <Form>
                        <FormGroup row>
                            <Col sm={12}>
                            <Input
                                id="exampleSelect"
                                name="select"
                                type="select"
                                style={{width: '100%', height: '40px', borderColor: 'gray'}}
                            >
                                <option>
                                    Interested In
                                </option>
                            </Input>
                            </Col>
                        </FormGroup>
                        <Row>
                            <Col>
                                <FormGroup row>
                                    <Col sm={12}>
                                    <Input
                                        id="exampleEmail"
                                        name="email"
                                        placeholder="Complete name"
                                        type="text"
                                    />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Col sm={12}>
                                    <Input
                                        id="examplePassword"
                                        name="password"
                                        placeholder="Email-address"
                                        type="email"
                                    />
                                    </Col>
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup row style={{width: '100%', height: '90%'}}>
                                   
                                    <Input
                                        id="exampleText"
                                        name="text"
                                        type="textarea"
                                        style={{width: '100%', height: '100%'}}
                                        placeholder="Your message"
                                    />
                                   
                                </FormGroup>
                            </Col>
                        </Row>
                    </Form>
                    <p style={{textAlign: 'left', fontWeight: 'bold'}}>
                        Whether you are on the East coast or the West coast.
                    </p>
                    <Button href="#categories" className="d-flex justify-content-center align-items-center" style={{borderRadius: '10px', backgroundColor: '#198bff', height: '50px', width: '200px'}}>
                        Request a quote
                    </Button> */}
                </div>
                </Col>
                <Col className="illustration" sm={4} md={6}>
                    <img src={illus} width="100%" height="100%" alt="" className="home-img"/>  
                </Col>
            </Row>
        </Container>
    </div>
  )
}
