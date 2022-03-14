import React, {useState, useEffect, useRef} from 'react'
import { Col, Row, Container, Button } from 'reactstrap';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Footer from '../components/Footers/Footer'
import Header from '../components/Headers/Header'

export default function Contact() {

  const [email, setemail] = useState("");
    const [subject, setsubject] = useState("");
    const [name, setname] = useState("");
    const [message, setmessage] = useState("");

    gsap.registerPlugin(ScrollTrigger);
    const ref = useRef(null);
    const revealRef = useRef([]);
    revealRef.current = [];

    useEffect(() => {
        const element = ref.current;
        // gsap.from(element, {
        //   duration: 0.5,
        //   autoAlpha: 0,
        //   ease: 'none',
        //   delay: 1
        // })

        revealRef.current.forEach((el, index)=>{
          gsap.fromTo(el, {
            // autoAlpha: 0
            opacity: 0,
            y: 60
          },{
            duration: 1,
            // autoAlpha: 1,
            opacity: 1,
            y: 0,
            ease: 'none',
            scrollTrigger:{
              // id: `section_${index+1}`,
              trigger: el,
              start: 'top center+=100',
              toggleActions: 'play none none reverse',
              markers: false,
              // scrub: true
            }
          })
        })

      }, []);

      const addToRefs = (el) => {
        if(el && !revealRef.current.includes(el)){
          revealRef.current.push(el);
        }
      }

  return (
    <div ref={ref}>
      <Header />

      <section id="section_1" className="contact mb-4" ref={addToRefs}>
        <div className="" style={{marginBottom: '20px', textAlign: 'center'}}>
            <p className="pricing-small-title">
              CONTACT US
            </p>
            {/* <p className="pricing-title">
               Write to us regarding any inquiry
            </p> */}
            <p>
                Our Internet Marketing plan is built round your business.
                Our team work transparently, giving you control over your 
                marketing activities.
            </p>
        </div>
          <Container className="container" data-aos="fade-up">
            <Row className="align-items-stretch">
    
              <Col lg={5} className="col-lg-5 mt-2 d-flex">
                <div className="info">
                <div className="address">
                    <i className="bx bx-map"></i>
                    <h4>Location:</h4>
                    <p>7900 Oak Lane suite 400, Miami Lakes, FL 33016</p>
                  </div>
    
                  <div className="email">
                    <i className="bx bx-envelope"></i>
                    <h4>Fax number:</h4>
                    <p>(754) 484-3908</p>
                  </div>
    
                  <div className="phone">
                    <i className="bx bx-phone"></i>
                    <h4>Phone number:</h4>
                    <p>(800) 719-0815</p>
                  </div>
                  
    
                  {/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameBorder="0" style={{border:0, width: "100%", height: "290px"}} allowFullScreen></iframe> */}
                </div>
    
              </Col>
    
              <Col lg={7} className="col-lg-7 mt-5 mt-lg-0 d-flex">
                <form className="php-email-form">
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label htmlFor="name">Your Name</label>
                      <input type="text" name="name" className="form-control" value={name} onChange={(e) => setname(e.target.value)}
                        id="name" />
                      <div className="validate"></div>
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="email">Your Email</label>
                      <input type="email" className="form-control" name="email" value={email} onChange={(e) => setemail(e.target.value)}
                        id="email"/>
                      <div className="validate"></div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input type="text" className="form-control" name="subject" id="subject" value={subject} onChange={(e) => setsubject(e.target.value)}
                      />
                    <div className="validate"></div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea className="form-control" name="message" rows="10" value={message} onChange={(e) => setmessage(e.target.value)}
                      ></textarea>
                    <div className="validate"></div>
                  </div>
                  
                  <div className="text-center"><Button style={{color: 'white'}} color="warning">Send Message</Button></div>
                </form>
              </Col>
    
            </Row>
    
          </Container>
        </section>

        <Footer />
    </div>
  )
}
