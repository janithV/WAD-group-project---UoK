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
                        IBACK entertainment is a full-service event management firm 
                        based in Sri Lanka that was created by pairing together our 
                        passion for business and events. We bring a fresh, unique 
                        approach to the event management industry. Our team 
                        understands that a properly executed event can be leveraged to 
                        support an organization’s strategic vision, incorporated into a 
                        company’s marketing plan, or used to build networks and client loyalty. 
                        Event planning requires foresight, follow through and attention to detail. 
                        You need to see the big picture as well as the tiniest of details. 
                        You need Vision. Which is why we started IBACK entertainment. 
                        We wanted to create a company with the experience, skills, 
                        and knowledge to help any event, no matter how large or how small, 
                        fulfill its ultimate potential. We can help fledgling events get off the 
                        ground and existing events soar. We are flexible, fast, responsive, and 
                        reliable. And we always bring a fresh perspective.  IBACK entertainment 
                        approaches every project with meticulous attention to detail and obsessive 
                        precision. Regardless of size and scope, we treat your event like a business 
                        with clear strategic goals, defined milestones, and a comprehensive plan to ensure 
                        that your event is delivered on time and on budget.

                        </div>
                    </div>
                </div>
                <div className="col-lg-6 mt-5 mt-lg-0 d-flex align-items-stretch">
                    <div className="info">
                        <div style={{textAlign: 'justify'}}>
                        At IBACK entertainment, we put 
                        your objectives first. We learn about your event, we focus on your challenges, and 
                        we plan events to support your goals. No matter what stage of the planning you are in, 
                        we would welcome the opportunity to help you make your event the best it can be. IBACK 
                        entertainment strives to be the best running event management company in the Sri Lanka 
                        producing the highest quality events that not only set the standard for event production, 
                        but also set the trend for the industry.

                        LEARN: WE WANT TO GET TO KNOW YOU
                        What is your event about? What are your challenges? What are the issues that your members or 
                        clients are dealing with? By thoroughly understanding your company’s leadership culture, how 
                        your organization operates and your long-term strategic plans, we become a part of your team. 
                        Our model works best when we can become more than the “hired help” and can become strategic event 
                        management partners, so the first step for us is about getting to know you and your event.
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