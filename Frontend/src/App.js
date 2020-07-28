import React from 'react';
import { BrowserRouter as Router, Route }  from "react-router-dom";



import $ from 'jquery';


import  '../src/assets/vendor/bootstrap/css/bootstrap.min.css'; 
import '../src/assets/vendor/icofont/icofont.min.css'; 
import  '../src/assets/vendor/boxicons/css/boxicons.min.css'; 
import  '../src/assets/vendor/remixicon/remixicon.css'; 
import '../src/assets/vendor/remixicon/remixicon.css'; 
import  '../src/assets/vendor/aos/aos.css'; 
import '../src/assets/css/ourcss.css'; 


import Navbar from "./components/navbar.component";
import Contact from "./components/contact.component";
import Event from "./components/event.component";
import AllEvents from "./components/all-events.component";
import SignIn from "./components/sign-in.component";
import SignUp from "./components/sign-up.component";
import LandingPage from "./components/landing-page.components";
import Footer from "./components/footer.component";
import Header from "./components/header.component";



function App() {

  return (
    <Router>
      <Navbar/>
      
      <Route path = "/" exact component={LandingPage}/>
      <Route path = "/event/:id" exact component={Event}/>
      <Route path = "/contact" exact component={Contact}/>
      <Route path = "/allEvents" exact component={AllEvents}/>
      <Route path = "/signup" exact component={SignUp}/>
      <Route path = "/signin" exact component={SignIn}/>

      <Footer/>
    </Router>
  );
}

export default App;
