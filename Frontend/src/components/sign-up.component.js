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
      onUsernamechange = e => {
        this.setState({
            userName: e.target.value
        });
      };
      onPasswordchange = e => {
        this.setState({
            passWord: e.target.value
        });
      };
      handleSubmit = e => {
        e.preventDefault();
        const data = {
            fName: this.state.fName,
            lName:this.state.lName,
            eMail:this.state.eMail,
            userName:this.state.userName,
            passWord:this.state.passWord
        };

      axios.post("https://jsonplaceholder.typicode.com/posts", data)
        .then(res => {console.log("Successfull")
        this.props.history.push('/');
        localStorage.setItem("username" , this.state.userName);
        localStorage.setItem("loggedIn" , "loggedIn");
        window.location.reload();})
        .catch(err => console.log(err))
    };
  
    componentDidMount() {
        AOS.init({duration: 1000,
        once:true});
        }
    render(){
        return(
            <section style={{backgroundImage:`url(${backgroundim1})`,backgroundSize: 'cover',backgroundRepeat:'no-repeat'}}>
            <div className="wrap" >
            <h2>Sign Up Here</h2>
            <form action="" onSubmit={this.handleSubmit}>
             <input type="text" placeholder="First Name" value={this.state.fName} onChange={this.onFNamechange} required/>
             <input type="text" placeholder="Last Name" value={this.state.lName} onChange={this.onLNamechange} required/>
             <input type="email" placeholder="Email.." value={this.state.eMail} onChange={this.onEmailchange} required/>
             <input type="text" placeholder="Username.." value={this.state.userName} onChange={this.onUsernamechange} required/>
             <input type="password" placeholder="Password.." value={this.state.passWord} onChange={this.onPasswordchange} required/>
             <input type="submit" value="Submit"/>
            </form>
            <p> Already have account?<Link to ="/signIn">&nbsp;Sign In </Link></p>
            </div> 
            </section> 
        )
    }
}