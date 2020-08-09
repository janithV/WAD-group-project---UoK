import React, { Component } from 'react';

import axios from 'axios';
import Navbar from "./account.navbar.componrnt";
import Footer from "./footer.component";

import swal from 'sweetalert';
import Swal from 'sweetalert2';
import { Grid } from '@material-ui/core';
import config from '../configure';
import TextField from '@material-ui/core/TextField';
import {Link} from 'react-router-dom';


let reset = false;





export default class ViewHEvent extends Component {

    constructor(props) {

        super(props);

       
    
       
        this.onChangeDiscription = this.onChangeDiscription.bind(this)
        this.onChangeDate= this.onChangeDate.bind(this)
        this.onChangeDuration= this.onChangeDuration.bind(this)
        this.onChangeTime= this.onChangeTime.bind(this)
        this.onChangeVenue= this.onChangeVenue.bind(this)
        this.onChangeImg= this.onChangeImg.bind(this)
        this.onChangeName= this.onChangeName.bind(this)

      
        this.uploadImage = this.uploadImage.bind(this)
         
        this.getEvent = this.getEvent.bind(this)






        this.state = {

           
            name:'',
            date:'',
            venue:'',
            description:'',
            startTime:'',
            duration:'',
            cusid:'',
            newimg: null,
            img: null


        }
    }


    componentDidMount() {

     
        this.getEvent();


    }

    //get the product details

    getEvent() {
      
        axios.get(`http://${config.host}:${config.port}/events/` + this.props.match.params.id, {
         
        }).then((res) => {

            console.log("response is", res);
            console.log("values of name",res.data.name);

            

            this.setState({

            name:res.data.name,
            date:res.data.date,
            venue:res.data.venue,
            description:res.data.description,
            startTime:res.data.startTime,
            duration:res.data.duration,
            cusid:res.data.customerID,
            img: res.data.img,
             

            


            })

            console.log("name is", this.state.name);

          
        }).catch(err => {
            console.log(err);


        })
    }

    
   
    
    

 

    onChangeName(e) {

        this.setState({

            name: e.target.value


        });

    
    }

    
    onChangeImg(e) {

        this.setState({

            newimg: e.target.files[0],


        });

    
    }
   


    onChangeDate(e) {

        this.setState({

            date: e.target.value


        });

    }

    onChangeTime(e) {

        this.setState({

            startTime: e.target.value


        });

    }

    onChangeVenue(e) {

        this.setState({

            venue: e.target.value


        });

    }

    onChangeDuration(e) {

        this.setState({

            duration: e.target.value


        });

    
    }
    
   
    onChangeDiscription(e) {

        this.setState({

            description: e.target.value


        });

    }
    

    // remove image attachment
   

    //handle upload image

    async uploadImage() {


       


    }

    showImage() {

        let go = 0;

        if (this.state.image) {

            Swal.fire({
                title: 'Product Picture',

                // html:'<figure> <img src="'+res.data.URL+'" alt="sing up image"/></figure>',
                imageUrl: this.state.image,
                icon: "success",

                text: "This Image is Attached to your Product",

                imageHeight: 400,

                confirmButtonText: 'Continue',

                reverseButtons: true,
            })








        } else if (this.state.uploadedimg) {

            Swal.fire({
                title: 'Image Not Attached',
                html: "Uploaded Image is <b>not attached</b> to the Product,<br/>Do you wish to <b>Attach</b> this as the Product Image?",
                // html:'<figure> <img src="'+res.data.URL+'" alt="sing up image"/></figure>',
                imageUrl: this.state.uploadedimg,
                icon: "question",

                imageHeight: 400,
                showCancelButton: true,
                confirmButtonText: 'Yes',
                cancelButtonText: 'No,cancel',
                reverseButtons: true,
                preConfirm: (e) => {
                    this.state.image = this.state.uploadedimg;

                    console.log(this.state.image);





                    swal({
                        title: "Image Attached",
                        text: "This Image File is Attached to Your Product",
                        icon: "success",
                        // buttons: true,
                        dangerMode: false,
                    })





                }





            })






        } else {





            const swalWithBootstrapButtons = Swal.mixin({
                customClass: {
                    confirmButton: 'btn btn-danger',
                    cancelButton: 'btn btn-success',
                    padding: '100px'
                },
                buttonsStyling: false
            })

            Swal.fire({
                title: 'No file is Uploaded',
                text: "Please Upload an Image file",
                // html:'<figure> <img src="'+res.data.URL+'" alt="sing up image"/></figure>',

                icon: "warning",

                imageHeight: 400,

                confirmButtonText: 'Okay',

                reverseButtons: true,

                preConfirm: (e) => {





                    go = 1;
                    console.log("Go dont need file");





                }





            })

            if (go == 0) {

                console.log("dont go");



            }

        }


    }

  
    // handle updates
    onSubmit = async (e) => {

        e.preventDefault();

        const product = {

            productCode: this.state.productCode,
            categoryName: this.state.categoryName,
            productName: this.state.productName,
            price: this.state.price,
            color: this.state.color,
            size: this.state.size,
            quantity: this.state.quantity,
            discount: this.state.discount,
            description: this.state.description,
            rating: this.state.rating,
            comment: this.state.comment,
            image: this.state.image




        }

       








        axios.post('http://localhost:3000/events/update/' + this.props.match.params.id, product, 
        ).then((res) => {

           

                Swal.fire({
                    title: 'Product Updated',
                    text: "Product is Updated Successfully!",
                    // html:'<figure> <img src="'+res.data.URL+'" alt="sing up image"/></figure>',

                    icon: "success",


                    confirmButtonText: 'Continue',

                    reverseButtons: true,

                    preConfirm: (e) => {





                       
                        this.getProduct();

                 




                    }





                })


           

        }
        ).catch((err) => {

            Swal.fire({
                title: 'Product Updated Failed',
                text: "Product is not Updated, Please Try Again!",
                // html:'<figure> <img src="'+res.data.URL+'" alt="sing up image"/></figure>',

                icon: "error",


               

                
                





            })


          
        });



        



    }




    render() {


        return (



            <div className="manager">
                <header>

                    <link rel="stylesheet" href="./" />



                </header>
              
                <Navbar />

                <div style={{ padding: "20px" }}>
                    <h6 style={{ color: "#78909C" }}><i class="fas fa-info-circle"></i>  Account / Events / View Event</h6>
                </div>

              
                

                <div >


                    <Grid
                        container
                        spacing={0}
                    >

                        

                        <Grid id="updateBox" style={{ display:"block"}}
                            item
                            lg={12}
                            sm={12}
                            xl={12}
                            xs={12}
                        >


                            <div class="main">




                                <section class="signup">
                                    <div class="container">
                                        <div class="signup-content">
                                            <div class="signup-form" style={{ margin: "20px" }}>
                                            <h1 style={{paddingBottom: "50px", fontSize: "80px"}}>	Update Event</h1>
					
                                            <form onSubmit={this.onUpload} className="login100-form validate-form">

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
                                  required onChange={this.onChangeDiscription}
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

<center>


                                                    <div class="form-group form-button">

                                                        
                                                        <input type="submit" name="signup" id="updateButton" class="btn btn-success" style={{ display: "block", paddingRight:"60px" , paddingLeft:"60px", marginTop:"30px"}} value="Update" />
                                                        <Link to="/account" > <input type="button" name="signup" id="resetupdate" style={{ display: "block", padding:"10px"  ,marginTop:"30px"}} class="btn btn-danger" value="Cancel" /></Link>


                                                    </div>
                                                    </center>


                                                </form>
                                            </div>
                                            


                                            

                                        </div>

                                    </div>
                                </section>
                            </div>

                        </Grid>

                        {/* Update ends */}



                    </Grid>

                  
                </div>


 {/* pdf generator divs */}

               <Footer/></div>



        )





    }





} 