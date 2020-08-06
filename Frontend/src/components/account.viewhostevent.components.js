import React, { Component } from 'react';

import axios from 'axios';
import Navbar from "./account.navbar.componrnt";
import Footer from "./footer.component";

import swal from 'sweetalert';
import Swal from 'sweetalert2';
import { Grid } from '@material-ui/core';
import config from '../configure';



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
        this.onChangeName = this.onChangeName.bind(this)
        this.uploadImage = this.uploadImage.bind(this)
        this.showImage = this.showImage.bind(this)     
        this.getHost = this.getHost.bind(this)






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

        this.getOrders();
        this.getProduct();


    }

    //get the product details

    getHost() {
      
        axios.get(`http://${config.host}:${config.port}/account/host/view/` + this.props.match.params.id, {
         
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
                    <h6 style={{ color: "#78909C" }}><i class="fas fa-info-circle"></i>  Store Manager Portal / Products / View Product</h6>
                </div>

                {/* cards */}
                <div clss="Managercard" id="tab-cards">
                    <div className="managerStat">
                        <div
                            className="container "
                            style={{ padding: '15px' }}
                        >
                            <div className="row">
                                <div className="col-md-3">
                                    <div className="card-counter primary">
                                        <i class="fas fa-shopping-cart"></i>
                                        <span className="count-numbers">{this.state.orders.length}</span>
                                        <span className="count-name"> Purchase Orders</span>
                                    </div>
                                </div>

                                <div className="col-md-3">
                                    <div className="card-counter danger">
                                        <i className="fas fa-dollar-sign" />
                                        <span className="count-numbers">Rs. {this.state.price * this.state.orders.length}</span>
                                        <span className="count-name"> Product Revenue</span>
                                    </div>
                                </div>

                                <div className="col-md-3">
                                    <div className="card-counter success">
                                        <i class="fas fa-comments"></i>
                                        <span className="count-numbers">{this.state.commentArray.length}</span>
                                        <span className="count-name"> User Comments</span>
                                    </div>
                                </div>

                                <div className="col-md-3">
                                    <div className="card-counter" style={{ backgroundColor: "#FFC107" }}>
                                        <i class="fas fa-star-half-alt"></i>
                                        <span className="count-numbers">{this.state.rating.length}</span>
                                        <span className="count-name"> Rates</span>
                                    </div>
                                </div>
                            </div>
                        </div>



                    </div>
                </div>

                {/* cards end */}

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
                                                <h2 style={{ paddingBottom: "60px" }}
                                                    class="form-title">Update Product</h2>
                                                <form class="register-form" onSubmit={this.onSubmit}>
                                                    {/* product code */}
                                        Product Code
                                        <div class="form-group">
                                                        <label for="code"><i class="zmdi zmdi-tag-more"></i></label>
                                                        <input type="text" onChange={this.onChangeProductCode} value={this.state.productCode} required name="code" id="productCode" placeholder="ex : P001" />
                                                    </div>
                                                    {/* product name */}
                                        Product Name
                                        <div class="form-group">
                                                        <label for="name"><i class="zmdi zmdi-info-outline"></i></label>
                                                        <input type="text" name="name" id="productName" placeholder="Product Name" onChange={this.onChangeProductName} value={this.state.productName} required />
                                                    </div>

                                                    {/* category */}
                                                    <div class="form-group" id="category">
                                                        Category
                                <div class="input-group mb-3" >
                                                            <div class="input-group-prepend">
                                                                <label class="input-group-text" for="categoryName"></label>
                                                            </div>
                                                            <select ref="ctegoryInput" class="custom-select" id="categoryName"
                                                                value={this.state.categoryName}
                                                                onChange={this.onChangeCategoryName}

                                                            >
                                                                <option value="">Choose a Category</option>




                                                                {
                                                                    this.state.categories.map(category => {
                                                                        return <option value={category}>{category}</option>;

                                                                    })




                                                                }

                                                            </select>
                                                        </div>
                                                    </div>
                                                    {/* price */}
                                        Price
                                        <div class="form-group">

                                                        <label for="price"><i class="zmdi zmdi-money-box"></i></label>
                                                        <input type="text" name="name" id="price" placeholder="Product Price" onChange={this.onChangePrice} value={this.state.price} required />
                                                    </div>
                                                    {/* color */}
                                        Color
                                        <div class="form-group" >
                                                        <label for="color"><i class="zmdi zmdi-format-color-fill"></i></label>
                                                        <input type="text" name="name" id="color" placeholder="Product Color" onChange={this.onChangeColor} value={this.state.color} required />
                                                    </div>
                                                    {/* size */}Size
                                        <div class="form-group">
                                                        <label for="size"><i class="zmdi zmdi-fullscreen-alt"></i></label>
                                                        <input type="text" name="size" id="productName" placeholder="Product Size" onChange={this.onChangeSize} value={this.state.size} required />
                                                    </div>
                                                    {/* quantity */}
                                        Stock Quantity
                                        <div class="form-group">
                                                        <label for="quantity"><i class="zmdi zmdi-storage"></i></label>
                                                        <input type="text" name="name" id="quantity" placeholder="Product Quantity" onChange={this.onChangeQuantity} value={this.state.quantity} required />
                                                    </div>

                                                    {/* discount */}
                                        Discount ( % )
                                        <div class="form-group">
                                                        <label for="discount"><i class="zmdi zmdi-label"></i></label>
                                                        <input type="text" name="name" id="discount" placeholder="Product Discount ( Do not enter % sign at the end )" onChange={this.onChangeDiscount} value={this.state.discount} />
                                                    </div>

                                                    {/* discription */}
                                        Description
                                        <div class="form-group">
                                                        <label for="discription"></label>
                                                        <textarea name="name" id="discription"
                                                            rows="10" cols="35"
                                                            placeholder="Product Discription" onChange={this.onChangeDiscription} value={this.state.description} />
                                                    </div>



                                                    <div class="form-group form-button">

                                                        <a onClick={resetButtons}> <input type="button" name="signup" id="resetupdate" style={{ display: "none" }} class="btn btn-danger" value="Cancel" /></a>
                                                        <input type="submit" name="signup" id="updateButton" class="form-submit" style={{ display: "none" }} value="Update" />


                                                    </div>


                                                </form>
                                            </div>
                                            <div class="signup-image">




                                                <div className="shadow-box-example z-depth-5" style={{ backgroundImage: "linear-gradient(to bottom right, #ECEFF1, #FAFAFA)", padding: "20px" }}>
                                                    <button class="btn btn-outline-info" style={{ margin: "5px", marginLeft: "85%", }} onClick={this.showHelp}><i class="zmdi zmdi-help"></i></button>
                                                    <h5><i class="zmdi zmdi-image-alt"></i> Image Settings</h5>
                                                    <div className="input-group">

                                                        <div className="input-group-prepend" >


                                                        </div>
                                                        
                                                           
                                                       
                                                    </div><br />

                                                </div>

                                                <figure>



                                                </figure>


                                            </div>

                                        </div>

                                    </div>
                                </section>
                            </div>

                        </Grid>

                        {/* Update ends */}



                    </Grid>

                    <Grid
                        container
                        spacing={0}
                    >
                        <Grid
                            item
                            lg={6}
                            sm={6}
                            xl={6}
                            xs={12}
                        >
                            {/* orders */}

                            <div className="container" style={{ marginTop: -200 }} id="tab1" >

                                <h1>Orders</h1>
                                <table className="table" style={{ color: "#546E7A" }}>

                                    <thead style={{ color: "#3F51B5" }}>
                                        <tr>

                                            <th scope="col">Oder ID</th>
                                            <th scope="col">User ID</th>
                                            <th scope="col">Date</th>
                                            <th scope="col">Payment Method</th>



                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.orderList()}
                                    </tbody>
                                </table>
                            </div>


                        </Grid>

                        <Grid
                            item
                            lg={6}
                            sm={6}
                            xl={6}
                            xs={12}
                        >
                            {/* Coments */}

                            <div className="container" style={{ marginTop: -5, backgroundColor: "#29B6F6" }} id="tab2" >

                                <h1>Comments</h1>
                                <table className="table" style={{ color: "white" }}>

                                    <thead style={{ color: "#3F51B5" }}>

                                    </thead>
                                    <tbody>
                                        {this.CommentList()}
                                    </tbody>
                                </table>
                            </div>


                        </Grid>




                    </Grid>
                </div>


 {/* pdf generator divs */}

               <Footer/></div>



        )





    }





} 