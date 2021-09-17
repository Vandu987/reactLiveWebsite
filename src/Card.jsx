import React from 'react';
import { NavLink } from 'react-router-dom';


const Card=(props)=>{
   return(
    <>
    
                  <div className="col-md-4 col-10  mx-auto mt-5">
                     <div class="card" style={{width: '18rem'}}>
                       <img src={props.imgsrc} class="card-img-top" alt="..."/>
                       <div class="card-body">
                          <h5 class="card-title font-weight-bold">{props.title}</h5>
                          <p class="card-text">Some</p>
                          <NavLink to="" class="btn btn-primary">Go</NavLink>
                      </div>
                   </div>
                </div>
            
                      
    </>
 )
  };
export default Card;
