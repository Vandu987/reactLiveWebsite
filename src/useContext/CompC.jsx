import React from "react";
import {First,Second} from "../App";
 

const CompC = () => {
    return (
        <>
        <First.Consumer>
            {(fname)=>{  //function
                return(
                    <Second.Consumer>
                        {(last)=>{
                           return
                              <h1>
                                   Welcome {fname} {last}
                              </h1>;
                            }}
                     </Second.Consumer>
                   ) 
                 }}
            </First.Consumer>
       
        </>
    )
}
export default CompC;