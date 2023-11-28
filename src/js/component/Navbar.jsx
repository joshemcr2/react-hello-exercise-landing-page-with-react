import React from "react";

const Navbar = () => {
    return(
    <nav className="navbar navbar-expand-lg bg-dark ">
        <div className="container-fluid ">
            <div className="space-beetween">
                <a className="navbar-brand text-light" href="#">Start Bootstrap</a>
            </div>

            <div className="row space-beetween">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarNav">
                    <ul className="navbar-nav ">
                        <li className="nav-item">
                            <a className="nav-link text-light  " href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="#">Service</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" >Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
)}

export default Navbar