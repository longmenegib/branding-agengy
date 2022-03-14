import React, { useState } from 'react'
import {Container, Row, Col, Button, Card, CardBody, CardTitle, CardText,} from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'

import illus from '../../assets/illustration.png';
import ModalRequest from './ModalRequest';

export default function Packages({packages}) {

    const [isOpen, setIsOpen] = useState(false);
    const [url, setUrl] = useState('');

    const openModal = (element)=>{
        setUrl(element.link);
        setIsOpen(true);
    }
  return (
    <div style={{paddingTop: '0px', width: '100%', paddingBottom: 40, backgroundColor:'rgba(0,0,0,0)'}}>
        <Container style={{paddingTop: '50px'}}>
                <Row className='justify-content-center align-items-stretch packagess'>
                    {packages.map((ele)=>{
                        return(
                            <Col key={ele.id} xs={12} sm={12} md={6} lg={4} className="w-100 offset-md-0 offset-sm-0 d-flex package-item" style={{ position:'relative', marginBottom: '20px', flex: 1}}>
                                <Card className="package-card">
                                    <div className='package-pricing'>
                                        <img src={ele.image} width={'100%'} height={'100%'}/>
                                    </div>
                                    <div className='package-detail'>
                                        <h5 className="text-center pt-3 pb-1" style={{color: '#fff', fontWeight: 'bold'}}>
                                            {ele.title}
                                        </h5>
                                        <p className="text-center pt-3 pb-1" style={{color: '#fff', fontSize: '14px'}}>
                                            {ele.text}
                                        </p>
                                        <div className='d-flex justify-content-center'>
                                            <ul className="mb-4" style={{color: '#fff', fontSize: '14px', listStyleType: 'none'}}>
                                                {ele.features.map(res => {
                                                    return(
                                                        <li className='d-flex justify-content-start' >
                                                            <FontAwesomeIcon icon={faArrowRightLong} style={{color: '#ffd600'}} className="testimonial-btn"/>
                                                            {res}
                                                        </li>
                                                    )
                                                })}
                                            </ul>
                                        </div>
                                        <div className="d-flex justify-content-center" style={{ position: 'absolute', bottom: '10px', width: '100%'}}>
                                            <Button onClick={()=> openModal(ele)} className="d-flex align-items-center justify-content-center"
                                            style={{borderRadius: '10px', border: 'none',backgroundColor: '#ffd600', color: 'black',
                                            fontWeight: 'bold', height: '50px', width: '60%'}}>
                                                Shop now iii
                                            </Button>
                                        </div>
                                    </div>
                                </Card>
                            </Col>
                        )
                    })}
                
                </Row>
        </Container>

        <ModalRequest isOpen={isOpen} url={url} setIsOpen={setIsOpen}/>
    </div>
  )
}
