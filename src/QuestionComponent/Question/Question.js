import React from 'react';
import { QuestionNum } from './api';
import "./Question.css";
import { useState } from 'react';
import MyQuestion from './MyQuestion';


const Question=()=>{
    const[data,setData]=useState(QuestionNum);
 return(
     <>
     <section className="main">
         <h2>React Interview Questions</h2>
       {
           data.map((curEle)=>{
               const {id}=curEle;
               return <MyQuestion key={id}{...curEle}/>
           })
       }
       </section>
     </>
 )
}
export default Question;