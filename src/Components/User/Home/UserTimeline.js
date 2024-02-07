import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserSidebar } from "./UserSidebar";
import { UserNavbar } from "./UserNavbar";
import "./user-home-css/User-timeline.css"
import { updateUserAccessTimeLineArray } from "../../Redux/Redux";

export const UserTimeline = () =>{
    const State = useSelector(
        ({data})=>data
    )
    const dispatch = useDispatch()
    const [timelineArray,setTimelineArray]=useState([])
    useEffect(()=>{
        //setting timeline array in a state
        const userTimeline = State.userAccessTimeLineArray.filter((v,i)=>{
            return v.username===State.userLogin[0].userName ? v : null
            
        })
        setTimelineArray(userTimeline[0].TimeLineCharts)
        console.log(State)

        document.querySelectorAll('.nav-link')[2].classList.add('active');
    })



    const handleUpdateUserTimeline = (event,cardHeading,timelineTitle) =>{
        const loggedUser = State.userLogin[0].userName
        const changeUserTimeline = State.userAccessTimeLineArray
        var save = []

        for(var i=0;i<changeUserTimeline.length;i++){
            var spread = {...changeUserTimeline[i]}
            if(loggedUser === changeUserTimeline[i].username){
                var getTimelineArray = changeUserTimeline[i].TimeLineCharts
                var spreadTimeline = []
                for(var j=0;j<getTimelineArray.length;j++){
                   
                    if(timelineTitle === getTimelineArray[j].title){
                        var spreadTimelineChartobject={...getTimelineArray[j]}
                        for(var k=0;k<getTimelineArray[j].TimeLineCharts.length;k++){
                            if(cardHeading===getTimelineArray[j].TimeLineCharts[k].heading){
                                var objectSpread={...getTimelineArray[j].TimeLineCharts[k]}
                                if(event.target.value==="inProgress"){
                                    objectSpread.status=event.target.value
                                    objectSpread.startedOn=String(new Date())
                                    objectSpread.completedOn=""
                                }
                                else if(event.target.value==="completed"){
                                    objectSpread.status=event.target.value
                                    objectSpread.completedOn=String(new Date())
                                }
                                else{
                                    objectSpread.status=event.target.value
                                    objectSpread.completedOn=""
                                    objectSpread.startedOn=""
                                }

                                var insertUpdatedArray = [...spreadTimelineChartobject.TimeLineCharts]
                                insertUpdatedArray.splice(k,1,objectSpread)
                            }
                        }
                        spreadTimelineChartobject.TimeLineCharts=insertUpdatedArray

                        spreadTimeline[spreadTimeline.length]=spreadTimelineChartobject
                    }
                    else{
                        spreadTimeline[spreadTimeline.length]=getTimelineArray[j]
                    }
                }
                spread.TimeLineCharts=spreadTimeline
                save[save.length] = spread
            }
            else{
                save[save.length]=changeUserTimeline[i]
            }
        }


        //Taskpercentage calculation
        const userTaskStatus = save.filter((v,i)=>{
            return v.username===State.userLogin[0].userName ? v : null
            
        })
        var totalTask = 0
        var taskCompleted = 0
        const particularPersonTimeline = userTaskStatus[0].TimeLineCharts
        for(var i=0;i<particularPersonTimeline.length;i++){
            var eachObjectimeline = particularPersonTimeline[i].TimeLineCharts
            for(var j=0;j<eachObjectimeline.length;j++){
                ++totalTask
                if(eachObjectimeline[j].status==="completed"){
                    ++taskCompleted
                }
            }
        }
        const calculatedPerformance = Math.ceil(taskCompleted/totalTask*100)


        //update calculated overall performance
        const finalUpdation = save.map((v,i)=>{
            return v.username===State.userLogin[0].userName ? {...v,overallPerformance:calculatedPerformance} : v
        })

        dispatch(updateUserAccessTimeLineArray(finalUpdation))

    }   

    return(
        <>
             <div className="d-flex flex-wrap">
                {/* admin sidebar */}
                <UserSidebar/>
                
                {/* admin main content */}
                <div className="col">
                    <div className="d-flex flex-wrap">
                        <UserNavbar/>

                        <div className="col-12 container mt-5 user-timeline-chart-height shadow overflow-scroll">
                            <div className="timeline col-12">                             
                                <div className="accordion mt-2" id="accordionExample">
                                    {
                                        timelineArray.map((val,ind)=>{
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
                                                                                            <div className="col-12 d-flex flex-wrap justify-content-end">
                                                                                                {value.startedOn!==undefined && value.startedOn.length>0 ? <p className="text-warning">started on: {value.startedOn}</p> : null}
                                                                                                {value.completedOn!==undefined && value.completedOn.length>0 ? <p className="text-success">completed on: {value.completedOn}</p> : null}

                                                                                                
                                                                                                <select className="col-3" onChange={(e)=>handleUpdateUserTimeline(e,value.heading,val.title)}>
                                                                                                    {
                                                                                                        value.status==="not started" ?
                                                                                                            <option selected>Not-started</option>
                                                                                                        :
                                                                                                            <option value="not started">Not-started</option>

                                                                                                    }

                                                                                                    {
                                                                                                        value.status==="inProgress" ?
                                                                                                            <option selected>in-progress</option>
                                                                                                        :
                                                                                                            <option value="inProgress">in-progress</option>

                                                                                                    }

                                                                                                    {
                                                                                                        value.status==="completed" ?
                                                                                                            <option selected>completed</option>
                                                                                                        :
                                                                                                            <option value="completed">completed</option>

                                                                                                    }
                                                                                                </select>
                                                                                            </div>
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