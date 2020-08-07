import React, {Component} from 'react';
import {useHistory, Link} from 'react-router-dom';
import axios from 'axios';
import Navbar from './account.navbar.componrnt';
import Footer from "./footer.component";

import swal from 'sweetalert2';
import config from '../configure';
import "../assets/css/main.portal.css"



//card component
const Card1 = props => (

    <div className="col-xs-4 col-sm-4">
        <div className="card">
            <a className="img-card" href="http://www.fostrap.com/">
                <img src={props.event.url}/>
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
                    <b>Start Time: </b> {props.event.starttime}
                </div>
                <div className="">
                    <b>Duration: </b> {props.event.duration}
                </div>
                <div className="">
                    <b>Venue: </b> {props.event.venue}
                </div>
            </div>
            <div className="card-read-more">
                <a className="btn btn-link btn-block" href="#">
                    View More
                </a>
            </div>
        </div>
    </div>

);


//card component
const Card2 = props => (

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
                    View More
                </a>
            </div>
        </div>
    </div>

);

export default class Dashboard extends Component {


    constructor(props) {

        super(props);


        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassoword = this.onChangePassoword.bind(this);
       
        this.onForgotPassword = this.onForgotPassword.bind(this);
        this.getAllEntries = this.getAllEntries.bind(this);
        this.EventList = this.EventList.bind(this);
        this.HostList = this.HostList.bind(this);
        this.state = {


            token: '',
            events: [],
            hosts:[]


        }

    }

    onForgotPassword = (e) => {

        return null;

    }

    componentDidMount() {

        this.getAllEntries();
        


    }

    EventList() {

        if(this.state.events.length!=0){

       

        return this.state.events.map(entryCurrent => {

            return <Card1

                key={entryCurrent._id}

                event={entryCurrent}
            />;

        }) 
    
        }else{
            return(
                <div>

                     <p className="txt1"> <i class="fas fa-sad-tear"></i>  Sorry, You have not Booked any events yet!</p>

                </div>
            )
        }


    }



    HostList() {

        if(this.state.hosts.length!=0){

        return this.state.hosts.map(entryCurrent => {

            return <Card1

                key={entryCurrent._id}

                event={entryCurrent}
            />;

        })
    }
    else{

        return(
            <div>

                 <p className="txt1"> <i class="fas fa-sad-tear"></i>   Sorry, You have not Hosted any events yet!</p>

            </div>
        )

    }

}



    getAllEntries() {

        // hosts

        axios.get(`http://${config.host}:${config.port}/events/myHostedEvents/`+ localStorage.getItem("cusid")
        ).then(res => {
            this.setState({

                hosts: res.data

            })

            console.log("Entries are ", this.state.hosts);

        }).catch(err => {
            console.log(err);


        })

// bookings
        
        axios.get(`http://${config.host}:${config.port}/booking/`+ localStorage.getItem("cusid")
        ).then(res => {
            this.setState({

                events: res.data

            })

            console.log("Entries are ", this.state.events);

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


    


    render() {


        return (
            <div>
                <Navbar/>

                <div className="container" style={{padding: "50px"}}>
                    <h1 style={{paddingBottom: "50px", fontSize: "80px"}}>My Bookings</h1>
                    <div className="row">

                        {this.EventList()}


                    </div>

                    <h1 style={{paddingBottom: "50px", paddingTop:"30px", fontSize: "80px"}}>My Hosted Events</h1>
                    <div className="row">

                        {this.HostList()}


                    </div>
                </div>

                <Footer/>


            </div>

        )


    }


}