import React, { useRef, useEffect }  from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from '../../components/Headers/Header'

import '../css/services.css'
import '../css/home.css'
import Packages from './Packages';
import Footer from '../../components/Footers/Footer';
import Testimonial from '../../layout/TestimonialLayout';
import AboutService from './AboutService';

export default function SocialDesign() {

    const packages = [
        {
          id: 1,
          title: 'Mega Package',
          text: '',
          price: 365,
          features: [
            '4 Custom Templates',
            '4 Custom Instagram Highlight Covers',
            '2 info Flyers',
          ],
          link: 'https://form.jotform.com/220387506125149',
          image: '/images/logo.jpg'
        },
        {
          id: 2,
          title: 'Supreme Package',
          text: '',
          price: 675,
          features: [
            'Custom Templates',
            '4 Custom Instagram Highlight Covers',
            '4 Promotional Flyers',
            'Social Media Audit',
          ],
          link: 'https://form.jotform.com/220387506125149',
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
          Social Media Templates Design
        </p>
    </div>
    
    <section style={{}} className='services-body' ref={addToRefs}>
      <div className="" style={{marginBottom: '20px', textAlign: 'center'}}>
        
        <p className="pricing-title">
            Need to make a lasting impression ?
        </p>
        <p>
            Our Internet Marketing plan is built round your business.
            Our team work transparently, giving you control over your 
            marketing activities.
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
