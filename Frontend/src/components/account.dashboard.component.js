import React, {Component} from 'react';
import {useHistory, Link} from 'react-router-dom';
import axios from 'axios';
import Navbar from './account.navbar.componrnt';

import swal from 'sweetalert2';
import config from '../configure';
import "../assets/css/main.portal.css"



//card component
const Card = props => (

    <div className="col-xs-12 col-sm-6">
        <div className="card">
            <a className="img-card" href="http://www.fostrap.com/">
                <img src={props.event.img}/>
            </a>
            <br/>
            <div className="card-content">
                <h2 className="card-title">

                    {props.event.name}

                </h2>
                <div className="">
                    {props.event.description}
                </div>
                <br/>
                <div className="">
                    <b>Date:</b> {props.event.date}
                </div>

                <div className="">
                    <b>Start Time: </b> {props.event.time}
                </div>
            </div>
            <div className="card-read-more">
                <a className="btn btn-link btn-block" href="#">
                    Book Event
                </a>
            </div>
        </div>
    </div>

);


export default class events extends Component {


    constructor(props) {

        super(props);


        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassoword = this.onChangePassoword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onForgotPassword = this.onForgotPassword.bind(this);
        this.getAllEntries = this.getAllEntries.bind(this);
        this.EventList = this.EventList.bind(this);
        this.state = {


            token: '',
            events: []


        }

    }

    onForgotPassword = (e) => {

        return null;

    }

    componentDidMount() {

        this.getAllEntries();


    }

    EventList() {

        return this.state.events.map(entryCurrent => {

            return <Card

                key={entryCurrent._id}

                event={entryCurrent}
            />;

        })
    }


    getAllEntries() {

        axios.get(`http://${config.host}:${config.port}/event/`
        ).then(res => {
            this.setState({

                events: res.data.data

            })

            console.log("Entries are ", this.state.entries);

        }).catch(err => {
            console.log(err);


        })
    }


    onChangeUsername(e) {
        this.setState({

            username: e.target.value


        });


    }

    onChangePassoword(e) {
        this.setState({

            password: e.target.value


        });


    }


    //handle sign in

    onSubmit = (e) => {

        e.preventDefault();

        const login = {

            username: this.state.username,
            password: this.state.password,


        }

        const response = axios.post(`http://${config.host}:${config.port}/login/`, login).then(
            (res) => {

                const token = res.data.token;
                const warning = res.data.msg;

                if (warning !== null && warning !== undefined) {

                    console.log("message is", warning);

                    swal({
                        title: "Please Try Again",
                        text: warning,
                        icon: "warning",
                        button: true,
                        // dangerMode: true,
                    })


                } else if (token) {
                    console.log("Signed in token Success block :", token);


                    swal({
                        title: "Successful",
                        text: "You have Logged In Successfully!",
                        icon: "success",
                        button: "Continue",
                        timer: 2000,

                    });

                    const id = res.data.Login.id;
                    const username = res.data.Login.username;
                    const email = res.data.Login.email;
                    const role = res.data.Login.role;


                    //set user details in local storage
                    localStorage.setItem('token', token);
                    localStorage.setItem('id', id);
                    localStorage.setItem('username', username);
                    localStorage.setItem('email', email);
                    localStorage.setItem('role', role);

                    this.props.history.push('/admin/dashboard');


                }


                //    alert('Successfuly Loged In')

            }
        ).catch((err) => {

            swal({
                title: "Please Try Again",
                text: "Error Occurred",
                icon: "error",
                // buttons: true,
                dangerMode: true,
            })
        });


    }


    render() {


        return (
            <div>
                <Navbar/>

                <div className="container" style={{padding: "50px"}}>
                    <h1 style={{paddingBottom: "50px", fontSize: "80px"}}>Events</h1>
                    <div className="row">

                        {this.EventList()}


                    </div>
                </div>


            </div>

        )


    }


}