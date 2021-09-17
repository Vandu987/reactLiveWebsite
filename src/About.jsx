import React from 'react';
import Component from './component';
import img from '../src/images/img.jpg';
const About=()=>{
   return(
    <>
    <Component 
    name="Welcom to About Page" 
    imgsrc={img} 
    visit="/contact"
    btname="Contact Now"
    />
    </>
 )
  };
export default About;
