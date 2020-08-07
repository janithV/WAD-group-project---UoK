import React, { Component } from 'react';

import axios from 'axios';
import Navbar from "./account.navbar.componrnt";
import Footer from "./footer.component";

import swal from 'sweetalert';
import Swal from 'sweetalert2';
import { Grid } from '@material-ui/core';
import config from '../configure';
import TextField from '@material-ui/core/TextField';



let reset = false;

//set update calcel button( view or hide)
function showUpdate() {
    var updatebutton = document.getElementById("updateButton");
    var enableupdate = document.getElementById("enableupdate");
    var resetupdate = document.getElementById("resetupdate");
    var preview = document.getElementById("preview");

    var previewBox = document.getElementById("previewBox");
    var updateBox = document.getElementById("updateBox");

    if (updatebutton.style.display === "none") {
        updatebutton.style.display = "block";
        resetupdate.style.display = "block";
        enableupdate.style.display = "none";
        preview.style.display = "block";

        previewBox.style.display = "none";
        updateBox.style.display = "block";



    } else {
        updatebutton.style.display = "none";
        enableupdate.style.display = "block";
        resetupdate.style.display = "none";
        preview.style.display = "none";




    }
}
//set update calcel button( view or hide)
function resetButtons() {

    window.location.reload(false);



    reset = true;
    var preview = document.getElementById("preview");


    var updatebutton = document.getElementById("updateButton");
    var enableupdate = document.getElementById("enableupdate");
    var resetupdate = document.getElementById("resetupdate");
    var previewBox = document.getElementById("previewBox");
    var updateBox = document.getElementById("updateBox");



    updatebutton.style.display = "none";
    enableupdate.style.display = "block";
    resetupdate.style.display = "none";

    preview.style.display = "none";

    previewBox.style.display = "block";
    updateBox.style.display = "none";

}






export default class ViewHEvent extends Component {

    constructor(props) {

        super(props);

       
    
       
        this.onChangeDiscription = this.onChangeDiscription.bind(this)
      
        this.uploadImage = this.uploadImage.bind(this)
        this.showImage = this.showImage.bind(this)     
        this.getEvent = this.getEvent.bind(this)






        this.state = {

            productCode: '',
            categoryName: '',
            productName: '',
            price: null,
            color: '',
            size: '',
            quantity: null,
            discount: null,
            description: '',
            rating: [],
            comment: [],
            categories: [],
            image: null,
            photo: null,
            NewUpload: false,
            uploadedimg: null,
            uploadPercentage: 0,
            createdDate: null,
            orders: [],

            commentArray: [],
            newimage: null


        }
    }


    componentDidMount() {

     
        this.getEvent();


    }

    //get the product details

    getEvent() {
      
        axios.get(`http://${config.host}:${config.port}/events/` + this.props.match.params.id, {
         
        }).then(res => {


            this.setState({

                productCode: res.data.data.productCode,
                commentArray: res.data.data.comment,
                productName: res.data.data.productName,
                price: res.data.data.price,
                color: res.data.data.color,
                categoryName: res.data.data.categoryName,
                discount: res.data.data.discount,
                quantity: res.data.data.quantity,
                description: res.data.data.description,
                size: res.data.data.size,
                rating: res.data.data.rating,

                newimage: res.data.data.image,
                uploadedimg: res.data.data.image,
                image: res.data.data.image,

                createdDate: res.data.data.createdAt.substring(0, 10)



            })

            reset = false;
        }).catch(err => {
            console.log(err);


        })
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

       








        axios.post('http://localhost:4000/product/update/' + this.props.match.params.id, product, 
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

                        resetButtons();





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

                        <Grid id="previewBox"
                            item
                            lg={12}
                            sm={12}
                            xl={12}
                            xs={12}
                        >


                            <div class="main" id="profile">



                                <section class="signup">
                                    <div class="container" id="previewContainer" style={{ paddingBottom: "55px", paddingTop: "55px" }}>
                                        <div id="preview" style={{ display: "none" }}><center><h1 class="form-title">Preview</h1></center></div>

                                        <div class="signup-content">
                                            <div class="signup-form" style={{ margin: "20px" }}>
                                                <h2 class="form-title">Product Details</h2>
                                                <form class="register-form" onSubmit={this.onSubmit}>
                                                    {/* product code */}
                                                    <text style={{ fontSize: "30px" }}>
                                                        <div class="form-group" style={{ padding: "15px" }}>
                                                            <h6>Product Code</h6>
                                                            {this.state.productCode}
                                                        </div>
                                                        {/* product name */}
                                                        <div class="form-group" style={{ paddingLeft: "15px" }}>
                                                            <h6>Product Name</h6>
                                                            {this.state.productName}
                                                        </div>

                                                        <div class="form-group" style={{ paddingLeft: "15px" }}>
                                                            <h6>Product Price</h6>
                                                            {this.state.price}
                                                        </div>

                                                        <div class="form-group" style={{ paddingLeft: "15px" }}>
                                                            <h6>Product Color</h6>
                                                            {this.state.color}
                                                        </div>
                                                        <div class="form-group" style={{ paddingLeft: "15px" }}>
                                                            <h6>Product Category</h6>
                                                            {this.state.categoryName}
                                                        </div>
                                                        <div class="form-group" style={{ paddingLeft: "15px" }}>
                                                            <h6>Product Discount</h6>
                                                            {this.state.discount} {this.state.discount ? "%" : this.state.discount==0 ?"%": "0%"}
                                                        </div>
                                                        <div class="form-group" style={{ paddingLeft: "15px" }}>
                                                            <h6>Available Quantity</h6>
                                                            <text style={{ color: this.state.quantity < 20 ? "red" : "green" }}>  {this.state.quantity}</text>
                                                        </div>
                                                        <div class="form-group" style={{ paddingLeft: "15px" }}>
                                                            <h6>Product Size</h6>
                                                            {this.state.size}
                                                        </div>
                                                    </text>

                                                    <br />
                                                    <b>Created Date :  </b>{this.state.createdDate}<br />


                                                    {/* category */}



                                                </form>
                                            </div>
                                            <div class="signup-image">






                                                <figure>
                                                    <h4>Product Image</h4>
                                                    <img id="imageSrc" src={this.state.newimage ? this.state.newimage : "https://res.cloudinary.com/fashionistaimage/image/upload/v1590072616/g2i7hkrkxfiub2kdvfy8.gif"} style={{ width: "95%" }} alt="Product image" />
                                                    <br /> <br /><br />
                                                  
                                                    <br />
                                                    <h4>Product Description</h4>


                                                </figure>
                                                <div class="form-group" style={{ paddingLeft: "15px" }}>

                                                    {this.state.description}
                                                </div>

                                                <div id="avoid1">
                                                    <input type="button" name="signup" id="enableupdate" onClick={showUpdate} class="btn btn-primary" value="Enable Editing" /></div>


                                            </div>

                                        </div>

                                    </div>
                                </section>
                            </div>

                        </Grid>

                        {/* second Update */}

                        <Grid id="updateBox" style={{ display: "none" }}
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

<center>


                                                    <div class="form-group form-button">

                                                        
                                                        <input type="submit" name="signup" id="updateButton" class="btn btn-success" style={{ display: "none", paddingRight:"60px" , paddingLeft:"60px", marginTop:"30px"}} value="Update" />
                                                        <a onClick={resetButtons}> <input type="button" name="signup" id="resetupdate" style={{ display: "none", padding:"10px"  ,marginTop:"30px"}} class="btn btn-danger" value="Cancel" /></a>


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