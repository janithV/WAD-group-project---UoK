
import React, {Component} from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import {Link} from 'react-router-dom';
import backgroundim from '../assets/img/heroFront.jpg'

import $ from 'jquery';

export default class Navbar extends Component{
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
    render(){
return(
<div>    
    <header id="header" className="fixed-top" >
    <div className="container d-flex align-items-center"> 
	  
      <h2 className="logo"><Link to = "/">IBACK Entertainment</Link></h2>
	  
      
     

      <nav className="nav-menu d-none d-lg-block">
        <ul>
          <li className="active"><Link to="/">Home</Link></li>
          <li><Link to= "/">About</Link></li>
          <li><Link to ="/allEvents">Events</Link></li>
          <li><Link to ="/contact">Contact</Link></li>
          <li><a href="#/">Portfolio</a></li>
          <li><a href="#/">Team</a></li>
          <li className="drop-down"><a href="">Drop Down</a>
            <ul>
              <li><a href="#/">Drop Down 1</a></li>
              <li className="drop-down"><a href="#">Deep Drop Down</a>
                <ul>
                  <li><a href="#/">Deep Drop Down 1</a></li>
                  <li><a href="#/">Deep Drop Down 2</a></li>
                  <li><a href="#/">Deep Drop Down 3</a></li>
                  <li><a href="#/">Deep Drop Down 4</a></li>
                  <li><a href="#/">Deep Drop Down 5</a></li>
                </ul>
              </li>
              <li><a href="#/">Drop Down 2</a></li>
              <li><a href="#/">Drop Down 3</a></li>
              <li><a href="#/">Drop Down 4</a></li>
            </ul>
          </li>
        </ul>
      </nav>

     <Link to="/signin" style={{color:"white"}}><a  className="btn-get-signIn scrollto">Sign In</a> </Link> 

    </div>
  </header>

  
  </div>
  
);
}
}    
