import React, { useRef, useEffect }  from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from '../../components/Headers/Header'
import {Container, Row, Col, Button, Card, CardBody, CardTitle, CardText,} from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'


import '../css/services.css'
import '../css/home.css'
import Packages from './Packages';
import Footer from '../../components/Footers/Footer';
import Testimonial from '../../layout/TestimonialLayout';
import AboutService from './AboutService';

export default function BrandingDesign() {

  const packages = [
    {
      id: 1,
      title: 'Power Launch',
      text: 'KICKOFF Your Brand with a IMPACT',
      price: 4.499,
      link: 'https://form.jotform.com/220388517444156',
      features: [
        '2 Branding Sessions',
        'Website strategy Session',
        'Logo suite',
        'Custom built website',
        'Social media content templates',
        'Instagram audit',
        'nstagram highlight covers',
        'Promotional flyers',
        'Business cards',
        'Thank you cards',
      ],
      image: '/images/logo.jpg'
    },
    {
      id: 2,
      title: 'Fresh Start',
      text: 'Impress YOUR Audience on LAUNCH DAY',
      price: 1.499,
      link: 'https://form.jotform.com/220412811723141',
      features: [
        'Branding strategy session',
        'Logo',
        'Standard Website',
        'Social Media content templates',
        'Business cards',
      ],
      image: '/images/logo.jpg'
    }
  ]

  gsap.registerPlugin(ScrollTrigger);
    const ref = useRef(null);
    const revealRef = useRef([]);
    revealRef.current = [];

    useEffect(() => {
        const element = ref.current;
        // gsap.from(element, {
        //   duration: 1,
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
            duration: 0.5,
            // autoAlpha: 1,
            opacity: 1,
            y: 0,
            ease: 'none',
            scrollTrigger:{
              // id: `section_${index+1}`,
              trigger: el,
              start: 'top center+=120',
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
  <div>
    <div style={{}} className='services-header'>
      <Header color='white'/>
        <p className="pricing-small-title" style={{fontSize: '28px', textAlign: 'center'}}>
          Branding Design
        </p>
    </div>
    
    <section style={{}} className='services-body' ref={addToRefs}>
      <div className="" style={{marginBottom: '20px', textAlign: 'center'}}>
        
        <p className="pricing-title">
            Complete Branding Package
        </p>
        <p>
            Unleash YOUR Brands true potential and grab the stage of success with innovative branding solutions!
        </p>
      </div>
    </section>

    <section ref={addToRefs}>
      <Packages packages={packages}/>
    </section>

    <section ref={addToRefs}>
      <Testimonial />
    </section>

    <section ref={addToRefs}>
      <AboutService />
    </section>

    <Footer />
  </div>
  )
}
