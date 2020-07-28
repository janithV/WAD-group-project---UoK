import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";
import backgroundim from '../assets/img/heroFront.jpg'

export default class Header extends Component{
  componentDidMount() {
    AOS.init({duration: 1000,
    once:true});
    }
    render(){
        return(
          <section id="hero" className="d-flex align-items-center" style={{backgroundImage:`url(${backgroundim})`,backgroundSize: 'cover',backgroundRepeat:'no-repeat'}}>

          <div className="container">
            <div className="row">
              <div className="col-lg-7 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
                <h1>Better events, together.</h1>
                <h2>EVENT PLANNING FOR THE 21st CENTURY. <br/> Safer events, no stress.</h2>
                <div className="d-lg-flex">
                <Link to="signup">  <a className="btn-get-register scrollto">Register</a></Link>
                </div>
              </div>
              
            </div>
          </div>
          
          </section>
        )
    }
}







