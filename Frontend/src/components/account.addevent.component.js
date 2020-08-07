import React, {Component} from 'react';
import {useHistory, Link} from 'react-router-dom';
import axios from 'axios';
import Navbar from './account.navbar.componrnt';
import Footer from "./footer.component";
import TextField from '@material-ui/core/TextField';

import Swal from 'sweetalert2';
import swal from 'sweetalert';
import {Grid} from '@material-ui/core';
import config from '../configure';
import "../assets/css/main.portal.css"

//get today date

function getToday() {

    let date = new Date();
    console.log("date is ", date.toISOString().substring(0, 10));
    return date.toString().substring(0, 10);


}


export default class addEvent extends Component {


    constructor(props) {

        super(props);


        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangeTime = this.onChangeTime.bind(this);
        this.onChangeDuration = this.onChangeDuration.bind(this);
        this.onChangeImg = this.onChangeImg.bind(this);
        this.onChangeDesc = this.onChangeDesc.bind(this);
        this.onChangeVenue = this.onChangeVenue.bind(this);
      

        this.onSubmit = this.onSubmit.bind(this);
       

        this.onForgotPassword = this.onForgotPassword.bind(this);

        this.state = {

            name: '',
            time: '',
            date: '',
            description: '',
            contact: '',
            img: null,
            imgCloud: '',
            organizer: '',
            today: '',
            venue: '',
            duartation:''



        }

    }

    onForgotPassword = (e) => {

        return null;

    }

    componentDidMount() {

        
        this.setState({

            today: getToday()


        });


    }

    

    onChangeName(e) {
        this.setState({

            name: e.target.value


        });


    }

    onChangeDate(e) {
        this.setState({

            date: e.target.value


        });


    }

    onChangeTime(e) {
        this.setState({

            time: e.target.value


        });


    }

    onChangeDesc(e) {
        this.setState({

            description: e.target.value


        });


    }

    onChangeDuration(e) {
        this.setState({

            duration: e.target.value


        });


    }

    onChangeImg(e) {
        this.setState({

            img: e.target.files[0],


        });

        console.log("image is", e.target.files[0])


    }

    onChangeVenue(e) {
        this.setState({

            venue: e.target.value


        });


    }

   
    async onUpload(e) {

        e.preventDefault();


        let Toast = Swal.mixin({
            toast: true,
            position: 'center',
            showConfirmButton: false,
            timer: this.state.uploadPercentage,
            timerProgressBar: true,
            onOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            },
            onBeforeOpen: () => {
                Swal.showLoading()
            }


        })
        console.log("percentage ", this.state.uploadPercentage);


        const formData = new FormData();

        formData.append('img', this.state.img);


        let token = localStorage.getItem('token')

        await axios.post(`http://${config.host}:${config.port}/events/upload`, formData, {
            onUploadProgress: ProgressEvent => {

                this.state.uploadPercentage = 100 - parseInt((Math.round((ProgressEvent.loaded * 100) / ProgressEvent.total)))

                console.log("percentage inside ", this.state.uploadPercentage);

                Toast.fire({
                    icon: 'info',
                    title: 'Uploading on Progress.',
                    text: 'Please wait a moment',


                })

                setTimeout(() => this.state.uploadPercentage = 0, 1000)


            }


        }).then((res) => {

            console.log("response is: ", res.data);

            if (res.data.URL) {

                this.setState({

                    imgCloud: res.data.URL


                });

                this.onSubmit();


            }
            if (res.data.msg) {
                Swal.fire({
                    title: "Upload Interrupted",
                    text: res.data.msg,
                    icon: "error",

                    dangerMode: true,
                })


            }

        }).catch((err => {

           
           

                Swal.fire({
                    title: "Event Hosting Interrupted",
                    text: "Session has Expired Please Log in! ",
                    icon: "error",

                    dangerMode: true,
                })

          


        }))


    }


   

    onSubmit() {


        let Toast = Swal.mixin({
            toast: true,
            position: 'center',
            showConfirmButton: false,
            timer: this.state.uploadPercentage,
            timerProgressBar: true,
            onOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            },
            onBeforeOpen: () => {
                Swal.showLoading()
            }


        });

        const Entry = {

            name: this.state.name,
            startTime: this.state.time,
            date: this.state.date,           
            description: this.state.description,
            contact: this.state.contact,
            img: this.state.imgCloud,
            organizer: localStorage.getItem("firstname")


        }


        let token = localStorage.getItem('token')
        const response = axios.post(`http://${config.host}:${config.port}/event/add`, Entry, 


        ).then(
            (res) => {


                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Successfully Registered',
                        showConfirmButton: false,
                        timer: 3000
                    });

                    this.props.history.push('/home');

                }


            
        ).catch((err) => {

            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Error Occured.Please try again',
                showConfirmButton: false,
                timer: 3000
            })
        });


    }


    render() {


        return (


            <div >
                <Navbar/>
                <div className="limiter" >
                    <div className="container-login100" style={{background: "linear-gradient(to right, #FCE4EC, #F3E5F5)" }}>
                        <center><Grid
                            container
                            spacing={0}
                        >


                            <Grid
                                item
                                lg={12}
                                sm={12}
                                xl={12}
                                xs={12}
                            >
                                <div >
                                    <form onSubmit={this.onUpload} className="login100-form validate-form">
					
                    <h1 style={{paddingBottom: "50px", fontSize: "80px"}}>	Host Event</h1>
					


                                        <div className="wrap-input100 validate-input m-t-5 m-b-35"
                                             data-validate="Enter username">
                                            <label className="form-title">Event Name</label>
                                            <input className="input100" type="text" name="username"
                                                   placeholder={"EX: Vertigo"} required onChange={this.onChangeName}
                                                   value={this.state.name}/>
                                            <span className="focus-input100"></span>
                                        </div>

                                     
                                        <div className="wrap validate-input" style={{backgroundColor:"#E1BEE7"}} 
                                             data-validate="Enter Date">
                                            <label className="form-title" style={{color:"#AB47BC"}}>Event Date</label>
                                            
                                            <TextField
                                                required={"true"}
                                                InputProps={{inputProps: {min: "2020-06-13"}}}
                                                id="date"
                                                label=""
                                                type="date"
                                                value={this.state.date}
                                                onChange={this.onChangeDate}
                                                defaultValue={new Date()}
                                                

                                                className={"input200"}
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}/>

                                               
                                        

                                        </div>

                                        <div className="wrap validate-input" data-validate="Enter Time" style={{backgroundColor:"#E1BEE7"}}>
                                        <label className="form-title" style={{color:"#AB47BC"}}>Start Time</label>
                                            <TextField
                                                required={"true"}
                                                id="time"
                                                label=""
                                                type="time"
                                                defaultValue="00:00"
                                                value={this.state.time}
                                                onChange={this.onChangeTime}
                                                className={"input100"}
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                                inputProps={{
                                                    step: 300, // 5 min
                                                }}
                                            />

                                        </div>

                                        <div className="wrap-input100 validate-input m-t-5 m-b-35"
                                             data-validate="Enter username">
                                            <label className="form-title">Event Description</label>
                                            <textarea className="input100" name="username"
                                                      placeholder={"EX: The best event of the month. Enjoy the life!"}
                                                      required onChange={this.onChangeDesc}
                                                      value={this.state.description}/>
                                            <span className="focus-input100" d></span>
                                        </div>
                                        <div className="wrap-input100 validate-input m-t-5 m-b-35"
                                             data-validate="Enter Duration">
                                            <label className="form-title">Event Duration Hr(s)</label>
                                            <input className="input100" type="text" name="contact"
                                                   placeholder={"EX: 04"} required onChange={this.onChangeDuration}
                                                   value={this.state.duration}/>
                                            <span className="focus-input100"> </span>
                                        </div>

                                        <div className="wrap-input100 validate-input m-t-5 m-b-35"
                                             data-validate="Enter Venue">
                                            <label className="form-title">Venue</label>
                                            <input className="input100" type="text" name="contact"
                                                   placeholder={"EX: Galadari Hotel, Colombo"} required onChange={this.onChangeVenue}
                                                   value={this.state.venue}/>
                                            <span className="focus-input100"> </span>
                                        </div>


                                        <div className="wrap validate-input m-b-50" data-validate="Choose Image" style={{backgroundColor:"#AB47BC"}}>
                                        <label className="form-title"> Event Image (Compulsory)</label><br/>
                                            <input style={{padding: "50px",color:"white"}} accept=".gif,.jpg,.jpeg,.png" type="file"
                                                   name="pass" onChange={this.onChangeImg}/>

                                        </div>


                                        <div className="container-login100-form-btn">
                                            <button className="btn btn-success" style={{
                                                paddingLeft: "100px",
                                                paddingRight: "100px",
                                                paddingTop: "20px",
                                                paddingBottom: "20px"
                                            }}>
                                                Host Event
                                            </button>
                                        </div>


                                        <ul className="login-more p-t-50">


                                            <li>
							<span className="txt1">
								Changed your mind?
							</span>

                                                <a href="#" className="txt2">
                                                    <Link to={"/account"}> Cancel</Link>
                                                </a>
                                            </li>
                                        </ul>
                                    </form>
                                </div>
                            </Grid>


                        </Grid></center>
                    </div>
                </div>
                <Footer/>
            </div>

        )


    }


}