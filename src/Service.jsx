import React from 'react';
import Card from './Card';
import Simage from './Simage';
const Service=()=>{
   return(
    <>
     <div className="my-5">
        <h1 className="text-center">Our Services</h1>
    </div>
   <div className="container-fluid mb-5">
        <div className="row">
            <div className="col-10 mx-auto">
               <div className="row">
               {
                  Simage.map((currEle,index)=>{
                     return <Card
                       key={index}
                       imgsrc={currEle.imgsrc} 
                       title={currEle.title}
                     />
                  })
               }
               </div>
            </div>
      </div>
 </div>
    
     
    </>
 )
  };
export default Service;
