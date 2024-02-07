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
        setAddMoreSecurity({...addMoreSecurity,[event.target.name]:event.target.value})
    }

    const handleSubmitSecurityPractices = () =>{
        setDocReference(true)
        setVideoReference(true)
        var addSecurityPracticesObject = [...State.securityPractices]
        addSecurityPracticesObject[addSecurityPracticesObject.length]=addMoreSecurity

        dispatch(updateSecurityPractices(addSecurityPracticesObject))
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

                        <div className="col-12 container mt-5 security-practice-chart-height shadow rounded overflow-scroll">
                            <div className="col-12 d-flex flex-wrap">
                                <div className="col-12 d-flex flex-wrap align-items-center">
                                    <h1 className="col-8 col-md-10 text-start ps-4 my-4">Frontend security practices</h1>
                                    <div className="col-4 col-md-2 text-center">
                                        <button className="col-12 col-md-10 col-lg-6 py-1 add-securityPractices-btn border-0 text-light" data-bs-toggle="modal" data-bs-target="#staticBackdropAddSecurityPractices">Add</button>
                                    </div>
                                </div>
                                {State.securityPractices.map((v,i)=>{
                                    return <div className="col-12 col-md-6 p-3" key={i}>
                                        <div className="col-12 border rounded p-4">
                                            <h6>{v.title}</h6>
                                            <p className="set-solving-height">{v.therory}</p>
                                        
                                            <div className="col-12 d-flex justify-content-end">
                                                <div className="col-4 col-md-5 col-lg-2 text-center text-light read-more-btn"  data-bs-toggle="modal" data-bs-target="#staticBackdropReadMore" onClick={()=>handleSecurityPracticeModel(v)}>
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
             <div className="modal fade modal-md" id="staticBackdropAddSecurityPractices" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content overflow-scroll security-practice-modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Add more security related issues</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleCancelAddSecurityPractices}></button>
                        </div>
                        <div className="modal-body">
                            <form className="col-12 p-3 d-flex flex-wrap justify-content-center">
                                <input type="text" placeholder="New attack" className="col-12 mt-4 ps-3" name="title" onChange={handleAddSecurityInput}/>
                                <textarea cols="3" rows="5" placeholder="Detail explaination of this attack" name="therory" className="mt-4" onChange={handleAddSecurityInput}/>
                                
                               
                                {
                                    videoReference ?  
                                        <div className="col-6 px-5 mt-5">
                                            <button type="button" className="col-12 add-securityPractices-btn text-light border-0" onClick={handleAddVideoReference}>Add video</button>
                                        </div>
                                    :
                                        <input type="text" placeholder="Reference video link" className="col-12 mt-4 ps-3" value="videoForSolveThis" onChange={handleAddSecurityInput}/>
                                }

                                {
                                    docReference ? 
                                        <div className="col-6 px-1 mt-5">
                                            <button type="button" className="col-12 add-securityPractices-btn text-light border-0" onClick={handleAddDocumentReference}>Add document</button>
                                        </div>
                                    :
                                        <input type="text" placeholder="Reference document link" className="col-12 mt-4 ps-3" value="reference" onChange={handleAddSecurityInput}/>
                                }
                                


                                <button type="button" className="mt-5 col-6 py-1 add-securityPractices-btn text-light border-0" data-bs-dismiss="modal" aria-label="Close" onClick={handleSubmitSecurityPractices}>Add</button>
                            </form>                            
                        </div>
                    </div>
                </div>
            </div>

            {/* security attack modal box  */}
            <div className="modal fade modal-md" id="staticBackdropReadMore" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content overflow-scroll security-practice-modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">{modelboxContent.title}</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <p className="set-solving-model p-2"><span className="text-warning fs-5">security practices to secure : </span>{modelboxContent.therory}</p>
                            
                            {
                                modelboxContent.typeOfAttacks!==undefined ?
                                    <>
                                        <div className="col-12 d-flex flex-wrap border p-3">
                                            <h6 className="fw-bold text-decoration-underline pb-3">Types of attack</h6>
                                            {modelboxContent.typeOfAttacks.map((v,i)=>{
                                                return <div className="col-12">
                                                            <h6>{v.attackType}</h6>
                                                            <p>{v.toPrevent}</p>
                                                        </div>
                                            })}
                                        </div>                                          
                                    </>
                                :
                                    null
                            }
                            
                            {
                                modelboxContent.reference!==undefined ?
                                    <p>Refernce document : <a href={modelboxContent.reference} target="_blank">{modelboxContent.reference}</a></p>
                                :
                                    null
                            }

                            {
                                modelboxContent.videoForSolveThis!==undefined ?
                                    <div className="p-3">
                                        <h6 className="mt-3">To overcome this problem this video link helps you</h6>
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