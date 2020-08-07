
import React, {Component} from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import {Link} from 'react-router-dom';


import $ from 'jquery';

export default class Navbar extends Component{
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
}
  componentDidMount() {
    AOS.init({duration: 1000,
    once:true});
      $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
          $('#header').addClass('header-scrolled');
        } else {
          $('#header').removeClass('header-scrolled');
        }
      });
    }
    logout() {
      localStorage.clear();
      window.location.href = '/';
      localStorage.setItem("username" , null);
      localStorage.setItem("loggedIn" , null);
  }
    render(){
return(
<div>    
    <header id="header" className="fixed-top" >
    <div className="container d-flex align-items-center"> 
	  
      <h2 className="logo"><Link to = "/">IBACK Entertainment</Link></h2>
	  
      
     

      <nav className="nav-menu d-none d-lg-block">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to= "/about">About</Link></li>
          <li><Link to ="/allEvents">Events</Link></li>
          <li><Link to ="/contact">Contact</Link></li>
          <li><Link to ={ localStorage.getItem("loggedIn") ==="loggedIn"? "/account":"/signIn"}>Account</Link></li>
        </ul>
      </nav>
      {
        localStorage.getItem("loggedIn") ==="loggedIn"? <a href="#/" className="btn-get-signIn scrollto" onClick={this.logout}>Sign Out</a>   : <Link to ="/signIn" className="btn-get-signIn scrollto">Sign In</Link>
        
      }

{
      
        
      }
      

    </div>
  </header>


  
  </div>
  
);
}
}    
 
