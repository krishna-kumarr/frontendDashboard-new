import React, { useRef, useState } from "react";
import { Navbar } from "./Navbar";
import "./Home-css/Contact.css"
import emailjs from 'emailjs-com';


export const Contact = () =>{
    const[msg,sendMsg]=useState({senderName:'',senderEmail:'',senderMsg:''})
    const form = useRef();

    const handleMessageip = (event) =>{
        sendMsg({...msg,[event.target.name]:event.target.value})
    }

    const sendEmail = (e) =>{
        e.preventDefault()

        // if(msg.senderName!=='' && msg.senderEmail!=='' && msg.senderMsg!==''){
            emailjs.sendForm('service_lb8jr6e','template_8wp0tud',e.target,'U5jmDOhLgvzLiu8f8')
            .then(res=>console.log(res))
            .catch(err=>console.log(err))
        // }
    }

    return(
        <>
             <section className="col-12 vh-100 home-bg">
                <Navbar/>
                <div className="container-fluid contact-box"> 

                    <form className="col-12 col-md-10 col-lg-4 border rounded p-5 d-flex flex-wrap justify-content-between" ref={form} onSubmit={sendEmail}>
                        <h4 className="col-12 text-center">Contact us</h4>
                        <div className="col-12 mt-2 sendingmail">
                            <label htmlFor="senderName">Name</label>
                            <input type="text" className="rounded" name="senderName" id="senderName" onChange={handleMessageip}/>
                        </div>

                        <div className="col-12 mt-2 sendingmail">
                            <label htmlFor="senderEmail">Email</label>
                            <input type="email" className="rounded" name="senderEmail" id="senderEmail" onChange={handleMessageip}/>
                        </div>

                        <div className="col-12 mt-2 sendingmail">
                            <label htmlFor="senderMsg">Message</label>
                            <input type="text" name="senderMsg" onChange={handleMessageip}/>
                        </div>

                        <div className="col-12 mt-2 sendingmail text-center">
                            <input className="rounded" type="submit" value="Submit"/>
                        </div>
                    </form>
                </div>      
            </section>
        </>
    )
}