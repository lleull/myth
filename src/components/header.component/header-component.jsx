import React from "react";
import {Link} from "react-router-dom"
import "./header.scss"
import { ReactComponent as Logo } from "../../assests/crown.svg"
import { auth } from "../../assests/firebase/firebase.utils";
import { connect } from "react-redux";


const Header = ({currentUser}) => (
    <div className="header">
      <Link className="Logo-container" to='./' >
          <Logo className="logo" Link to="/" />
          
    </Link>
      <div className="options">
        
        

        <Link className="options" to="/shop">
            Shop
        </Link>
        <Link className="options" to="/contact">
            contact
        </Link>
       
        {
          currentUser ?
          <div className="no" onClick={() => auth.signOut()}>Sign out</div>
          :
          <Link className="option" to ="/signin">sign in</Link>
        }
      </div>
    </div>
)
const mapStateToProps = state => ({
   currentUser: state.user.currentUser
}) 

export default connect(mapStateToProps)(Header);