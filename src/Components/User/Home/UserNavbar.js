import React, { useEffect, useState } from "react";
import { TiTickOutline } from "react-icons/ti";
import { ImCancelCircle } from "react-icons/im";
import { IoMdArrowDropleft } from "react-icons/io";
import { IoMdNotificationsOutline } from "react-icons/io";
import { AiTwotoneMessage } from "react-icons/ai";
import { updateUsersArray, updateuserLogin } from "../../Redux/Redux";
import { useDispatch, useSelector } from "react-redux";
import "./user-home-css/userNavbar.css"

export const UserNavbar = () =>{
    const State = useSelector(
        ({data})=>data
    )
    const dispatch = useDispatch()
    const [messCount,setMessCount] = useState(0)
    const [notifyCount,setNotifyCount] = useState(0)
    const [userDetails,setUserDetails] = useState({})

    useEffect(()=>{
        // setting logged in page user details 
        setUserDetails(...State.userLogin)

        //message request notification count 
        if(State.userLogin.length>0){
            var friendRequest=State.userLogin[0].friendsArrayData.filter((v,i)=>{
                return v.status === "requested" ? v : null
            })
            setNotifyCount(friendRequest.length)
        }
    })

    const handleHideSidebar = () =>{
        var hide = document.getElementsByClassName('logo-content');
        var hideCount=hide.length
        for(var i=0;i<hideCount;i++){
            document.getElementsByClassName('logo-content')[i].classList.toggle("d-none")
        }

        document.getElementById("sidebar").classList.toggle("user-sidebar-collapse")

        var increaseIconWidth = document.getElementsByClassName('logo-icon');
        var increaseWidth=increaseIconWidth.length
        for(var j=0;j<increaseWidth;j++){
            document.getElementsByClassName('logo-icon')[j].classList.toggle("col-12")
            document.getElementsByClassName('logo-icon')[j].classList.toggle("text-center")
        }
    }

    const handleRequestAccept = (reqId) =>{
        var list=[]

        for(var i=0;i<State.usersArray.length;i++){
            if(State.usersArray[i].userName===State.userLogin[0].userName){
                var array=[...State.usersArray[i].friendsArrayData]

                for(var j=0;j<array.length;j++){
                    if(array[j].friendId===reqId){
                        var spread ={...State.usersArray[i]}
                        // friend list array of object 
                        var a={...spread.friendsArrayData[j]}
                        a.status="accepted"

                        var spliceFriendRequest=[...spread.friendsArrayData]
                        spliceFriendRequest.splice(j,1,a)

                        spread.friendsArrayData=spliceFriendRequest
                        list.push(spread)

                        // friend list array of usernames 
                        var b=[...spread.friendsArray]
                        b[b.length]=reqId
                        spread.friendsArray=b
                        
                        dispatch(updateuserLogin([spread]))
                        
                    }
                }
            }
            else{
                list.push(State.usersArray[i])
            }
        }
        dispatch(updateUsersArray(list))

        // reset notification count 
        var friendRequest=list.map((v,i)=>{
            return v.friendsArrayData.filter((val,ind)=>{
                return val.friendId=== "requested" ? v : null
            }) 
        })
        setNotifyCount(friendRequest.length)
    }

    const handleRequestReject = () =>{

    }

    return(
        <>
            <div className="col-12 position-sticky top-0">
                <nav className="navbar navbar-expand-lg bg-body-tertiary border-bottom">
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

                            <div className="offcanvas offcanvas-end" tabIndex="1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                                <div className="offcanvas-header">
                                    <h5 className="offcanvas-title" id="offcanvasRightLabel">Offcanvas right</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                </div>
                                <div className="offcanvas-body">
                                    ...
                                </div>
                            </div>
                        </div>

                        <form class="d-none d-lg-buser/signInlock col-lg-3" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        </form>

                        {/* large device navbar  */}
                        <div className="col-lg-7 d-none d-lg-block pt-3">
                            <div className="d-flex flex-wrap justify-content-end align-items-center">
                                
                                {/* notification  */}
                                <div className="col-lg-2 col-xl-1 text-center admin-notifuicaion position-relative cursor" data-bs-toggle="modal" data-bs-target="#staticBackdropMessage">
                                    <AiTwotoneMessage className="fs-3 text-secondary "/>
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
                                    <IoMdNotificationsOutline className="fs-3 text-secondary "/>
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

            
              
            </div>     

              {/* Message modal box  */}
              <div class="modal fade modal-xl" id="staticBackdropMessage" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="staticBackdropLabel">Message</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                ...
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* profile modal box  */}
                <div class="modal modal-sm fade" id="staticBackdropProfile" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog me-3">
                        <div class="modal-content">
                            <div class="modal-body">
                                <div className="d-flex flex-wrap">
                                    <div className="col-12 d-flex flex-wrap">
                                        <div className="col-12 dialog-box-profile text-center">
                                            <img src="https://static-00.iconduck.com/assets.00/user-2-account-icon-512x511-66843qcp.png" alt="profile"/>
                                            <p className="text-center mt-3">Welcome {userDetails.firstName} {userDetails.lastName}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                 {/* Notifications modal box  */}
                 <div className="modal fade modal-xl" id="staticBackdropNotification" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="staticBackdropLabel">Notifications</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                {
                                    notifyCount!==0 ?
                                        <div className="col-12 d-flex flex-wrap">
                                            {State.userLogin[0].friendsArrayData.map((val,ind)=>{
                                                return val.status==="requested" ? <div className="col-12 col-md-6 col-lg-3 d-flex flex-wrap border p-3 m-1" key={ind}>
                                                                <p className="col-12 text-center text-warning">Friend request</p>
                                                                <div className="col-6 text-center">
                                                                    <p className="m-0">{val.friendId}</p>
                                                                </div>
                                                                <div className="col-6 d-flex flex-wrap ">
                                                                    <div className="col-6 text-center">
                                                                        <TiTickOutline className="fs-3 text-success cursor" onClick={()=>handleRequestAccept(val.friendId)}/>
                                                                    </div>
                                                                    <div className="col-6 text-center">
                                                                        <ImCancelCircle className="fs-3 text-danger cursor" onClick={()=>handleRequestReject(val.friendId)}/>
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
               
        </>
    )
}