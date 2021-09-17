import React from 'react';
 import { useParams,useLocation,useHistory } from 'react-router';

const User=()=>{
    const {fname,lname}=useParams();
    const location=useLocation();
    const history=useHistory();
   return(
     <> 
    <h1>hello user {fname} {lname}</h1>
    <p>my current location  is {location.pathname}</p>
    {location.pathname===`/user/vandana/maurya`?(
    <button onClick={()=>history.goBack()}>click</button>):null}
    
    </>
   )
  };
export default User;
