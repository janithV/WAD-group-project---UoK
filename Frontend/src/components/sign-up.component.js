import React, {Component} from 'react';
import AOS from "aos";
import {Link} from 'react-router-dom';
import axios from 'axios';
import "aos/dist/aos.css";
import backgroundim1 from '../assets/img/images1.jpg'

export default class SignUp extends Component{
    state = {
        fName: "",
        lName: "",
        eMail:"",
        userName:"",
        passWord:""
      };

      onFNamechange = e => {
        this.setState({
            fName: e.target.value
        });
      };
      onLNamechange = e => {
        this.setState({
            lName: e.target.value
        });
      };
      onEmailchange = e => {
        this.setState({
            eMail: e.target.value
        });
      };
      onContactNumchange = e => {
        this.setState({
          contactNum: e.target.value
        });
      };
      onPasswordchange = e => {
        this.setState({
            passWord: e.target.value
        });
      };
      handleSubmit = e => {
        console.log("okay");
        e.preventDefault();
        const Customer = {
          fname: this.state.fName,
          lname:this.state.lName,
          email:this.state.eMail,
          contactno: this.state.contactNum,
         // companyName: null,
      //  companyAddress: null,
      //  position: null,
          //fname:this.state.userName,
            password:this.state.passWord,
        };

      axios.post("http://localhost:3000/customer/signUp", Customer)
        .then(res => {console.log(res)
        console.log("okay");
        localStorage.setItem("username" , this.state.userName);
        localStorage.setItem("loggedIn" , "loggedIn");
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
            <section style={{backgroundImage:`url(${backgroundim1})`,backgroundSize: 'cover',backgroundRepeat:'no-repeat'}}>
            <div className="wrap" data-aos="fade-up" data-aos-delay="200">
            <h2>Sign Up Here</h2>
            <form action="" onSubmit={this.handleSubmit}>
             <input type="text" placeholder="First Name" value={this.state.fName} onChange={this.onFNamechange} required/>
             <input type="text" placeholder="Last Name" value={this.state.lName} onChange={this.onLNamechange} required/>
             <input type="email" placeholder="Email.." value={this.state.eMail} onChange={this.onEmailchange} required/>
             <input type="text" placeholder="Contact.." value={this.state.contactNum} onChange={this.onContactNumchange} required/>
             <input type="password" placeholder="Password.." value={this.state.passWord} onChange={this.onPasswordchange} required/>
             <input type="submit" value="Submit"/>
            </form>
            <p> Already have account?<Link to ="/signIn">&nbsp;Sign In </Link></p>
            </div> 
            </section> 
        )
    }
}