import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Sidebar } from "./Sidebar";
import { Dashboard } from "./Dashboard";
import "./Admin-css/AdminTimeline.css"
import { useNavigate } from "react-router-dom";

export const Timeline = () =>{
    const State = useSelector(
        ({data})=>data
    )
    const pageRender = useNavigate()
    
    useEffect(()=>{
        document.querySelectorAll('.nav-link')[2].classList.add('active');
        console.log(State)
    },[])

    
    return(
        <>
        <div className="d-flex flex-wrap">
            {/* admin sidebar */}
            <Sidebar/>
            <div className="col">
                <div className="d-flex flex-wrap">
                    {/* admin main content */}
                    <Dashboard/>
                    
                    <div className="col-12 container d-flex justify-content-center mt-5">
                        <div className="col-6 d-flex flex-wrap justify-content-center">
                            <div className="col-6 timeline-btn">
                                <button type="button" onClick={()=>pageRender("/admin-home/time-line")}>Existing Timeline</button>
                            </div>
                            <div className="col-6 timeline-btn">
                                <button type="button" onClick={()=>pageRender("/admin-home/time-line/create-timeline")}>Create new timeline</button>
                            </div>
                        </div>
                    </div>

                  
                      <div className="col-12 container mt-5 timeline-chart-height shadow">
                        <div className="timeline col-12">                             
                            <div className="accordion mt-5" id="accordionExample">
                                {
                                    State.timelineArray.map((val,ind)=>{
                                            return <div className="accordion-item text-center border-top py-3 col-12" key={ind}>
                                                    <h4 className="accordion-header" id={"heading"+ind}>
                                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={"#collapse"+ind} aria-expanded={ind==0 ?"true" : "false"} aria-controls={"collapse"+ind}>
                                                        {val.title}
                                                    </button>
                                                    </h4>
                                                    <div id={"collapse"+ind} className={ind===0 ?"accordion-collapse collapse show":"accordion-collapse collapse"} aria-labelledby={"heading"+ind} data-bs-parent="#accordionExample">
                                                        <div className="accordion-body">
                                                            <ul>
                                                                {
                                                                    val.TimeLineCharts.map((value,index)=>{
                                                                        return  <li className="m-0" key={index}>
                                                                                    <div className="shadow timeline-content p-4">
                                                                                        <h5>{value.heading}</h5>
                                                                                        <p>{value.textareaCnt}</p>
                                                                                    </div>
                                                                                </li>
                                                                    })
                                                                }
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                        })
                                        
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}