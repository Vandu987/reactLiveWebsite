import React, { useContext } from "react";
 import CompC from "./CompC";
 import {First,Second} from "../App";

const CompB=()=>{
    const fname=useContext(First);
    const lname=useContext(Second);
       return 
             <h1>
                 hello {fname}{lname}
            </h1>
       
        };
export default CompB;