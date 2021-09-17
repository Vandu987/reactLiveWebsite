import React from 'react';
import {Route,Switch} from "react-router-dom";
import About from './ReactRouter/About';
import Contact from './ReactRouter/Contact';
import Error from './ReactRouter/Error';
const App=()=>{
   return(
     <>

      <Switch>
       <Route  exact path='/' component={About}/>
       <Route path='/contact' component={Contact}/>
       <Route component={Error}/>
       </Switch>
    
        {/*<About/>
        <Contact/>*/}
       </>
   )
  };
export default App;
