import React from "react";
import Signin from "../signin/signin.component";
import "./sign.scss"
import Register from "../Register/Register.component";

const SignInAndSignUp = () => (
    < div className="all">
    <div  className="sign">
        <Signin />
       
    </div>
    <div className="register">
    <Register />
    </div>
    </div>

)


export default SignInAndSignUp