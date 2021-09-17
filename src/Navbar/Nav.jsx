import React from "react";
import { NavLink } from "react-router-dom";
const Nav=()=>{
 return(
     <>
     <div style={{background:'blue',height:'50px',padding:'10px',display:'flex'
    ,width:'100%',justifyContent:'space-around',color:'red',fontSize:'1.5em'}}>

     <NavLink exact activeClassName="active-class" to="/">Aboutus</NavLink>
     <NavLink activeClassName="active-class" to='/contact'>Contactus</NavLink>
     <NavLink activeClassName="active-class" to='/user/vandana/maurya'>User</NavLink>
     <NavLink exact activeClassName="active-class" to="/service">Service</NavLink>
     <NavLink exact activeClassName="active-class" to="/search">Search</NavLink>
    

    </div>
     </>
 )
}
export default Nav;