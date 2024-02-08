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
                        <div className="col-12 col-md-6 d-flex flex-wrap justify-content-center">
                            <div className="col-12 col-md-12 col-lg-6 my-2 text-center timeline-btn">
                                <button type="button" onClick={()=>pageRender("/admin-home/time-line")}>Existing Timeline</button>
                            </div>
                            <div className="col-12 col-md-12 col-lg-6 my-2 text-center timeline-btn">
                                <button type="button" onClick={()=>pageRender("/admin-home/time-line/create-timeline")}>Create new timeline</button>
                            </div>
                        </div>
                    </div>

                  
                      <div className="col-12 container mt-5 timeline-chart-height shadow">
                        <div className="timeline col-12">                             
                            <div className="accordion mt-5" id="accordionExample">
                                {
                                    State.timelineArray.map((val,ind)=>{
                                            return <div className="accordion-item bg-transparent text-center py-3 col-12" key={ind}>
                                                    <h4 className="accordion-header" id={"heading"+ind}>
                                                        <button className="accordion-button bg-transparent text-start" type="button" data-bs-toggle="collapse" data-bs-target={"#collapse"+ind} aria-expanded={ind==0 ?"true" : "false"} aria-controls={"collapse"+ind}>
                                                            {ind+1} .{val.title}
                                                        </button>
                                                    </h4>
                                                    <div id={"collapse"+ind} className={ind===0 ?"accordion-collapse collapse show":"accordion-collapse collapse"} aria-labelledby={"heading"+ind} data-bs-parent="#accordionExample">
                                                        <div className="accordion-body">
                                                            <ul>
                                                                {
                                                                    val.TimeLineCharts.map((value,index)=>{
                                                                        return  <li className="m-0" key={index}>
                                                                                    <div className="shadow timeline-content p-4 col-12 d-flex flex-wrap align-items-center">
                                                                                        {
                                                                                            index%2===0 ?
                                                                                                <>  
                                                                                                    {
                                                                                                        value.image===undefined ?  
                                                                                                             null
                                                                                                        :
                                                                                                            <div className="col-4">
                                                                                                                <img src={value.image} alt="timeline-image" className="timeeline-card-image"/>
                                                                                                            </div>
                                                                                                    }
                                                                                                   
                                                                                                    <div className={value.image===undefined ? "col-12" : "col-8"}>
                                                                                                        <h5>{value.heading}</h5>
                                                                                                        <p>{value.textareaCnt}</p>
                                                                                                    </div>
                                                                                                </>
                                                                                            :
                                                                                                <>
                                                                                                    <div className={value.image===undefined ? "col-12" : "col-8"}>
                                                                                                        <h5>{value.heading}</h5>
                                                                                                        <p>{value.textareaCnt}</p>
                                                                                                    </div>
                                                                                                    {
                                                                                                        value.image===undefined ?  
                                                                                                             null
                                                                                                        :
                                                                                                            <div className="col-4">
                                                                                                                <img src={value.image} alt="timeline-image" className="timeeline-card-image"/>
                                                                                                            </div>
                                                                                                    }
                                                                                                </>
                                                                                        }
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