import React, { useEffect, useState } from "react";
import "./user-home-css/UserHome.css"
import { useDispatch, useSelector } from "react-redux";
import { UserSidebar } from "./UserSidebar";
import { useNavigate } from "react-router-dom";
import { UserNavbar } from "./UserNavbar";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { updateUserAccessTimeLineArray } from "../../Redux/Redux";

export const UserHomePage = () =>{
    const State = useSelector(
        ({data})=>data
    )

    const dispatch = useDispatch()
    const pageRender = useNavigate()
    const [userDetails,setUserDetails] = useState({})
    const [friendsPerformance,setFriendsPerformance] = useState([])
    const [taskStatus,setTaskStatus] = useState({
        total_task:0,
        task_in_progess:0,
        task_completed:0
    })


    useEffect(()=>{
        //1. setting logged user details
        setUserDetails(...State.userLogin)

        //2. setting van button active
        if(State.userLogin.requesToAdmin==="accepted"){
            document.querySelectorAll('.nav-link')[0].classList.add('active');
        }

        //3. making fiends overall performance
        var getFriendList=[...State.userLogin[0].friendsArray]
        var frdsPerformanceData=[]
        for(var k=0;k<State.userAccessTimeLineArray.length;k++){
            for(var l=0;l<getFriendList.length;l++){
                if(State.userAccessTimeLineArray[k].username==getFriendList[l]){
                    frdsPerformanceData[frdsPerformanceData.length]=State.userAccessTimeLineArray[k]
                }
            }
        }
        setFriendsPerformance(frdsPerformanceData)  



        //4. Total task,Task in progess,Task completed code
        const userTaskStatus = State.userAccessTimeLineArray.filter((v,i)=>{
            return v.username===State.userLogin[0].userName ? v : null
            
        })
        var totalTask = 0
        var taskInProgess = 0
        var taskCompleted = 0
        const particularPersonTimeline = userTaskStatus[0].TimeLineCharts
        for(var i=0;i<particularPersonTimeline.length;i++){
            var eachObjectimeline = particularPersonTimeline[i].TimeLineCharts
            for(var j=0;j<eachObjectimeline.length;j++){
                ++totalTask
                if(eachObjectimeline[j].status==="inProgress"){
                    ++taskInProgess
                }
                else if(eachObjectimeline[j].status==="completed"){
                    ++taskCompleted
                }
            }
        }
        setTaskStatus({...taskStatus,total_task:totalTask,task_in_progess:taskInProgess,task_completed:taskCompleted})

        //5. initially calculaed and updated users performance in home page
        const initialCalculation = Math.ceil(taskStatus.task_completed/taskStatus.total_task*100)
        const initialUpdation = State.userAccessTimeLineArray.filter((v,i)=>{
            return v.username===State.userLogin[0].userName ? {...v,overallPerformance:initialCalculation} : v
        })
        console.log(initialUpdation,"initialUpdation")
        dispatch(updateUserAccessTimeLineArray(initialUpdation))
    },[])

    return(
        <>
            {
                userDetails.requesToAdmin==="accepted" ?
                    <div className="d-flex flex-wrap">
                        {/* admin sidebar */}
                        <UserSidebar/>
                        
                        {/* admin main content */}
                        <div className="col">
                            <div className="d-flex flex-wrap">
                                <UserNavbar/>

                                <div className="col-12 d-flex flex-wrap">
                                    <div className="col-12 col-md-12 col-lg-6 p-3">
                                        <div className="myhome border rounded p-5">
                                            <h4 className="text-color">Hii {userDetails.firstName} {userDetails.lastName}</h4>
                                            <p className="text-color">Be happy and start your journey</p>

                                            <div className="col-12 d-flex flex-wrap mt-5">
                                                <div className="col-12 col-sm-6 col-md-4 border-start px-3 border-dark">
                                                    <h6>Total Tasks</h6>
                                                    <p className="text-center col-6 m-0">{taskStatus.total_task}</p>
                                                </div>
                                                <div className="col-12 col-sm-6 col-md-4 border-start px-3 border-dark">
                                                    <h6>Task in progress</h6>
                                                    <p className="text-center col-6 m-0">{taskStatus.task_in_progess}</p>
                                                </div>
                                                <div className="col-12 col-sm-6 col-md-4 border-start px-3 border-dark">
                                                    <h6>Completed Tasks</h6>
                                                    <p className="text-center col-6 m-0">{taskStatus.task_completed}</p>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="col-12 mt-4">
                                            <div className="myhome border rounded p-5">
                                                <div className="d-flex flex-wrap">
                                                    <h4 className="text-color col-6 ps-3">My projects</h4>
                                                    <p className="text-color m-0 text-end col-6 pe-3 pointer" onClick={()=>pageRender("/user/projects")}>see all</p>
                                                </div>
                                                <div className="col-12 d-flex flex-wrap mt-5">
                                                    {/* <div className="col-6 px-3">
                                                        <div className="myproject rounded text-light">
                                                            <h6 className="ps-3 pt-3"><span>Project title: </span>Total Tasks</h6>
                                                            <p className="col-6 m-0 ps-3 project-description">30</p>
                                                            <p className="col-6 m-0 ps-3 mt-3"><span>Project link</span>30</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-6 px-3">
                                                        <div className="myproject rounded text-light">
                                                            <h6 className="ps-3 pt-3">Total Tasks</h6>
                                                            <p className="col-6 m-0 ps-3">30</p>
                                                        </div>
                                                    </div> */}
                                                    
                                                    <div className="col-12 noProjects-available d-flex flex-wrap justify-content-center align-items-center text-center">
                                                        <h6>No projects added</h6> 
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-12 col-lg-6 p-3">
                                        <div className="myperformance border rounded p-5 d-flex flex-wrap">
                                            <div className="col-6 border-end">
                                                <p className="col-12 ps-5">My overall performance</p>
                                                <div className="col-8 ms-4 mt-5">
                                                    <CircularProgressbar value={taskStatus.task_completed/taskStatus.total_task*100} text={`${Math.ceil(taskStatus.task_completed/taskStatus.total_task*100)}%`} />
                                                </div>
                                            </div>
                                            <div className="col-6 px-4 text-center">
                                                <p>My friends overall performance</p>
                                                <div className="col-12 d-flex flex-wrap">
                                                    {
                                                        friendsPerformance.map((v,i)=>{
                                                            return <div className="col-12 d-flex justify-content-center p-3 friends-performance-border rounded my-3" key={i}>
                                                                <div className="col-10">
                                                                    <CircularProgressbar className="p-5" value={v.overallPerformance} text={`${v.overallPerformance}%`} />
                                                                    <p className="col-12">User-name:  {  v.username}</p>
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
                        </div>
                    </div>
                :
                    <div className="d-flex flex-wrap justify-content-center align-items-center vh-100">
                        <div className="col-12 col-md-6 col-lg-5 col-xl-4 text-center text-secondary border rounded p-5">
                            <h1>Hello</h1>
                            <p className="mt-3">
                                <span className="pe-1 text-warning">{userDetails.firstName} {userDetails.lastName}</span>
                                you need to wait for some time until our admin verify your account
                            </p>
                            <button type="button" className="btn btn-warning text-light" onClick={()=>pageRender("/")}>Return to Home page</button>
                        </div>
                    </div>
            }
        </>
    )
}