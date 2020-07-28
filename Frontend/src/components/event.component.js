import React, {Component} from 'react';
import AOS from "aos";
import Navbar from "./navbar.component";
import Footer from "./footer.component";

import "aos/dist/aos.css";
export default class Event extends Component{
    componentDidMount() {
        AOS.init({duration: 1000,
        once:true});
        }
    render(){
        return(
          <div>
        < Navbar/>   
            <section id="contact" className="contact" style={{paddingTop:'30px',paddingBottom:'30px'}}>
                     <br></br>
            <div className="container" data-aos="fade-up">
        
              <div className="section-title">
                <h1 style={{color:  '#9e08bf'}}>Info Studio</h1>
                
              </div>
        
              <div className="row">
        
                <div className="col-lg-5 d-flex align-items-stretch">
                  <div className="info">
                    <div className="address">
                      <i className="icofont-google-map"></i>
                      <h4>Location:</h4>
                      <p>34/A, Department of Industrial Management, University of Kelaniya</p>
                    </div>
        
                    <div className="email">
                      <i className="icofont-envelope"></i>
                      <h4>Email:</h4>
                      <p>ibackEntertainment@gmail.com</p>
                    </div>
        
                    <div className="phone">
                      <i className="icofont-phone"></i>
                      <h4>Call:</h4>
                      <p>0743432423</p>
                    </div>
        
                    <div className="date">
                        <i className="icofont-calendar"></i>
                        <h4>Date:</h4>
                        <p>3<sup>rd</sup> of july 2020</p>
                      </div>
                    
                    <div className="date">
                        <i className="icofont-clock-time"></i>
                        <h4>Time:</h4>
                        <p>3.00 PM</p>
                    </div>
        
                    <div className="text-center" style={{paddingTop: "50px"}}>
                    {
                        localStorage.getItem("loggedIn") ==="loggedIn"? <button type="submit">Reserve Ticket</button> : <button type="submit">Please Sign In to Reserve</button>
                    }
                      </div>
                  </div>
        
                </div>
        
                <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                    <div className="info">
                        <div className="section-title">
                            <h2>About Event</h2>
                          
                          </div>
                        <div style={{textAlign: 'justify'}}>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque, illo reiciendis iste omnis libero commodi ullam repudiandae 
                            voluptates neque laudantium molestiae accusantium porro impedit rem eligendi tenetur illum placeat consequuntur.
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque, illo reiciendis iste omnis libero commodi ullam repudiandae 
                            voluptates neque laudantium molestiae accusantium porro impedit rem eligendi tenetur illum placeat consequuntur.
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque, illo reiciendis iste omnis libero commodi ullam repudiandae 
                            voluptates neque laudantium molestiae accusantium porro impedit rem eligendi tenetur illum placeat consequuntur.
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque, illo reiciendis iste omnis libero commodi ullam repudiandae 
                            voluptates neque laudantium molestiae accusantium porro impedit rem eligendi tenetur illum placeat consequuntur.
                        </div>
                    </div>
                </div>
        
              </div>
        
            </div>
            <br></br></section>
            <Footer/>
          </div>
        )
    }
}