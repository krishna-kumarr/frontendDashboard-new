import React from "react";
import { Navbar } from "./Navbar";
import "./Home-css/Home.css"

export const Home = () =>{

    return(
        <>
            <section className="col-12 vh-100 home-bg">
                <Navbar/>
                <div className="container-fluid">
                    <div className="row justify-content-center align-items-center home-content">
                        <div className="col-12 col-md-10 col-lg-5 text-center">
                            <h1>Welcome To</h1>
                            <p>Frontend Development dashboard</p>
                        </div>
                    </div>
                </div>      
            </section>
        </>
    )
}