import React, { useState } from "react";
import { Navbar } from "../../Home/Navbar";
import "../../Home/Home-css/Home.css"
import "./Signin.css"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateUsersArray, updateuserLogin } from "../../Redux/Redux";


export const Signin = () =>{
    const State = useSelector(
        ({data})=>data
    )
    console.log(State)


    const [loginData,setLoginData]=useState({
        username:'',
        password:''
    })
    const [err,setErr]=useState(false)
    const [errType,setErrType]=useState("")
    const pageRender = useNavigate()
    const dispatch = useDispatch()



    const handleSigninIp = (event) =>{
        setLoginData({...loginData,[event.target.name]:event.target.value})
    }

    const handleSigninValidate = () =>{
        var setDate = new Date()
        if(loginData.username!=="" && loginData.password!==""){
            var authenticate = State.usersArray.filter((v,i)=>{
                return v.userName===loginData.username && v.password===loginData.password
            })
            dispatch(updateuserLogin(authenticate))

            if(authenticate.length!==0){
                var updateTiming = State.usersArray.map((v,i)=>{
                    return v.userName===loginData.username ? {...v,lastOnline:String(new Date())} : v
                })
                dispatch(updateUsersArray(updateTiming))
                pageRender("/user/home-page")
            }
            else{
                setErrType("Invalid username or password")
                setErr(true)

                setTimeout(()=>{
                    setErrType("")
                    setErr(false)
                },2000)
            }
        }
        else{
            setErr(true)

            setTimeout(()=>{
                setErr(false)
            },2000)
        }
    }
    


    const handleForgotPassword = () =>{       
    }


    const handlePageRender = () =>{
        pageRender("/user/register")
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
                                {err && errType!=="" ? <p className="text-danger m-0 mt-3 col-12 text-center">{errType}</p> : null}
                                <div className="col-12 form-element py-3">
                                    <label htmlFor="username">Username</label>
                                    <input className="col-12" type="text" id="username" name="username" onChange={handleSigninIp}/>
                                    {err && loginData.username==="" ? <p className="text-danger m-0 mt-3">Username required</p> : null}
                                </div>

                                <div className="col-12 form-element py-3">
                                    <label htmlFor="password">password</label>
                                    <input className="col-12" type="password" id="password" name="password" onChange={handleSigninIp}/>
                                    {err && loginData.password==="" ? <p className="text-danger m-0 mt-3">password required</p> : null}

                                </div>

                                <div className="col-12 form-element py-3 text-center form-button">
                                    <button className="col-5" type="button" onClick={handleSigninValidate}>Log in</button>
                                </div>

                                <div className="col-12 py-3 d-flex flex-wrap">
                                    <div className="col-6">
                                        <input type="checkbox"/>
                                        <span className="ps-2">Remember me</span>
                                    </div>

                                    <div className="col-6 text-end">
                                        <a className="text-decoration-none text-secondary" href="#" onClick={handleForgotPassword}>Forgot password..?</a>
                                    </div>
                                </div>

                                <div className="col-12 py-3 d-flex flex-wrap">
                                    <div className="col-12">
                                        <span>
                                            Don't have an account...! <span className="ps-2 register" onClick={handlePageRender}>Sign up</span>
                                        </span>
                                    </div>
                                </div>
                            </form>
                        </div>

                        <div className="d-none d-md-block col-md-6 rightSide-signIn">
                            <div className="rightSide-content">
                                <div className="col-12 text-center">
                                    <h1>Welcome to Users Login page</h1>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>      
            </section>
        </>
    )
}