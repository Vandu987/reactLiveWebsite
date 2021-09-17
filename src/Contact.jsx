import React from 'react';


const Contact=()=>{
   return(
    <>
    <div className="my-5">
    <h1 className="text-center">Contact Us</h1>
    </div>
    <div className="container contact_div">
       <div className="row">
            <div className="col-md-6 col-10 mx-auto">
         <form>
           <div class="mb-3">
               <label for="exampleFormControlInput1" 
               class="form-label">Username</label>
               <input 
               type="user" 
               class="form-control" 
               id="exampleFormControlInput1" 
               placeholder="username"/>
          </div>
          <div class="mb-3">
               <label for="exampleFormControlInput1" 
               class="form-label">Password</label>
               <input 
               type="user" 
               class="form-control" 
               id="exampleFormControlInput1" 
               placeholder="password"/>
          </div>
          <div class="mb-3">
          <label for="exampleFormControlTextarea1" 
          class="form-label">massage</label>
          <textarea 
          class="form-control" 
          id="exampleFormControlTextarea1" 
          rows="3"></textarea>
          </div>
          <div className="mb-3"><input type="submit" className="p-2"/></div>
               </form>
            </div>
       </div>
    </div>
  
    </>
 )
  };
export default Contact;
