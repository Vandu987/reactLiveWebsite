import React, { useState } from 'react';


const MyQuestion=({question,answer})=>{
    const [show,setShow]=useState(false);
    return(
        <>
         <div className="main-heading">
         <button className="btn btn-success" onClick={()=>setShow(!show)}>{show?"-":"+"}</button>
         <h4 className="ques">{question}</h4>
        </div>

        {show &&  <p className="ans">{answer}</p>}
        </>
    )
}
export default MyQuestion;