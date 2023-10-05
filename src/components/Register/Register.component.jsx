import React from "react";

import "./register.css"

const Register = () => {
    return ( 

       <div className="conatiner">

          
            <div className="Form">
                <h1>Register </h1>
                <label>first name</label>
                <input type="text" placeholder="baker" required />
                <label>last name</label>
                <input type="text" placeholder="alison" required />
                <label>email address</label>
                <input type="email" placeholder="adsas@gmail.com" required />
                <label>phone number</label>
                <input type="text" placeholder="+(251)" required />
                <label>password</label>
                <input type="" placeholder="*******" required />
                <label>Confirm password</label>
                <input type="password" placeholder="*******" required />
                <button className="butt" type="button">Register Now</button>
            </div>
        
       </div>
)}
 
export default Register;