import Form from "../../from-input/form-input";
import "./sigin.scss"
import React from "react";
import CustomButton from "../button-component/button-componet";
import { signInWithGoogle } from "../../assests/firebase/firebase.utils"


class Signin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit = (e) => {
   e.preventDefault();

    this.setState({ email: "", password: "" });
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2 className="title" >i already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <Form
        
            type="email"
            label="email"
            name="email"
            handleChange={this.handleChange}
            value={this.state.email}
            required
          />
          <Form
         
        
            type="password"
            name="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="password"
            required
          />
          <div className="buttons">
          <CustomButton type="submit" >Sign in</CustomButton>
          <CustomButton onClick={signInWithGoogle}   style={{background: "purle"}} isGoogleSignIn>Use Google</CustomButton>

          </div>
          
        </form>
      </div>
    );
  }
}
export default Signin;
