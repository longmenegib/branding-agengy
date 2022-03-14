import React, { useRef, useEffect }  from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Header from '../components/Headers/Header'
import './css/home.css'
import About from '../layout/About'
import Services from '../layout/Services'
import Pricing from '../layout/Pricing'
import BlogLayout from '../layout/BlogLayout'
import ContactLayout from '../layout/ContactLayout'
import Footer from '../components/Footers/Footer'
import Testimonial from '../layout/TestimonialLayout'
import SlideLayout from '../layout/SlideLayout'

export default function Home() {
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
        <div 
            className="bg-gradient-red" 
            style={{height: '100vh', width: '100vw'}}
            ref={ref}
        >
            <Header />
            
            <div id="section_1" ref={addToRefs}>
            <SlideLayout />
            </div>
            

            <div id="section_2" ref={addToRefs}>
            <About />
            </div>
            

            <div id="section_3" ref={addToRefs}>
            <Services />
            </div>
            

            <div id="section_4" ref={addToRefs}>
            <Testimonial />
            </div>
            

            <div id="section_5" ref={addToRefs}>
            <Pricing />
            </div>
            

            <div id="section_6" ref={addToRefs}>
            <BlogLayout />
            </div>
            

            <div id="section_7" ref={addToRefs}>
            <ContactLayout />
            </div>
            

            <Footer />
        
        </div>
    )
}
