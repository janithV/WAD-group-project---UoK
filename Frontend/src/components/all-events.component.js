import React, {Component} from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./navbar.component";
import Footer from "./footer.component";

import GetLandingAllEvents from "./getLandingAllEvents.component.js";

export default class AllEvents extends Component{
    componentDidMount() {
        AOS.init({duration: 1000,
        once:true});
        }
    render(){
      const E = 12;
        return(
          <div>
         < Navbar/>
            <section id="Events" className="events section-bg cta2">
            <div className="container" data-aos="fade-up">
        
              <div className="section-title">
                <h1>All Events</h1>
                <p style={{color:'white', fontSize:'15px'}}>All the upcomming events</p>
              </div>
              <form>
                    <div className="row">
                        <div className="col">
                            
                        </div>
                        <div className="col">
                            <input type="text" className="form-control" placeholder=""/>
                        </div>
                        <div className="col">
                            
                        </div>
                    </div>
                </form> 
                <GetLandingAllEvents limitE = {E}/>
              {/*<div className="row">
        
                <div className="col-xl-3 col-md-6 d-flex align-items-stretch allEvents" data-aos="zoom-in" data-aos-delay="100">
                  <div className="iconbox">
                    <img src={banner} alt="" className="img-fluid" style={{width:"100%"}}/>
                    <h4><a href="#/">Lorem Ipsum</a></h4>
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                  </div> 
                </div>  
                
        
                <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0 allEvents" data-aos="zoom-in" data-aos-delay="200">
                  <div className="iconbox">
                    <img src={banner} alt="" className="img-fluid" style={{width:"100%"}}/>
                    <h4><a href="#/">Lorem Ipsum</a></h4>
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                  </div>
                </div>
        
                <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0 allEvents" data-aos="zoom-in" data-aos-delay="300">
                  <div className="iconbox">
                    <img src={banner} alt="" className="img-fluid" style={{width:"100%"}}/>
                    <h4><a href="#/">Lorem Ipsum</a></h4>
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                  </div>
                </div>
        
                <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0 allEvents" data-aos="zoom-in" data-aos-delay="400">
                  <div className="iconbox">
                    <img src={banner} alt="" className="img-fluid" style={{width:"100%"}}/>
                    <h4><a href="#/">Lorem Ipsum</a></h4>
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                  </div>
                </div>
              
              
                <div className="col-xl-3 col-md-6 d-flex align-items-stretch allEvents" data-aos="zoom-in" data-aos-delay="100">
                  <div className="iconbox">
                    <img src={banner} alt="" className="img-fluid" style={{width:"100%"}}/>
                    <h4><a href="#/">Lorem Ipsum</a></h4>
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0 allEvents" data-aos="zoom-in" data-aos-delay="200">
                  <div className="iconbox">
                    <img src={banner} alt="" className="img-fluid" style={{width:"100%"}}/>
                    <h4><a href="#/">Lorem Ipsum</a></h4>
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                  </div>
                </div>
        
                <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0 allEvents" data-aos="zoom-in" data-aos-delay="300">
                  <div className="iconbox">
                    <img src={banner} alt="" className="img-fluid" style={{width:"100%"}}/>
                    <h4><a href="#/">Lorem Ipsum</a></h4>
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                  </div>
                </div>
        
                <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0 allEvents" data-aos="zoom-in" data-aos-delay="300">
                  <div className="iconbox">
                    <img src={banner} alt="" className="img-fluid" style={{width:"100%"}}/>
                    <h4><a href="#/">Lorem Ipsum</a></h4>
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                  </div>
                </div>
        
                <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0 allEvents" data-aos="zoom-in" data-aos-delay="300">
                  <div className="iconbox">
                    <img src={banner} alt="" className="img-fluid" style={{width:"100%"}}/>
                    <h4><a href="#/">Lorem Ipsum</a></h4>
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                  </div>
                </div>
        
        
                <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0 allEvents" data-aos="zoom-in" data-aos-delay="300">
                  <div className="iconbox">
                    <img src={banner} alt="" className="img-fluid" style={{width:"100%"}}/>
                    <h4><a href="#/">Lorem Ipsum</a></h4>
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                  </div>
                </div>
        
        
                <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0 allEvents" data-aos="zoom-in" data-aos-delay="300">
                  <div className="iconbox">
                    <img src={banner} alt="" className="img-fluid" style={{width:"100%"}}/>
                    <h4><a href="#/">Lorem Ipsum</a></h4>
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                  </div>
                </div>
        
                <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0 allEvents" data-aos="zoom-in" data-aos-delay="300">
                  <div className="iconbox">
                    <img src={banner} alt="" className="img-fluid" style={{width:"100%"}}/>
                    <h4><a href="#/">Lorem Ipsum</a></h4>
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                  </div>
                </div>
        
        
                <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0 allEvents" data-aos="zoom-in" data-aos-delay="300">
                  <div className="iconbox">
                    <img src={banner} alt="" className="img-fluid" style={{width:"100%"}}/>
                    <h4><a href="#/">Lorem Ipsum</a></h4>
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                  </div>
                </div>
        
        </div>*/}
        
            </div>
           
          </section>
          <Footer/>
          </div>
        )
    }
}