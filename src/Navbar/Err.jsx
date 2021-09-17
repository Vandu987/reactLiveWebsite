import React from 'react';
 import { NavLink } from 'react-router-dom';

const Err=(props)=>{
   return(
       <>
       <h1>404 Page not found</h1>
    <p>Sorry this page is not find</p>
    <NavLink  to="/">Go Back</NavLink>
    </>
   )
  };
export default Err;
