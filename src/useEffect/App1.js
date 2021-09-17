import React, { useEffect, useState } from 'react'; 

const App=()=>{
   const [num ,setNum]=useState(0);
   const [nums ,setNums]=useState(0);

   /*useEffect(()=>{
     alert("clickd");
   },[num]);*/

//or
   
   useEffect(()=>{
    document.title=`you clicked me ${num}`;
  });

   return(
     <>
     <button onClick={(()=>{setNum(num+1);})}> Click{num}</button>
     <button onClick={(()=>{setNums(nums+1);})}> Click{nums}</button>
     </>
   )
  };
export default App;
