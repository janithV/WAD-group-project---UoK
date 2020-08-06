import React, {Component} from 'react';
import AOS from "aos";
import Navbar from "./navbar.component";
import Footer from "./footer.component";
import axios from 'axios';
import backgroundim4 from '../assets/img/contactback.jpg'


import "aos/dist/aos.css";
export default class Event extends Component{
 
  state = {
    events: []
};

componentDidMount() {

    axios.get('http://localhost:3000/events/' + this.props.match.params.eventId).then(res=>{
        console.log(res);
        this.setState({ events:res.data });
        //window.alert("Okay");
    }).catch(err => console.log(err));
    AOS.init({duration: 1000,
        once:true
    });
    }
    render(){
        return(
          
          <div style={{backgroundImage:`url(${backgroundim4})`,backgroundSize: 'cover',backgroundRepeat:'no-repeat'}}>
        < Navbar/>   <br></br>  <br></br>  <br></br>      <br></br>
            <section id="contact" className="contact" style={{paddingTop:'30px',paddingBottom:'30px'}}>
                     <br></br> {this.state.events.map(event=> 
            <div className="container" data-aos="fade-up">
        
              <div className="section-title">
                     <h1 style={{color:  'white'}}>{event.name}</h1>
                
              </div>
        
              <div className="row">
        
                <div className="col-lg-5 d-flex align-items-stretch">
                  <div className="info">
                    <div className="address">
                      <i className="icofont-google-map"></i>
                      <h4>Location:</h4>
                      <p>{event.venue}</p>
                    </div>
        
                  { /* <div className="email">
                      <i className="icofont-envelope"></i>
                      <h4>Email:</h4>
                      <p>ibackEntertainment@gmail.com</p>
                     </div>*/}
        
                    

                    <div className="date">
                        <i className="icofont-clock-time"></i>
                        <h4>Time:</h4>
                        <p>{event.starttime}</p>
                    </div>
                     
                    <div className="date">
                        <i className="icofont-calendar"></i>
                        <h4>Date:</h4>
                        <p>{event.date}</p>
                      </div>
                    
                    <div className="phone">
                      <i className="icofont-stopwatch"></i>
                      <h4>Duration:</h4>
                      <p>{event.duration}</p>
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
                        {event.description}
                        </div>
                    </div>
                </div>
        
              </div>
        
            </div>)}
            <br></br></section>
            <Footer/>
          </div>
        )
    }
}