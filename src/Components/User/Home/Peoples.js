import React, { useEffect, useState } from "react";
import { UserSidebar } from "./UserSidebar";
import { UserNavbar } from "./UserNavbar";
import "./user-home-css/userPeoples.css"
import { BsFillPersonPlusFill } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { LuView } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import { updateUsersArray } from "../../Redux/Redux";

export const Peoples = () =>{
    const State = useSelector(
        ({data})=>data
    )
    const dispatch = useDispatch()
    const [peoplesArray,setPeoplesArray]=useState([])

    useEffect(()=>{
        document.querySelectorAll('.nav-link')[1].classList.add('active');
        console.log(State)

        var filterPeoples = State.usersArray.filter((v,i)=>{
            return v.userName!==State.userLogin[0].userName ? v :null
        })
        setPeoplesArray(filterPeoples)
    },[])


    const handleMakeFriend = (reqId,cardUserId) =>{
        var list=[]
        for(var i=0;i<State.usersArray.length;i++){
            if(State.usersArray[i].userName === cardUserId){
                var spread ={...State.usersArray[i]}
                var a=[...spread.friendsArrayData]
                if(a.length>0){
                    var checkFriendAvailable = a.filter((v,i)=>{
                        return v.friendId===reqId ? v : null
                    })

                    if(checkFriendAvailable.length===0){
                        a[a.length]={friendId:reqId,status:"requested"}
                        spread.friendsArrayData=a
                        list.push(spread)
                    }
                    else{
                        list.push(spread)
                    }
                }
                else{
                    a[a.length]={friendId:reqId,status:"requested"}
                    spread.friendsArrayData=a
                    list.push(spread)
                }
                
            }
            else{
                list.push(State.usersArray[i])
            }
            console.log(list,"listof peoples")
        }
        
       
        dispatch(updateUsersArray(list))
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

                        <div className="col-12 d-flex flex-wrap">
                            {

                                peoplesArray.length>0 ?

                                peoplesArray.map((val,ind)=>{
                                    return val.userName!==State.userLogin[0].userName ? <div className="col-12 col-md-6 col-lg-4 col-xl-3 col-lg-3 p-3" key={ind}>
                                                                    <div className="rounded d-flex flex-wrap user-border-color">
                                                                        <div className="col-12 people-img-backround text-center py-4">
                                                                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-vzAeNqH03TdQOGhSMrF-9Fm18gYkKn2YIAhee_wh7a9JBWUm3bNhSTBmLf3FFANY4Zg&usqp=CAU" alt=""/>
                                                                        </div>
                                                                        <div className="text-center col-12">
                                                                            <h6>{val.firstName} {val.lastName}</h6>
                                                                            <p>Front-end developer</p>
                                                                            <div className="col-12 d-none d-sm-flex flex-wrap mt-5">
                                                                                <div className="col-4 px-3 border-dark">
                                                                                    <h6 className="text-secondary">Projects</h6>
                                                                                    <p className="text-center col-12 m-0">30</p>
                                                                                </div>
                                                                                <div className="col-4 px-3 border-dark">
                                                                                    <h6 className="text-secondary">followings</h6>
                                                                                    <p className="text-center col-12 m-0">30</p>
                                                                                </div>
                                                                                <div className="col-4 px-3 border-dark">
                                                                                    <h6 className="text-secondary">followers</h6>
                                                                                    <p className="text-center col-12 m-0">30</p>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-12 d-flex flex-wrap justify-content-center mt-5 mb-2">
                                                                                <div className="col-12 col-sm-6 profile-button my-2">
                                                                                    {
                                                                                        val.friendsArray.includes(State.userLogin[0].userName) ? 
                                                                                            <>
                                                                                                <button type="button" className="pe-3">friends</button>
                                                                                            </>
                                                                                        :
                                                                                            <>
                                                                                                <button type="button" onClick={()=>handleMakeFriend(State.userLogin[0].userName,val.userName)}>Add friend</button>
                                                                                                <BsFillPersonPlusFill className="profile-button-position"/>
                                                                                            </>
                                                                                        }
                                                                                   
                                                                                         
                                                                                </div>
                                                                                <div className="col-12 col-sm-6 profile-button my-2">
                                                                                    <button type="button" className="py-2">Message</button>
                                                                                    <FaTelegramPlane className="profile-button-position"/>
                                                                                </div>
                                                                                <div className="col-12 col-sm-7 profile-button my-2">
                                                                                    <button type="button" className="py-2">View profile</button>
                                                                                    <LuView className="profile-button-position"/>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            :   
                                                                null
                                        })
                                :
                                    <div className="col-12 d-flex flex-wrap justify-content-center align-items-center people-not-found">
                                        <p>No peoples available</p>
                                    </div>
                            }
                           
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}