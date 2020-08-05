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
                    <a class="navbar-brand"><img src="https://img.icons8.com/cotton/64/000000/party-baloons.png"/> Event
                        Planner</a>
                    <button className={"navbar-toggler"} type={"button"} data-toggle={"collapse"}
                            data-target={"#navbarResponsive"}>
                        <span className={"navbar-toggler-icon"}></span>
                    </button>
                    <div className={"collapse navbar-collapse"} id={"navbarResponsive"}>

                        <ul className={"navbar-nav ml-auto"}>
                            <li class={"nav-item"}>
                                <a className={"nav-link"} href={"#"}><Link to={"/"}><h4>Home</h4></Link></a>

                            </li>

                            <li class={"nav-item"}>
                                <a className={"nav-link"} href={"#"}><Link to={"/account"}><h4>Dashboard</h4></Link></a>

                            </li>
                            <li className={"nav-item"}>
                                <Link to={"/events"}> <a className={"nav-link"} href={"#"}><h4>My Bookings</h4></a></Link>

                            </li>

                            <li className={"nav-item"}
                               >
                                <Link to={"/hostevent"}> <a className={"btn btn-warning"} href={"#"}><h3>Host an
                                    Event</h3></a> </Link>

                            </li>

                            <li className="nav-item dropdown">


                                <a
                                    aria-expanded="false"
                                    aria-haspopup="true"
                                    className="nav-link dropdown-toggle"
                                    data-toggle="dropdown"
                                    href="#"
                                    id="navbarDropdownMenuLink"
                                >
                                    <h5><b><i className="fas fa-user-circle"/> Account</b></h5>

                                </a>

                                <div
                                    aria-labelledby="navbarDropdownMenuLink"
                                    className="dropdown-menu"
                                    style={{marginLeft: -40}}
                                >


                                    

                                </div>
                            </li>

                        </ul>
                    </div>


                </div>


            </nav>


        )


    }


}
