import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { TiTickOutline } from "react-icons/ti";
import { ImCancelCircle } from "react-icons/im";
import { updateUsersArray } from "../Redux/Redux";
import { AiTwotoneMessage } from "react-icons/ai";
import { IoMdArrowDropleft } from "react-icons/io";
import { IoMdNotificationsOutline } from "react-icons/io";
import './Admin-css/Header.css'

export const Dashboard= () =>{
    const State = useSelector(
        ({data})=>data
    )
    const dispatch = useDispatch()
    const [messCount,setMessCount] = useState(0)
    const [notifyCount,setNotifyCount] = useState(0)

    useEffect(()=>{
        var messageCount = State.usersArray.filter((v,i)=>{
            return v.requesToAdmin!=="accepted"
        })
        setMessCount(messageCount.length)
    })

    const handleHideSidebar = () =>{
        var hide = document.getElementsByClassName('logo-content');
        var hideCount=hide.length
        for(var i=0;i<hideCount;i++){
            document.getElementsByClassName('logo-content')[i].classList.toggle("d-none")
        }

        document.getElementById("sidebar").classList.toggle("collapseddd")

        var increaseIconWidth = document.getElementsByClassName('logo-icon');
        var increaseWidth=increaseIconWidth.length
        for(var j=0;j<increaseWidth;j++){
            document.getElementsByClassName('logo-icon')[j].classList.toggle("col-12")
            document.getElementsByClassName('logo-icon')[j].classList.toggle("text-center")
        }
    }

    const handleAccept = (accept) =>{
        var acceptedUser = State.usersArray.map((v,i)=>{
            return v.id===accept ? {...v,requesToAdmin:"accepted"}:v
        })
        dispatch(updateUsersArray(acceptedUser))
    }

    const handleReject = (accept) =>{
        var acceptedUser = State.usersArray.map((v,i)=>{
            return v.id===accept ? {...v,requesToAdmin:"denied"}:v
        })
        dispatch(updateUsersArray(acceptedUser))
    }

    return(
        <>
            <div className="col-12 header">
                <nav className="navbar navbar-expand-lg bg-body-tertiary border-bottom ">
                    <div className="container-fluid">
                        {/* sidebar reducer toggle button  */}
                        <div className="col-5 col-lg-1">
                            <button className="btn btn-sm btn-outline-secondary p-0" type="button" onClick={handleHideSidebar}>
                                <IoMdArrowDropleft className="fs-2"/>
                            </button>
                        </div>
                        
                        {/* responsive navbar  */}
                        <div className="col-5 text-end d-block d-lg-none menubar-button">  
                            <button type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                                <div className="offcanvas-header">
                                    <h5 className="offcanvas-title" id="offcanvasRightLabel">Offcanvas right</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                </div>
                                <div className="offcanvas-body">
                                    ...
                                </div>
                            </div>
                        </div>

                        <form className="d-none d-lg-block col-lg-3" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        </form>

                        {/* large device navbar  */}
                        <div className="col-lg-7 d-none d-lg-block pt-3">
                            <div className="d-flex flex-wrap justify-content-end align-items-center">
                                {/* message  */}
                                <div className="col-lg-2 col-xl-1 text-center admin-notifuicaion position-relative cursor" data-bs-toggle="modal" data-bs-target="#staticBackdropMessage">
                                    <IoMdNotificationsOutline className="fs-3 text-secondary "/>
                                    {   
                                        messCount>0 ? 
                                            <span className="position-absolute top-0 start-75 translate-middle badge rounded-pill bg-danger">
                                                {messCount}
                                            </span>
                                        : 
                                            null
                                    }
                                </div>
                                {/* notification  */}
                                <div className="col-lg-2 col-xl-1 text-center admin-notifuicaion position-relative cursor" data-bs-toggle="modal" data-bs-target="#staticBackdropNotification">
                                    <AiTwotoneMessage className="fs-3 text-secondary "/>
                                    {   
                                        notifyCount>0 ? 
                                            <span className="position-absolute top-0 start-75 translate-middle badge rounded-pill bg-danger">
                                                {notifyCount}
                                            </span>
                                        : 
                                            null
                                    }
                                </div>
                                {/* profile  */}
                                <div className="col-lg-2 col-xl-1 text-center admin-picture cursor" data-bs-toggle="modal" data-bs-target="#staticBackdropProfile">
                                    <img src="https://static-00.iconduck.com/assets.00/user-2-account-icon-512x511-66843qcp.png" alt="profile"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>

                {/* Notifications modal box  */}
                <div className="modal fade modal-xl" id="staticBackdropMessage" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="staticBackdropLabel">Notifications</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                {
                                    messCount>0 ?
                                        <div className="col-12 d-flex flex-wrap">
                                            {State.usersArray.map((val,ind)=>{
                                                return val.requesToAdmin!=="accepted" ? <div className="col-12 col-md-6 col-lg-3 d-flex flex-wrap border p-3 m-1" key={ind}>
                                                                <div className="col-6 text-center">
                                                                {val.firstName} {val.lastName}
                                                                </div>
                                                                <div className="col-6 d-flex flex-wrap ">
                                                                    <div className="col-6 text-center">
                                                                        <TiTickOutline className="fs-3 text-success cursor" onClick={()=>handleAccept(val.id)}/>
                                                                    </div>
                                                                    <div className="col-6 text-center">
                                                                        <ImCancelCircle className="fs-3 text-danger cursor" onClick={()=>handleReject(val.id)}/>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                :
                                                        null
                                                }) 
                                            }
                                                        
                                        </div>
                                    :
                                        <div className="col-12 text-center">
                                            <p>No notification....</p>
                                        </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
                {/* Message modal box  */}
                <div className="modal fade modal-xl" id="staticBackdropNotification" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="staticBackdropLabel">Message</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                ...
                            </div>
                        </div>
                    </div>
                </div>
                {/* profile modal box  */}
                <div className="modal modal-sm fade" id="staticBackdropProfile" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog me-3">
                        <div className="modal-content">
                            <div className="modal-body">
                                <div className="d-flex flex-wrap">
                                    <div className="col-12 d-flex flex-wrap">
                                        <div className="col-12 dialog-box-profile text-center">
                                            <img src="https://static-00.iconduck.com/assets.00/user-2-account-icon-512x511-66843qcp.png" alt="profile" />
                                            <p className="text-center mt-3">Welcome {State.AdminLogin}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </>
    )
}