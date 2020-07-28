import React, {Component} from 'react';
import AOS from "aos";
import {Link} from 'react-router-dom';
import "../assets/css/sign-in.css";
import "aos/dist/aos.css";
import axios from 'axios';
import backgroundim1 from '../assets/img/images1.jpg'

export default class About extends Component{
    state = {
        userName:"",
        passWord:""
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
            userName:this.state.userName
        };

      axios.get("https://jsonplaceholder.typicode.com/posts/" + data.userName)
        .then(res => {if(res.data.password === this.state.passWord){
        console.log("Successfull");
        this.props.history.push('/');
        localStorage.setItem("username" , this.state.userName);
        localStorage.setItem("loggedIn" , "loggedIn");
        window.location.reload();}
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
            <label for="">Username</label><br/>
            <input type="text" placeholder="Username.." value={this.state.userName} onChange={this.onUsernamechange} required/>
            <label for="">Password</label><br/>
            <input type="password" placeholder="Password.." value={this.state.passWord} onChange={this.onPasswordchange} required/>
            <input type="submit" value="Log In"/> 
        </form>        
        <p> Not a Member?<Link to ="/signUp">&nbsp;Sign Up Now </Link></p>
        
    </div></section> 
        )
    }
}