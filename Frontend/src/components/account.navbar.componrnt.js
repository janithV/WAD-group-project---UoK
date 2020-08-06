import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Swal from 'sweetalert2'

// create pdfs


export default class Navbar extends Component {

    constructor(props) {

        super(props);
     

    }

    //handle log out

  

    render() {

        return (
            <nav className="navbar navbar-expand-md navbar-light bg-light sticky-top">
                <div className={"container-fluid"}>
                     <h3>IBACK ENTERTAINMENT</h3>
                    <button className={"navbar-toggler"} type={"button"} data-toggle={"collapse"}
                            data-target={"#navbarResponsive"}>
                        <span className={"navbar-toggler-icon"}></span>
                    </button>
                    <div className={"collapse navbar-collapse"} id={"navbarResponsive"}>

                        <ul className={"navbar-nav ml-auto"}>
                            <li class={"nav-item"}>
                                <a className={"nav-link"} href={"#"}><Link to={"/"}><h4><i class="fas fa-home"></i> Home</h4></Link></a>

                            </li>

                            <li class={"nav-item"}>
                                <a className={"nav-link"} href={"#"}><Link to={"/account"}><h4><i class="zmdi zmdi-view-dashboard"></i> Dashboard</h4></Link></a>

                            </li>
                            {/* <li className={"nav-item"}>
                                <Link to={"/bookings"}> <a className={"nav-link"} href={"#"}><h4><i class="zmdi zmdi-ticket-star"></i> My Bookings</h4></a></Link>

                            </li> */}

                            <li className={"nav-item"}>
                                <Link to={"/account/host"}> <a className={"btn btn-warning"} href={"#"}><h3><i class="fas fa-glass-cheers"></i> Host an
                                    Event</h3></a> </Link>

                            </li>

                            <li className={"nav-item"}>
                                <Link to={"/profile"}> <a className={"nav-link"} href={"#"}><h3><i class="fas fa-user-circle"></i> Profile</h3></a> </Link>

                            </li>


                           

                        </ul>
                    </div>


                </div>


            </nav>


        )


    }


}
