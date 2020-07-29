import React, {Component} from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
export default class Event extends Component{
  componentDidMount() {
    AOS.init({duration: 1000,
    once:true});
    }
    render(){
        return(
<footer id="footer">

    <div className="footernewsletter">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <h4>Join Our Newsletter</h4>
            <p>Get daily updates about our events</p>
            <form action="" method="post">
              <input type="email" name="email"/><input type="submit" value="Subscribe"/>
            </form>
          </div>
        </div>
      </div>
    </div>

    <div className="footer-top">
      <div className="container">
        <div className="row">

          <div className="col-lg-3 col-md-6 footer-contact">
            <h3>IBACK Entertainment</h3>
            <p>301/6 <br/>Department of Industrial Management<br/>University of Kelaniya <br/><br/><strong>Phone:</strong>07168789939020<br></br><strong>Email:</strong>ibackinfo@gmail.com<br/></p>
          </div>

          <div className="col-lg-3 col-md-6 footerlinks">
            
          </div>

          <div className="col-lg-3 col-md-6 footerlinks">
          </div>

          <div className="col-lg-3 col-md-6 footerlinks">
            <h4>Our Social Networks</h4>
            <p>Reach us from</p>
            <div className="social-links mt-3">
              <a href="/#"><i className="bx bxl-twitter"></i></a>
              <a href="/#" ><i className="bx bxl-facebook"></i></a>
              <a href="/#" ><i className="bx bxl-instagram"></i></a>
              <a href="/#" ><i className="bx bxl-skype"></i></a>
              <a href="/#" ><i className="bx bxl-linkedin"></i></a>
            </div>
          </div>

        </div>
      </div>
    </div>

    <div className="container footerbottom">
      <div className="copyright">
        &copy; Copyright <strong><span>Team IBACK</span></strong>. All Rights Reserved
      </div>
      
    </div>
</footer>
        )
    }
}




  