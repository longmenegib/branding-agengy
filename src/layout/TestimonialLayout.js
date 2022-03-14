import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteRightAlt, faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import React, {useState} from 'react'
import {Container, Row, Col, Button} from 'reactstrap'

import illus from '../assets/illustration.png'
import shayna from '../assets/Shayna.jpg'
import dorsey from '../assets/Dorsey.jpg'
import vonne from '../assets/Vonne.jpg'
import king from '../assets/queen.jpg'

export default function Testimonial() {

  const testimonials = [
    {
      id: 0,
      author: 'Shayna Lapri',
      authortitle: 'CEO & Founder at Queenpin Hai Cartel',
      text: "Lem and his team helped me with my business cards and flyers for my company. Communication was on point, they saw my vision and executed the assignment. Definitely will be working with again in the future!! Thanks",
      picture: shayna
    },
    {
      id:1,
      author: 'LaToya Dorsey',
      authortitle: 'Business manager',
      text: 'Vic and Lem helped me tremendously with their advice and tips on how to brand myself and my business. I highly recommend them to assist you with your business needs. They are awesome, knowledgeable, and very profesional',
      picture: dorsey
    },
    {
      id:2,
      author: 'Nichelle Vonne',
      authortitle: 'Founder at Compere consulting',
      text: 'I had a branding session with Vic Keys and learned so much about business branding and how important it is for the frowth of my business. It was a very pleasure to discuss with him.',
      picture: vonne
    },
    {
      id:3,
      author: 'Sakinah KIng',
      authortitle: 'Fashion Designer',
      text: "The branding and marketing GOD himself! Can't wait to work with them again, 1 000 000 stars! If you are confused or need a little guidance with your business, you are in the right place",
      picture: king
    }
  ]
  const [selected, setSelected] = useState(testimonials[0])

  const backward = ()=>{
    if(selected.id === 0){
      setSelected(testimonials[testimonials.length-1])
    }else{
      setSelected(testimonials[selected.id-1])
    }
  }
  const frontward = ()=>{
    if(selected.id === testimonials.length-1){
      setSelected(testimonials[0])
    }else{
      setSelected(testimonials[selected.id+1])
    }
  }

  return (
    <div style={{backgroundColor: '#ffd600', marginTop: '0px', paddingBottom:'10px'}}>
        <Container className="" style={{paddingTop: '100px'}}>
            <Row>
                <Col>
                    <div className="testimonial-head">
                          TESTIMONIAL
                    </div>
                    <div className="testimonial-title">
                       {/* Analytic solutions for CRM system */}
                       Listen to what our clients says about us
                    </div>
                    <p className="testimonial-image">
                      <img src={selected.picture} width="100px" height="100%" alt="" className="testimonial-image-image" />  
                    </p>
                    <p className="testimonial-text">
                       {selected.text}
                    </p>
                    <span>
                      <FontAwesomeIcon icon={faQuoteRightAlt} className="testimonial-quote"/>
                    </span>
                    <div className="testimonial-author">
                       {selected.author}
                    </div>
                    <div className="testimonial-authortitle">
                       {selected.authortitle}
                    </div>
                    <div className='d-flex mt-3' style={{width: '65px', justifyContent: 'space-between'}}>
                      <FontAwesomeIcon icon={faArrowLeft} className="testimonial-btn" onClick={backward}/>
                      <FontAwesomeIcon icon={faArrowRight} className="testimonial-btn" onClick={frontward}/>
                    </div>
                </Col>
                {/* <Col className="illustration" sm={4} md={6}>
                    <img src={illus} width="100%" height="100%" alt="" className="home-img"/>  
                </Col> */}
            </Row>
        </Container>
    </div>
  )
}
