import React, { useState } from "react";
import { Navbar } from "../../Home/Navbar";
import "../../Home/Home-css/Home.css";

import "../Signin/Signin.css"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateUserAccessTimeLineArray, updateUsersArray } from "../../Redux/Redux";


export const Register = () =>{
    const State = useSelector(
        ({data})=>data
    )

    const dispatch = useDispatch()
    const pageRender = useNavigate()
    const [err,setErr] = useState(false)
    const [errType,setErrType]=useState("")
    const [regData,setRegData]=useState({
        firstName:'',
        lastName:'',
        userName:'',
        email:'',
        password:'',
        confirmPassword:'',
        dateOfJoining:'',
        lastOnline:'',
        dateOfBirth:'',
        gender:'',
        socialMediaLinks:[],
        mobileNumber:'',
        requesToAdmin:"processing",
        friendsArrayData:[],
        friendsArray:[],
        message:[]
    })




    const handleRegisterIP = (event) =>{
        setRegData({...regData,[event.target.name]:event.target.value,dateOfJoining:String(new Date()),id:State.usersArray.length,lastOnline:String(new Date())})
    }
    const handleSubmitData = () =>{

        var addUsers = [...State.usersArray]
        var userAccessTimeLineArray = [...State.userAccessTimeLineArray]

        if(regData.firstName!=="" && regData.lastName!=="" && regData.userName!=="" && regData.email!=="" && regData.password!=="" && regData.confirmPassword!==""){
            if(regData.password===regData.confirmPassword){
                if(State.usersArray.length > 0){
                    var checkEmailexist = addUsers.filter((v,i)=>{
                        return v.email===regData.email
                    })
                    if(checkEmailexist.length === 0){
                        var checkUserNameexist = addUsers.filter((v,i)=>{
                            return v.userName===regData.userName
                        })
                        if(checkUserNameexist.length === 0){
                            if(State.timelineArray.length>0){
                                const timeline = [...State.timelineArray]
                                var obj={username:"",TimeLineCharts:[],overallPerformance:0}
                                for(var j=0;j<timeline.length;j++){
                                    var spread={...obj}
                                    spread.username=regData.userName       
                                    spread.TimeLineCharts.push(timeline[j])
                                }
                             
                                userAccessTimeLineArray[userAccessTimeLineArray.length]=spread
                                console.log(userAccessTimeLineArray)
                                dispatch(updateUserAccessTimeLineArray(userAccessTimeLineArray))
                            }
                            addUsers[addUsers.length]=regData
                            dispatch(updateUsersArray(addUsers))
                            alert("registration success")
                            pageRender("/user/signIn")
                        }
                        else{
                            setErrType("User name already exist")
                            setErr(true)

                            setTimeout(()=>{
                                setErr(false)
                                setErrType("")
                            },2000)
                        }
                    }
                    else{
                        setErrType("Email id already exist")
                        setErr(true)

                        setTimeout(()=>{
                            setErr(false)
                            setErrType("")
                        },2000)
                    }
                }
                else{
                    //setuser timeline     
                    if(State.timelineArray.length>0){
                        const timeline = [...State.timelineArray]
                        var obj={username:"",TimeLineCharts:[],overallPerformance:0}
                        for(var j=0;j<timeline.length;j++){
                            var spread={...obj}
                            spread.username=regData.userName  
                            spread.TimeLineCharts.push(timeline[j])
                        }
                     
                        userAccessTimeLineArray[userAccessTimeLineArray.length]=spread
                        console.log(userAccessTimeLineArray)
                        dispatch(updateUserAccessTimeLineArray(userAccessTimeLineArray))
                    }
                    addUsers[addUsers.length]=regData
                    dispatch(updateUsersArray(addUsers))
                    alert("registration success")
                    pageRender("/user/signIn")
                }
            }
            else{
                setErrType("password and confirm password are not matching")
                setErr(true)

                setTimeout(()=>{
                    setErr(false)
                    setErrType("")
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

    return(
        <>
            <section className="col-12 vh-100 home-bg">

                <Navbar/>

                <div className="container-fluid">
                    <div className="row align-items-center home-height">
                        <div className="col-12 col-md-6 p-5 leftSide-signin">
                            <div className="col-12 text-center">
                                <h1 className="col-12">Register</h1>
                            </div>
                            <form className="col-12 col-md-10 d-flex flex-wrap">
                                {err && errType!=="" ? <p className="text-danger col-12 text-center">{errType}</p> : null}
                                <div className="col-12 col-md-6 form-element p-3">
                                    <label htmlFor="fname">First name</label>
                                    <input className="col-12" type="text" id="fname" name="firstName" onChange={handleRegisterIP}/>
                                    {err && regData.firstName==="" ? <p className="text-danger m-0 mt-3">First name required</p> : null}

                                </div>

                                <div className="col-12 col-md-6 form-element p-3">
                                    <label htmlFor="lname">Last name</label>
                                    <input className="col-12" type="text" id="lname" name="lastName" onChange={handleRegisterIP}/>
                                    {err && regData.lastName==="" ? <p className="text-danger m-0 mt-3">Last name required</p> : null}

                                </div>

                                <div className="col-12 col-md-6 form-element p-3">
                                    <label htmlFor="username">Username</label>
                                    <input className="col-12" type="text" id="username" name="userName" onChange={handleRegisterIP}/>
                                    {err && regData.userName==="" ? <p className="text-danger m-0 mt-3">username required</p> : null}

                                </div>

                                <div className="col-12 col-md-6 form-element p-3">
                                    <label htmlFor="email">Email</label>
                                    <input className="col-12" type="email" id="email" name="email" required onChange={handleRegisterIP}/>
                                    {err && regData.email==="" ? <p className="text-danger m-0 mt-3">email id required</p> : null}

                                </div>

                                <div className="col-12 col-md-6 form-element p-3">
                                    <label htmlFor="pass">Password</label>
                                    <input className="col-12" type="text" id="pass" name="password" onChange={handleRegisterIP}/>
                                    {err && regData.password==="" ? <p className="text-danger m-0 mt-3">password required</p> : null}

                                </div>

                                <div className="col-12 col-md-6 form-element p-3">
                                    <label htmlFor="cnfpass">Confirm password</label>
                                    <input className="col-12" type="password" id="cnfpass" name="confirmPassword" onChange={handleRegisterIP}/>
                                    {err && regData.confirmPassword==="" ? <p className="text-danger m-0 mt-3">confirm password required</p> : null}

                                </div>

                                <div className="col-12 form-element py-3 text-center form-button">
                                    <button className="col-5" type="button" onClick={handleSubmitData}>Register</button>
                                </div>

                                <div className="col-12 py-3 d-flex flex-wrap">
                                    <div className="col-12">
                                        <span>
                                            Already have an account...! <span className="ps-2 register" onClick={()=>pageRender("/user/signIn")}>Login</span>
                                        </span>
                                    </div>
                                </div>
                            </form>
                        </div>

                        <div className="d-none d-md-block col-md-6 rightSide-signIn">
                            <div className="rightSide-content">
                                <div className="col-12 text-center">
                                    <h1>Welcome to User Register page</h1>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>      
            </section>
        </>
    )
}