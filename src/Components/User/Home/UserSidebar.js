import React from "react";
import "./user-home-css/Sidebar.css"
import { AiTwotoneHome } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { SiTask } from "react-icons/si";
import { IoExitSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";


export const UserSidebar = () =>{
    const pageRender = useNavigate()

    return(
        <>
            <div className="sidebar" id="sidebar">
                {/* main content  */}
                <div className="container">
                    <div className="logo py-4">
                        <div className="col-12 text-center logo-content">
                            <p className="m-0 fw-bold">Front End</p>
                        </div>
                    </div>

                    {/* sidebar main menu */}
                    <div className="mt-5">
                        <ul className="nav nav-pills mb-3">
                            <li className="logo-content">
                                <p className="fw-bold">Quick Links</p>
                            </li>
                            {/* user/home-page */}
                            <li className="nav-item p-0 my-2 col-12" role="presentation" onClick={()=>pageRender("/user/home-page")}>
                                <div className="nav-link user-sidebar-link logo ps-3">
                                    <div className="col-3 logo-icon">
                                        <AiTwotoneHome className="fs-4"/>
                                    </div>
                                    <div className="col-9 ps-3 logo-content">
                                        <p className="m-0">Home</p>
                                    </div>
                                </div>
                            </li>

                            <li className="nav-item p-0 my-2 user-sidebar-link col-12" role="presentation" onClick={()=>pageRender("/user/peoples")}>
                                <div className="nav-link logo ps-3">
                                    <div className="col-3 logo-icon">
                                        <CgProfile className="fs-4"/>
                                    </div>
                                    <div className="col-9 ps-3 logo-content">
                                        <p className="m-0">People</p>
                                    </div>
                                </div>
                            </li>

                            <li className="nav-item p-0 my-2 user-sidebar-link col-12" role="presentation" onClick={()=>pageRender("/user/timeline")}>
                                <div className="nav-link logo ps-3">
                                    <div className="col-3 logo-icon">
                                        <SiTask className="fs-4"/>
                                    </div>
                                    <div className="col-9 ps-3 logo-content">
                                        <p className="m-0">Timeline</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* logOut */}
                <div className="log-out logo justify-content-evenly" onClick={()=> pageRender("/user/signIn")}>
                    <div className="col-3 logo-icon">
                        <IoExitSharp className="fs-2"/>
                    </div>
                    <div className="col-6 ps-4 logo-content">
                        <p className="m-0">Log out</p>
                    </div>
                </div>
            </div>
        </>
    )
}