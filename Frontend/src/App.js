import React from 'react';
import { BrowserRouter as Router, Route }  from "react-router-dom";

import  '../src/assets/vendor/bootstrap/css/bootstrap.min.css'; 
import '../src/assets/vendor/icofont/icofont.min.css'; 
import  '../src/assets/vendor/boxicons/css/boxicons.min.css'; 
import  '../src/assets/vendor/remixicon/remixicon.css'; 
import '../src/assets/vendor/remixicon/remixicon.css'; 
import  '../src/assets/vendor/aos/aos.css'; 
import '../src/assets/css/ourcss.css'; 



import Contact from "./components/contact.component";
import Event from "./components/event.component";
import AllEvents from "./components/all-events.component";
import SignIn from "./components/sign-in.component";
import SignUp from "./components/sign-up.component";
import LandingPage from "./components/landing-page.components";
import Account from "./components/account.dashboard.component";


import About from "./components/about.component";



function App() {

  return (
    <Router>
      
      <Route path = "/" exact component={LandingPage}/>
      <Route path = "/event/:id" exact component={Event}/>
      <Route path = "/contact" exact component={Contact}/>
      <Route path = "/allEvents" exact component={AllEvents}/>
      <Route path = "/about" exact component={About}/>
      <Route path = "/signIn" exact component={SignIn}/>
      <Route path = "/signUp" exact component={SignUp}/>
      <Route path = "/account" exact component={Account}/>
      
    
    </Router>
  );
}

export default App;

