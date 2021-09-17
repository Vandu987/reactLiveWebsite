import React from 'react';
import { Route, Switch,Redirect } from 'react-router';
import Nav from './Navbar/Nav';
import About from './Navbar/About';
import Contact from './Navbar/Contact';
import Service from './Navbar/Service';
import User from './Navbar/User';
import Search from './Navbar/Search';
import Err from './Navbar/Err';

const App=()=>{
   return(
    <>
    <Nav/>
   
    <Switch>
      <Route exact path="/" component={()=><About name="about"/>}/>
      <Route exact path="/contact" render={()=><Contact name="contact"/>}/>
      <Route  exact path="/service" component={()=><Service name="service"/>}/>
      <Route exact path="/user/:fname/:lname" component={()=><User name="user"/>}/>
      <Route exact path="/search" component={Search}/>
      {/*<Route  component={Err}/>*/}
      <Redirect to="/"/>
    </Switch>
    </>
   )
}