import React, {Component} from 'react';
import AOS from "aos";
import Navbar from "./navbar.component";
import Footer from "./footer.component";
import backgroundim3 from '../assets/img/aboutus.jpg'

import "aos/dist/aos.css";
export default class About extends Component{
    componentDidMount() {
        AOS.init({duration: 1000,
        once:true});
        }
    render(){
        return(
            <div style={{backgroundImage:`url(${backgroundim3})`,backgroundSize: 'cover',backgroundRepeat:'no-repeat'}}>
            <Navbar/><br></br>  <br></br>  <br></br>      <br></br>
            <section id="contact" className="contact" style={{paddingTop:'30px',paddingBottom:'30px'}}>
            <div className="container" data-aos="fade-up">
        
              <div className="section-title">
                <h1 style={{color:  'white'}}>About Us</h1>
              </div>
        
              <div className="row">
        
       
        
                <div className="col-lg-6 mt-5 mt-lg-0 d-flex align-items-stretch">
                    <div className="info">
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
                <div className="col-lg-6 mt-5 mt-lg-0 d-flex align-items-stretch">
                    <div className="info">
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
          </section>
        <Footer/>
        </div>
        )
    }
}