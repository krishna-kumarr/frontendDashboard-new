import React, { useEffect } from "react";
import "./Admin-css/AdminSidebar.css"
import { AiTwotoneHome } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { SiTask } from "react-icons/si";
import { IoExitSharp } from "react-icons/io5";
import { FaShieldVirus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


export const Sidebar = () =>{
    const pageRender = useNavigate()

    return(
        <>
           <div className="sidebar overflow-hidden" id="sidebar">
            {/* main content  */}
            <div className="container">
                <div className="logo py-4">
                    <div className="col-12 text-center logo-content">
                        <p className="m-0 fw-bold">Front End</p>
                    </div>
                </div>

                {/* sidebar main menu */}
                <div className="mt-5">
                    <ul className="nav nav-pills mb-3" >
                        <li className="logo-content">
                            <p className="fw-bold">Quick Links</p>
                        </li>
                        <li className="nav-item p-0 my-2 col-12" onClick={()=>pageRender("/admin-home")}>
                            <div className="nav-link logo ps-3">
                                <div className="col-3 logo-icon">
                                    <AiTwotoneHome className="fs-4"/>
                                </div>
                                <div className="col-9 ps-3 logo-content">
                                    <p className="m-0">Dashboard</p>
                                </div>
                            </div>
                        </li>

                        <li className="nav-item p-0 my-2 col-12" onClick={()=>pageRender("/admin-home/user")}>
                            <div className="nav-link logo ps-3">
                                <div className="col-3 logo-icon">
                                    <CgProfile className="fs-4"/>
                                </div>
                                <div className="col-9 ps-3 logo-content">
                                    <p className="m-0">Users</p>
                                </div>
                            </div>
                        </li>

                        <li className="nav-item p-0 my-2 col-12" onClick={()=>pageRender("/admin-home/time-line")}>
                            <div className="nav-link logo ps-3" >
                                <div className="col-3 logo-icon">
                                    <SiTask className="fs-4"/>
                                </div>
                                <div className="col-9 ps-3 logo-content">
                                    <p className="m-0">Time line</p>
                                </div>
                            </div>
                        </li>

                        <li className="nav-item p-0 my-2 col-12" onClick={()=>pageRender("/admin-home/security-practice")}>
                            <div className="nav-link logo ps-3" >
                                <div className="col-3 logo-icon">
                                    <FaShieldVirus className="fs-4"/>
                                </div>
                                <div className="col-9 ps-3 logo-content">
                                    <p className="m-0">Security pactices</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>

            </div>

            {/* logOut */}
            <div className="log-out logo justify-content-evenly" onClick={()=>pageRender("/admin/login")}>
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