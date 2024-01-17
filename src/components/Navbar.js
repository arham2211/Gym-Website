import React from 'react'
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

export default function Navbar() {


    const redStyle = {
        color: '#e31c25'
    };
    return (

        <div id="navBar" className="position-absolute">
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <Link id="gym" to="/home" className="navbar-brand mx-5 mt-1">
                        <h1 className="m-0 display-2 font-weight-bold text-uppercase text-white">gy<span style={redStyle}>m</span><i className="fa-solid fa-dumbbell" style={redStyle}></i></h1>
                    </Link>
                    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-5 me-auto mb-2 mb-lg-0 text-uppercase">
                            <li className="nav-item">
                                <NavLink className="nav-link home" activeClassName="active" exact to="/home">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" activeClassName="active" to="/about">
                                    About Us
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" activeClassName="active" to="/features">
                                    Features
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" activeClassName="active" to="/contact">
                                    Contact
                                </NavLink>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    )
}
