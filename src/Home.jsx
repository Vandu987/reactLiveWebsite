import React from 'react';
import img2 from '../src/images/img2.jpg';
import Component from './component';
const Home=()=>{
   return(
    <>
    <Component 
    name="Welcom my first" 
    imgsrc={img2} 
    visit="/service"
    btname="Get started"
    />
    </>
 )
  };
export default Home;
