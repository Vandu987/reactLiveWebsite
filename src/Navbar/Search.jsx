import React, { useState } from "react";
import SearchIcon from '@material-ui/icons/Search';
import Result from "./Result";

const Search=()=>{
    const[img,setImg]=useState();
    const InputEvent=(event)=>{
           const data=event.target.value;
           setImg(data);
    }
     return (
            <>
          <div className="searchbar">
          <input type="text" placeholder="Search anything" onChange={InputEvent} value={img}/><SearchIcon/>
          <Result name={img}/>
          </div>
          
            </>
         
     )
}
export default Search;