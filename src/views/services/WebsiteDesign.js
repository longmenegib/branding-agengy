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

export default function WebsiteDesign() {

    const packages = [
        {
          id: 1,
          title: 'Standard Website',
          text: '',
          price: 699,
          features: [
            '3-5 pages',
            'Plug-ins',
            'Pictures',
            'Contacts & Social Media',
            'Newsletter/ Subscribe',
            'Via( Wix Shopify ,Godaddy)',
            '3 revisions',
          ],
          link: 'https://form.jotform.com/220387506125149',
          image: '/images/website-1.jpg'
        },
        {
          id: 2,
          title: 'Custom website design starting $1,499 ( request quote)',
          text: '',
          price: 1.499,
          features: [
            'Website strategy session',
            '6-15 pages',
            'Design customization',
            'Plug-ins /Extension installation',
            'E-Commerce Functionality',
            'Unlimited functionalities',
            'Google analytics integration',
            'Contacts & Social media',
            '1 month of free maintenance',
          ],
          link: 'https://form.jotform.com/220387506125149',
          image: '/images/website.jpg'
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
          Website Design
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
