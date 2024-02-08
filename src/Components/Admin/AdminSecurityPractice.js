import React, { useEffect, useState } from "react";
import { Sidebar } from "./Sidebar";
import { Dashboard } from "./Dashboard";
import { useDispatch, useSelector } from "react-redux";
import "./Admin-css/AdminSecurityPractive.css";
import { updateSecurityPractices } from "../Redux/Redux";


export const AdminSecurityPractices = () =>{
    const State = useSelector(
        ({data})=>data
    )
    useEffect(()=>{
        document.querySelectorAll('.nav-link')[3].classList.add('active');
        console.log(State)
    },[])

    const [modelboxContent,setModelboxContent]=useState({})
    const [videoReference,setVideoReference]=useState(true)
    const [docReference,setDocReference]=useState(true)
    const [addMoreSecurity,setAddMoreSecurity]=useState({
        title:"",
        therory:"",
        videoForSolveThis:"",
        reference:""
    })
    const dispatch = useDispatch()
    const [err,setErr]=useState(false)

    const handleSecurityPracticeModel = (obj) =>{
        setModelboxContent(obj)
    }

    const handleAddVideoReference = () =>{
        setVideoReference(false)
    }

    const handleAddDocumentReference = () =>{
        setDocReference(false)
    }

    const handleAddSecurityInput = (event)=>{
        setErr(false)
        setAddMoreSecurity({...addMoreSecurity,[event.target.name]:event.target.value})
    }

    const handleSubmitSecurityPractices = () =>{
        if(addMoreSecurity.title!=="" && addMoreSecurity.therory!==""){
            setDocReference(true)
            setVideoReference(true)
            setErr(false)
            var addSecurityPracticesObject = [...State.securityPractices]
            addSecurityPracticesObject[addSecurityPracticesObject.length]=addMoreSecurity

            dispatch(updateSecurityPractices(addSecurityPracticesObject))
        }
        else{
            setTimeout(()=>{
                setErr(true)
            },5000)  
            
        }
    }
    
    const handleCancelAddSecurityPractices = () =>{
        setDocReference(true)
        setVideoReference(true)
    }

    return(
        <>
            <div className="d-flex flex-wrap create-timeline">
                {/* admin sidebar */}
                <Sidebar/>
                <div className="col">
                    <div className="d-flex flex-wrap">
                        {/* admin main content */}
                        <Dashboard/>

                        <div className="col-12 container mt-5 security-practice-chart-height rounded overflow-scroll">
                            <div className="col-12 d-flex flex-wrap">
                                <div className="col-12 d-flex flex-wrap align-items-center">
                                    <h2 className="col-8 col-md-10 text-start ps-4 my-4 text-secondary">Frontend security practices</h2>
                                    <div className="col-4 col-md-2 text-end">
                                        <button className="col-12 col-md-10 col-lg-6 py-1 me-3 add-securityPractices-btn border-0 text-light" data-bs-toggle="modal" data-bs-target="#staticBackdropAddSecurityPractices">Add</button>
                                    </div>
                                </div>
                                {State.securityPractices.map((v,i)=>{
                                    return <div className="col-12 col-md-6 p-3" key={i}>
                                        <div className="col-12 shadow rounded p-4">
                                            <h4 className="text-center pb-4 important-heading">{v.title}</h4>
                                            <p className="set-solving-height">{v.therory}</p>
                                        
                                            <div className="col-12 d-flex justify-content-end">
                                                <div className="col-4 col-md-5 col-lg-3 text-center text-light read-more-btn"  data-bs-toggle="modal" data-bs-target="#staticBackdropReadMore" onClick={()=>handleSecurityPracticeModel(v)}>
                                                    <p className="m-0 rounded">Read more</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>  

             {/* security practice adding modal box  */}
             <div className="modal modal-md fade" id="staticBackdropAddSecurityPractices" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content overflow-scroll security-practice-modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title text-dark fs-5" id="staticBackdropLabel">Add more security related issues</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleCancelAddSecurityPractices}></button>
                        </div>
                        <div className="modal-body">
                            {err ? <p className="text-danger">Some inputs are missing</p> : null}
                            <form className="col-12 p-3 d-flex flex-wrap justify-content-center">
                                <input type="text" placeholder="New attack" className="col-12 mt-4 ps-3 addsecurity-input py-1 rounded" name="title" onChange={handleAddSecurityInput}/>
                                <textarea cols="3" rows="5" placeholder="Detail explaination of this attack" name="therory" className="mt-4 addsecurity-input py-1 rounded" onChange={handleAddSecurityInput}/>
                                
                               
                                {
                                    videoReference ?  
                                        <div className="col-6 px-5 mt-5">
                                            <button type="button" className="col-12 add-securityPractices-btn text-light border-0" onClick={handleAddVideoReference}>Add video</button>
                                        </div>
                                    :
                                        <input type="text" placeholder="Reference video link " className="addsecurity-input col-12 mt-4 ps-3 py-1 rounded" name="videoForSolveThis" onChange={handleAddSecurityInput}/>
                                }

                                {
                                    docReference ? 
                                        <div className="col-6 px-1 mt-5">
                                            <button type="button" className="col-12 add-securityPractices-btn text-light border-0" onClick={handleAddDocumentReference}>Add document</button>
                                        </div>
                                    :
                                        <input type="text" placeholder="Reference document link " className="addsecurity-input col-12 mt-4 ps-3 py-1 rounded" name="reference" onChange={handleAddSecurityInput}/>
                                }
                                


                                <button type="button" className="mt-5 col-6 py-1 add-securityPractices-btn text-light border-0" data-bs-dismiss={addMoreSecurity.title!=="" && addMoreSecurity.therory!=="" ? "modal" : null} aria-label={addMoreSecurity.title!=="" && addMoreSecurity.therory!=="" ? "Close" : null} onClick={handleSubmitSecurityPractices}>Add</button>
                            </form>                            
                        </div>
                    </div>
                </div>
            </div>

            {/* security attack modal box  */}
            <div className="modal fade " id="staticBackdropReadMore" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content overflow-scroll security-practice-modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title text-dark fs-5" id="staticBackdropLabel">{modelboxContent.title}</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <h3 className="m-0 ps-1 important-heading fs-5">security practices to secure : </h3>
                            <p className="set-solving-model p-2 text-secondary">{modelboxContent.therory}</p>
                            
                            {
                                modelboxContent.typeOfAttacks!==undefined ?
                                    <>
                                        <div className="col-12 d-flex flex-wrap border p-3">
                                            <h4 className="fw-bold text-decoration-underline pb-3 text-dark">Types of attack</h4>
                                            {modelboxContent.typeOfAttacks.map((v,i)=>{
                                                return <div className="col-12">
                                                            <h6 className="text-dark">{v.attackType}</h6>
                                                            <p className="set-solving-model text-secondary">{v.toPrevent}</p>
                                                        </div>
                                            })}
                                        </div>                                          
                                    </>
                                :
                                    null
                            }
                            
                            {
                                modelboxContent.reference!==undefined ?
                                        <>
                                            <h4 className="text-dark">Refernce document :</h4>
                                            <a href={modelboxContent.reference} target="_blank">{modelboxContent.reference}</a>
                                        </>
                                :
                                    null
                            }

                            {
                                modelboxContent.videoForSolveThis!==undefined ?
                                    <div className="p-3">
                                        <h6 className="mt-3 text-dark">To overcome this problem this video link helps you</h6>
                                        <a href={modelboxContent.videoForSolveThis} target="_blank">{modelboxContent.videoForSolveThis}</a>
                                    </div>
                                :
                                    null
                            }

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}