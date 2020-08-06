import React, {Component} from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import GetLandingAllEvents from "./getLandingAllEvents.component.js";
import GetRecomendedEvents from "./getRecomendedEvents.component.js";
import Navbar from "./navbar.component";
import Footer from "./footer.component";
import Header from "./header.component";


export default class LandingPage extends Component{
    componentDidMount() {
        AOS.init({duration: 1000,
        once:true});
        }
    render(){
      const E = 8;
        return(
            <div>
              <Navbar/>  
              <Header/>
  <section id="Events" className="events section-bg cta">
    <div className="container" data-aos="fade-up">

      <div className="section-title">
        <h1>All Events</h1>
        <p style={{color:'white', fontSize:'15px'}}>All the upcomming events</p>
      </div>

      
          <GetLandingAllEvents limitE = {E}/>
        

   

    </div>
  </section>


  <section className="recevents section-bg cta1">
    <div className="container" data-aos="fade-up">

      <div className="section-title">
        <h1>Recommended Events</h1>
        <p style={{color:'white', fontSize:'15px'}}>Recommended upcomming events for you</p>
      </div>

      <GetRecomendedEvents/>

    </div>
  </section>
  <Footer/>
            </div>
        )
    }
}