import React, {Fragment} from 'react'
import './nbmain.scss'
import logo from './Navbarimgs/logo.png'
import {NavLink} from "react-router-dom";
import NavBarSearch from "./NavBarSearch/NavBarSearch";
import{RiMessage2Line} from 'react-icons/all'
const MainNavbar = () => {
    let c1="navbar_font"
    let c2 = "active_"
    let classesNew  =c1 + " "+c2

    return (
        <nav className="navbar navbar-expand-lg navbar_ ">
            <NavLink className="navbar-brand navbar_font" to="#">
                <img src={logo} width="50" height="50"
                     className="d-inline-block" alt=""/> Student collaboration platform
            </NavLink>


            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav mr-auto">
                    <li>
                      <NavBarSearch/>
                    </li>
                </ul>
                <ul className="navbar-nav ml-auto navbar_font">
                    <li className="nav-item">
                        <NavLink className="nav-link navbar_font" to="/main">Home <span className="sr-only">(current)</span></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link navbar_font" to="#">Get help <span className="sr-only">(current)</span></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link navbar_font" to="#">Recieve help<span className="sr-only">(current)</span></NavLink>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle navbar_font" href="#" id="navbarDropdownMenuLink"
                           data-toggle="dropdown" aria-haspopup="false" aria-expanded="false">
                            Profile
                        </a>
                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default MainNavbar