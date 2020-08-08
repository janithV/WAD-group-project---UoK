import React, {Component} from 'react';
import AOS from "aos";
import {Link} from 'react-router-dom';
import "../assets/css/sign-in.css";
import "aos/dist/aos.css";
import axios from 'axios';
import backgroundim1 from '../assets/img/images1.jpg'

export default class About extends Component{
    state = {
        email:"",
        password:""
      };
      onEmailchange = e => {
        this.setState({
            email: e.target.value
        });
      };
      onPasswordchange = e => {
        this.setState({
            password: e.target.value
        });
      };
      handleSubmit = e => {
        
        e.preventDefault();
        const C = {
            email :this.state.email,
            password :this.state.password
        };

        console.log(this.state.email);
        console.log(this.state.password);

      axios.post("http://localhost:3000/customer/login/signIn" , C)
        .then(res => {
            console.log(res.data.message);
            if(res.data.message === "Verified"){
                console.log("Successfull");
                localStorage.setItem("cusid" , res.data.CustomerID);
                
                localStorage.setItem("username" , this.state.userName);
                localStorage.setItem("loggedIn" , "loggedIn");
                this.props.history.push('/');
                window.location.reload();
            }
        else{
            window.alert("Pls Enter the correct Login Details")
            console.log("not verified");
        }
        })
        .catch(err => {console.log("Unsucessfull"); 
                        window.alert("Wrong");
                        this.props.history.push('/signUp');
                        window.location.reload();
                    })
    };
    componentDidMount() {
        AOS.init({duration: 1000,
        once:true});
        }
    render(){
        return(
        <section style={{backgroundImage:`url(${backgroundim1})`,backgroundSize: 'cover',backgroundRepeat:'no-repeat'}} >
        <div className="wrap" data-aos="fade-up" data-aos-delay="200" >
        <h2>Log In With</h2>
        <form action="" onSubmit={this.handleSubmit}>
            <label>Email</label><br/>
            <input type="text" placeholder="Email.." value={this.state.email} onChange={this.onEmailchange} required/>
            <label >Password</label><br/>
            <input type="password" placeholder="Password.." value={this.state.password} onChange={this.onPasswordchange} required/>
            <input type="submit" value="Log In"/> 
        </form>        
        <p> Not a Member?<Link to ="/signUp">&nbsp;Sign Up Now </Link></p>
    </div>
    </section> 
        )
    }
}