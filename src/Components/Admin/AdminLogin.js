import React, { useState } from "react";
import { Navbar } from "../Home/Navbar";
import "../Home/Home-css/Home.css";
import "../User/Signin/Signin.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateAdminLogin } from "../Redux/Redux";

export const AdminLogin = () =>{
    const State = useSelector(
        ({data})=>data
    )


    const pageRender = useNavigate()
    const [admin,setAdmin]=useState({
        adminUsername:'',
        adminPassword:''

    })
    const [err,setErr]=useState(false)
    const [mismatch,setMismatch]=useState(false)
    const [forgotBox,setForgotBox]=useState(false)
    const dispatch=useDispatch()



    // getting input from user and validating
    const handleAdminInput = (event) =>{
        setAdmin({...admin,[event.target.name]:event.target.value})
    }
    const handleValidation = () =>{
        if(admin.adminUsername!=="" && admin.adminPassword!==""){
            var validate = State.Admin.filter((v,i)=>{
                return v.adminUsername===admin.adminUsername && v.adminPassword===admin.adminPassword
            })
            if(validate.length!==0){
                dispatch(updateAdminLogin(admin.adminUsername))
                pageRender("/admin-home")
            }
            else{
                setMismatch(true)
                setTimeout(()=>{
                    setMismatch(false)
                },2000)
            }    
        }
        else{
            setErr(true)
        }
    }
    
    //forgot password modal box
    const handleForgotBox = () =>{
        setForgotBox(true)
    }

    return(
        <>
            <section className="col-12 vh-100 home-bg">
                <Navbar/>
                <div className="container-fluid">
                    <div className="row align-items-center home-height">
                        <div className="col-12 col-md-6 p-5 leftSide-signin">
                            <div className="col-12 text-center">
                                <h1 className="col-12">Sign in</h1>
                            </div>
                            <form className="col-12 col-md-6 d-flex flex-wrap">
                                {mismatch ? <p className="text-danger pt-2 m-0 text-center col-12">Admin Id or password is incorrect</p> : null}

                                <div className="col-12 form-element py-3">
                                    <label htmlFor="username">Username</label>
                                    <input className="col-12" type="text" id="username" name="adminUsername" onChange={handleAdminInput}/>
                                    {err && admin.adminUsername==="" ? <p className="text-danger pt-2 m-0">Admin id required</p> : null}
                                </div>

                                <div className="col-12 form-element py-3">
                                    <label htmlFor="password">password</label>
                                    <input className="col-12" type="password" id="password" name="adminPassword" onChange={handleAdminInput}/>
                                    {err && admin.adminPassword==="" ? <p className="text-danger pt-2 m-0">Admin password required</p> : null}
                                </div>

                                <div className="col-12 form-element py-3 text-center form-button">
                                    <button className="col-5" type="button" onClick={handleValidation}>Log in</button>
                                </div>

                                <div className="col-12 py-3 d-flex flex-wrap">
                                    <div className="col-6">
                                        <input type="checkbox"/>
                                        <span className="ps-2">Remember me</span>
                                    </div>

                                    <div className="col-6 text-end">
                                        <a className="text-decoration-none text-secondary" href="#" onClick={handleForgotBox}>Forgot password..?</a>
                                    </div>
                                </div>
                            </form>
                        </div>

                        <div className="d-none d-md-block col-md-6 rightSide-signIn">
                            <div className="rightSide-content">
                                <div className="col-12 text-center">
                                    <h1>Welcome to Admin Login page</h1>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>      
            </section>

            {
                forgotBox ? 
                    <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="false">
                        <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                            </div>
                            <div class="modal-body">
                            ...
                            </div>
                            <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                        </div>
                    </div>
                :
                    null
            }
        </>
    )
}