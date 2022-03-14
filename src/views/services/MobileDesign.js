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

export default function MobileDesign() {

    const packages = [
        {
          id: 1,
          title: 'Standard Logo Design',
          text: 'KICKOFF Your Brand with a IMPACT',
          price: 199,
          features: [
            '1 logo concepts',
            ' Source file',
            ' Logo transparency',
            ' High Resolution',
            ' 3D Mock up',
            ' Stationary Design',
            ' Vector file',
            ' 2 revisions'
          ],
          link: 'https://form.jotform.com/213533761803150',
          image: '/images/social-1.jpg'
        },
        {
          id: 2,
          title: 'Logo Suite',
          text: 'Build your brand logo with us',
          price: 575,
          features: [
            '2 Logo Strategy Sessions',
           ' 3 concept',
           ' Color variations',
           ' Adobe Illustrator',
            'Editable PDF',
            'EPS',
            'SVG',
            'JPEG',
            'PNG',
            'Vector format',
            '4 revisions',
            '3D mock ups',
          ],
          link: 'https://form.jotform.com/220388227612151',
          image: '/images/brand.jpg'
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
          Logo Design
        </p>
    </div>
    
    <section style={{}} className='services-body' ref={addToRefs}>
      <div className="" style={{marginBottom: '20px', textAlign: 'center'}}>
        
        <p className="pricing-title">
            Create a memorable design
        </p>
        <p>
            Work with our team to create a custom logo that leaves a lasting impression.

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
