import React, { useEffect, useState } from "react";
import axios from "axios";

const Comp =()=>{
    const [num,setNum]=useState();
    const[name,setName]=useState();
    const[moves,setMove]=useState();
    useEffect(()=>{
        async function getData(){
              const res=await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
              setName(res.data.name);
              setMove(res.data.moves.length);

        }
        getData();
    });
  return(
      <>
      <h1>you choose <span style={{color:'red'}}>{num}</span> value</h1>
      <h1>my name is <span style={{color:'red'}}>{name}</span> value</h1>
      <h1>i have moves <span style={{color:'red'}}>{moves} Moves</span> value</h1>



      <select value={num}onChange={(event)=>{
         setNum(event.target.value);
      }}>
           <option value="0">0</option>
          <option value="1">1</option>
          <option value="25">25</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
      </select>
      </>
  )
}
export default Comp;