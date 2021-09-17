import React,{createContext} from 'react'; 
import CompA from './contextApi/CompA';

const First=createContext();
const Second=createContext();
const App=()=>{
  return(
    <>
    <First.Provider value={"vandana"}>
      <Second.Provider value={"maurya"}>
      <CompA/>
      </Second.Provider>
    </First.Provider>
   </>
  );
};
export default App;
export {First,Second};