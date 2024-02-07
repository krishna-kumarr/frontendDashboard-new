import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Sidebar } from "./Sidebar";
import { Dashboard } from "./Dashboard";

export const UsersList = () =>{
    const State = useSelector(
        ({data})=>data
    )
    useEffect(()=>{
        document.querySelectorAll('.nav-link')[1].classList.add('active');
    })

    
    return(
        <>
        <div className="d-flex flex-wrap">
            {/* admin sidebar */}
            <Sidebar/>
            <div className="col">
                <div className="d-flex flex-wrap">
                    {/* admin main content */}
                    <Dashboard/>

                    <div className="col-12 container mt-5">
                        <table className="col-12 mt-5">
                        <thead>
                            <tr>
                                <th>S.no</th>
                                <th>Name</th>
                                <th>Username</th>
                                <th>Recent login</th>
                                <th>Date of joining</th>
                                <th>Request</th>
                            </tr>
                        </thead>
                        <tbody>
                            {State.usersArray.map((val,ind)=>{
                                return  <tr>
                                            <td>{ind+1}</td>
                                            <td>{val.firstName} {val.lastName}</td>
                                            <td>{val.userName}</td>
                                            <td>Offline</td>
                                            <td>{val.dateOfJoining!=="" ? val.dateOfJoining : "null"}</td>
                                            {
                                                val.requesToAdmin==="accepted" ?   
                                                    <td className="text-success">{val.requesToAdmin}</td>
                                                :
                                                    null
                                            }
                                            {
                                                val.requesToAdmin==="processing" ?   
                                                    <td className="text-warning">{val.requesToAdmin}</td>
                                                :
                                                    null
                                            }
                                            {
                                                val.requesToAdmin==="denied" ?   
                                                    <td className="text-danger">{val.requesToAdmin}</td>
                                                :
                                                    null
                                            }
                                        </tr>
                            })}
                        </tbody>
                        </table> 
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}