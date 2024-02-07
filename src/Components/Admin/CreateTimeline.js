import React, { useEffect, useState } from "react"
import { Sidebar } from "./Sidebar"
import { Dashboard } from "./Dashboard"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { updateTimelineArray, updateUserAccessTimeLineArray } from "../Redux/Redux"

export const ExistingTimeline = () =>{
    useEffect(()=>{
        document.querySelectorAll('.nav-link')[2].classList.add('active');
    })
    const State = useSelector(
        ({data})=>data
    )
    const pageRender = useNavigate()
    const dispatch = useDispatch()
    const [err,serErr] = useState(false)
    const [heading,setHeading] = useState(true)
    const [contentsErr,setContentsErr]=useState(false)
    const [createTimeLine,setCreateTimeLine] = useState(
        {
            title:"",
            TimeLineCharts:[]
        }
    )

    const [timeLineContents,setTimeLineContents] = useState(
        {
            heading:"",
            textareaCnt:""
        }
    )
    
    const handleCreation=(event)=>{
        if(event.target.name==="title"){
            setCreateTimeLine({...createTimeLine,[event.target.name]:event.target.value,performance:0})
        }
        else{
            setTimeLineContents({...timeLineContents,[event.target.name]:event.target.value,status:"not started"})
        }
    }
    const handleTitleSave=()=>{
        if(createTimeLine.title!==""){
            setHeading(false)
            serErr(false)
        }
        else{
            serErr(true)
        }
    }
    const handleContentSave=()=>{
        if(timeLineContents.heading!=="" && timeLineContents.textareaCnt!==""){
            setContentsErr(false)
            var createContent = createTimeLine.TimeLineCharts
            createContent[createContent.length]=timeLineContents
            
            setCreateTimeLine(createTimeLine)
            setTimeLineContents({...timeLineContents,heading:"",textareaCnt:""})
        }
        else{
            setContentsErr(true)
        }
    }
    const handleFinalSave = () =>{
        const updateTimelineRedux=[...State.timelineArray]
        updateTimelineRedux[updateTimelineRedux.length]=createTimeLine
        dispatch(updateTimelineArray(updateTimelineRedux))

        //setuser timeline 
        if(State.usersArray.length>0){
            const userAccessTimeLineArray = [...State.userAccessTimeLineArray]
            var list=[]
            for(var i=0;i<userAccessTimeLineArray.length;i++){
                var spread={...userAccessTimeLineArray[i]}
                var a=[...spread.TimeLineCharts]
                a[a.length]=createTimeLine

                spread.TimeLineCharts=a
                list[list.length]=spread
            }
            dispatch(updateUserAccessTimeLineArray(list))
        }

        pageRender("/admin-home/time-line")
    }

    
    return(
        <div className="d-flex flex-wrap create-timeline">
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

                    <div className="col-12 container mt-5 timeline-chart-height shadow creating-relative">

                        <div className="col-12 d-flex flex-wrap justify-content-end mt-3 creating-sticky">
                            <div className="col-2 content-adding-btn">
                                <button type="button" className="px-5 py-1" data-bs-toggle="modal" data-bs-target="#staticBackdropContentAdd">Add Content</button>
                            </div>
                        </div>

                         {/* adding new timeline cards */}
                        <div className="modal fade modal-md" id="staticBackdropContentAdd" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h1 className="modal-title fs-5" id="staticBackdropLabel">Add new Content</h1>
                                    </div>
                                    <div className="modal-body col-12 d-flex flex-wrap justify-content-center">
                                        <div className="col-12 d-flex flex-wrap justify-content-center create-timeline-content mt-4">
                                                <input type="text" placeholder="Enter the Title" className="rounded px-3 py-2" value={timeLineContents.heading} name="heading" onChange={handleCreation}/>
                                                {contentsErr && timeLineContents.heading==="" ? <p className="m-0 text-danger ps-1 col-12">Title required</p>: null}

                                                <textarea rows="5" cols="10" placeholder="Enter the content" name="textareaCnt" value={timeLineContents.textareaCnt} className="mt-3" onChange={handleCreation}/>
                                                {contentsErr && timeLineContents.textareaCnt==="" ? <p className="m-0 text-danger ps-1 col-12">Content required</p>: null}

                                                <div className="col-8 text-center create-timeline-content mt-4 d-flex flex-wrap justify-content-center">
                                                    {
                                                        timeLineContents.heading==="" || timeLineContents.textareaCnt==="" ?
                                                            <button type="button" className="px-5 py-1" onClick={handleContentSave}>Save</button>
                                                        :
                                                            <button type="button" className="px-5 py-1" data-bs-dismiss="modal" onClick={handleContentSave}>save</button>
                                                    }
                                                </div>
                                        </div>        
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="timeline d-flex flex-wrap justify-content-center">
                            {   
                                heading ?
                                    <> 
                                        <div className="col-8 text-center create-timeline-heading mt-4">
                                            <input type="text" placeholder="Enter the Title" className="rounded px-3 py-2" name="title" onChange={handleCreation}/>
                                        </div>
                                        <div className="col-8 text-center create-timeline-heading mt-4 d-flex flex-wrap justify-content-center">
                                                <button type="button" className="px-5 py-1" onClick={handleTitleSave}>Save</button>
                                        </div>
                                        
                                        {err && createTimeLine.title==="" ? <p className="m-0 text-danger text-center col-12">Title name required</p>: null}
                                    </>
                                :
                                    <h4 className="my-5 text-center col-12">{createTimeLine.title}</h4>
                            }

                            {/* displaying timeline cards  */}
                            <ul className="col-12 mt-5">
                                {
                                    createTimeLine.TimeLineCharts.map((val,ind)=>{
                                        return <li className="m-0" key={ind}>
                                                <div className="shadow timeline-content p-4">
                                                    <h5>{val.heading}</h5>
                                                    <p>{val.textareaCnt}</p>
                                                </div>
                                            </li>
                                        })
                                }
                            </ul>
                        </div>
                        
                        {
                            createTimeLine.TimeLineCharts.length>1 ?
                                <div className="col-12 d-flex flex-wrap justify-content-center mt-3 creating-final-sticky">
                                    <div className="col-2 content-adding-btn">
                                        <button type="button" className="px-5 py-1" onClick={handleFinalSave}>Save all</button>
                                    </div>
                                </div>
                            :
                                null
                        }
                        
                    </div>
                </div>
            </div>
        </div>
    )
}