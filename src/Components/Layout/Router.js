import React from "react";
import { BrowserRouter, Routes ,Route} from "react-router-dom";
import { Home } from "../Home/Home";
import { AdminLogin } from "../Admin/AdminLogin";
import { AdminHome } from "../Admin/AdminHome";
import { Signin } from "../User/Signin/Signin";
import { Register } from "../User/Register/Register";
import { UserHomePage } from "../User/Home/UserHome";
import { UsersList } from "../Admin/Userslist";
import { Timeline } from "../Admin/TimeLine";
import { Contact } from "../Home/Contact";
import { ExistingTimeline } from "../Admin/CreateTimeline";
import { Peoples } from "../User/Home/Peoples";
import { UserTimeline } from "../User/Home/UserTimeline";
import { AdminSecurityPractices } from "../Admin/AdminSecurityPractice";

export const PageRedirector = () => {

    return(
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/admin/login" element={<AdminLogin/>}/>


                <Route path="/admin-home">
                    <Route index element={<AdminHome/>}/>
                    <Route path="user" element={<UsersList/>}/>
                </Route>

                <Route path="/admin-home/time-line" element={<Timeline/>}/>
                <Route path="/admin-home/time-line/create-timeline" element={<ExistingTimeline/>}/> 
                <Route path="/admin-home/security-practice" element={<AdminSecurityPractices/>}/> 



                <Route path="/user">
                    <Route path="signIn" element={<Signin/>}/>
                    <Route path="register" element={<Register/>}/>
                    <Route path="home-page" element={<UserHomePage/>}/>
                    <Route path="peoples" element={<Peoples/>}/>
                    <Route path="timeline" element={<UserTimeline/>}/>

                </Route>


                 <Route path="/contact-us" element={<Contact/>}/>

                {/* <Route path="/" element={<UserHomePage/>}/>
                <Route path="/user/peoples" element={<Peoples/>}/>
                <Route path="/user/timeline" element={<UserTimeline/>}/> */}


            </Routes>
        </BrowserRouter>
    )
}