import React, { useEffect, useState } from "react";
import { UserSidebar } from "./UserSidebar";
import { UserNavbar } from "./UserNavbar";
import { useSelector } from "react-redux";

export const UserSecurityPractice = () =>{
    const State = useSelector(
        ({data})=>data
    )
    const [modelboxContent,setModelboxContent]=useState({})

    const handleSecurityPracticeModel = (obj) =>{
        setModelboxContent(obj)
    }


    useEffect(()=>{
        document.querySelectorAll('.nav-link')[3].classList.add('active');
        console.log(State)
    },[])
    return(
        <>
            <div className="d-flex flex-wrap create-timeline">
                {/* user sidebar */}
                <UserSidebar/>
                <div className="col">
                    <div className="d-flex flex-wrap">
                        {/* user main content */}
                        <UserNavbar/>

                        <div className="col-12 container mt-5 security-practice-chart-height shadow rounded overflow-scroll">
                            <div className="col-12 d-flex flex-wrap">
                                <div className="col-12 d-flex flex-wrap align-items-center">
                                    <h1 className="col-8 col-md-10 text-start ps-4 my-4">Frontend security practices</h1>                               
                                </div>
                                {State.securityPractices.map((v,i)=>{
                                    return <div className="col-12 col-md-6 p-3" key={i}>
                                        <div className="col-12 border rounded p-4">
                                            <h6>{v.title}</h6>
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

            {/* security attack modal box  */}
            <div className="modal fade modal-md" id="staticBackdropReadMore" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content overflow-scroll security-practice-modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title text-dark fs-5" id="staticBackdropLabel">{modelboxContent.title}</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <p className="set-solving-model p-2 text-secondary"><span className="modelbox-Purple-color fs-5">security practices to secure : </span>{modelboxContent.therory}</p>
                            
                            {
                                modelboxContent.typeOfAttacks!==undefined ?
                                    <>
                                        <div className="col-12 d-flex flex-wrap border p-3">
                                            <h6 className="fw-bold text-decoration-underline pb-3 text-dark">Types of attack</h6>
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
                                    <p className="text-dark">Refernce document : <a href={modelboxContent.reference} target="_blank">{modelboxContent.reference}</a></p>
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