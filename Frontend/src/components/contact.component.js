import React, {Component} from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./navbar.component.js";
import Footer from "./footer.component.js";
import backgroundim2 from '../assets/img/contactback.jpg'
import axios from 'axios';


export default class Contact extends Component{

  state = {
    fName: "",
    eMail:"",
    message:"",
    subject:""
  };

  onFNamechange = e => {
    this.setState({
        fName: e.target.value
    });
  };
  
  onEmailchange = e => {
    this.setState({
        eMail: e.target.value
    });
  };
  onMessagechange = e => {
    this.setState({
      message: e.target.value
    });
  };
  onSubjectchange = e => {
    this.setState({
        passWord: e.target.value
    });
  };
  handleSubmit = e => {
    console.log("okay");
    e.preventDefault();
    const con = {
      fname: this.state.fName,
      message:this.state.message,
      email:this.state.eMail,
      subject: this.state.subject
    };

  axios.post("http://localhost:3000/email/contact", con)
    .then(res => {console.log(res)
    console.log("okay");
    this.props.history.push('/'); 
    window.location.reload();
  })
    .catch(err => console.log(err));
   
};
    componentDidMount() {
        AOS.init({duration: 1000,
        once:true});
        }
    render(){
        return(
          <div style={{backgroundImage:`url(${backgroundim2})`,backgroundSize: 'cover',backgroundRepeat:'no-repeat'}}>
          <Navbar/>
          <br></br>  <br></br>        <br></br>
            <section id="contact" className="contact" style={{paddingTop:'30px', paddingBottom:'30px'}}>
    <div className="container" data-aos="fade-up">

      <div className="section-title">
        <h1>Contact</h1>
        <p style={{color:'white'}}>Pls Feel Free to Contact Us</p>
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

            <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.3000601205854!2d79.91354531459311!3d6.973881594961881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2581cbe3d06f5%3A0x17c98045f95e4fe2!2sFaculty%20of%20Science%20University%20of%20Kelaniya!5e0!3m2!1sen!2slk!4v1594377283112!5m2!1sen!2slk" frameBorder="0" style={{border:'0', width: '100%', height: '290px' ,allowfullscreen:'allowfullscreen'}}></iframe>
          </div>

        </div>

        <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
          <form action="forms/contact.php" method="post" role="form" className="php-email-form" onSubmit={this.handleSubmit}>
            <div className="form-row form-group">
              <div className=" col-md-6">
                <label htmlFor="name">Your Name</label>
                <input type="text" name="name" className="form-control" id="name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" value={this.state.fName} onChange={this.onFNamechange}/>
                <div className="validate"></div>
              </div>
              <div className=" col-md-6">
                <label htmlFor="name">Your Email</label>
                <input type="email" className="form-control" name="email" id="email" data-rule="email" data-msg="Please enter a valid email" value={this.state.eMail} onChange={this.onEmailchange}/>
                <div className="validate"></div>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="name">Subject</label>
              <input type="text" className="form-control" name="subject" id="subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" value={this.state.subject} onChange={this.onSubjectchange}/>
              <div className="validate"></div>
            </div>
            <div className="form-group">
              <label htmlFor="name">Message</label>
              <textarea className="form-control" name="message" rows="10" data-rule="required" value={this.state.message} onChange={this.onMessagechange} data-msg="Please write something for us"></textarea>
              <div className="validate"></div>
            </div>
            
            <div className="text-center"><button type="submit">Send Message</button></div>
          </form>
        </div>

      </div>

    </div>
  </section>
  <Footer/>
  </div>
        )
    }
}