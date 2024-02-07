import React from "react"
import "./Home-css/Home-navbar.css"
import { GrFirefox } from "react-icons/gr";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
    const pageRender = useNavigate()
    return(
        <>
            <nav className="navbar bg-light sticky-top nav-height px-4">
                <div className="container-fluid">
                    <div className="col-12 d-flex flex-wrap justify-content-between align-items-center">
                        {/* logo  */}
                        <div className="col-6 col-lg-3">
                            <div className="navbar-brand" onClick={()=>pageRender("/")}>
                                <GrFirefox className="fs-2"/>
                                <span>Frontend Dashboard</span>
                            </div>   
                        </div>

                        {/* menus  */}
                        <div className="col-6 col-lg-4 col-xl-2 d-none d-md-block">
                            <ul className="nav text-center">
                            <li className="col li-navbar-link dropdown">
                                    <a href="#" className="text-decoration-none" role="button" data-bs-toggle="dropdown" aria-expanded="false">Sign in</a>

                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" onClick={()=>pageRender("/admin/login")}>Admin signin</a></li>
                                        <li><a className="dropdown-item" onClick={()=>pageRender("/user/signIn")}>User signin</a></li>
                                    </ul>
                                </li>
                                <li className="col li-navbar-link">
                                    <a className="text-decoration-none">About</a>
                                </li>
                                <li className="col li-navbar-link">
                                    <a className="text-decoration-none" onClick={()=>pageRender("/contact-us")}>Contact us</a>
                                </li>
                             
                            </ul>
                        </div>

                        {/* tooge btn  */}
                        <div className="col-2 text-center d-md-none">
                            <button className="navbar-toggler border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon outline-none"></span>
                            </button>
                            <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                                <div className="offcanvas-header">
                                    <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Frontend Dashboard</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                </div>
                                <div className="offcanvas-body">
                                    <ul className="navbar-nav justify-content-start flex-grow-1 pe-3 text-start">
                                        <li className="py-2">
                                            <a className="text-decoration-none text-dark" onClick={()=>pageRender("/about")}>About</a>
                                        </li>
                                        <li className="nav-item py-2">
                                            <a className="text-decoration-none text-dark" onClick={()=>pageRender("/contact-us")}>Contact us</a>
                                        </li>
                                        <li className="nav-item py-2">
                                            <a className="text-decoration-none text-dark" onClick={()=>pageRender("/user/signIn")}>Sign in</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}