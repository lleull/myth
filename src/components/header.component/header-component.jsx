import React from "react";
import {Link} from "react-router-dom"
import "./header.scss"
import { ReactComponent as Logo } from "../../assests/crown.svg"
import CartIcon from "../Carticon/cart";
import { auth } from "../../assests/firebase/firebase.utils";
import { connect } from "react-redux";
import CartDropDown from "../../cart dropdown/cart.dropdown";


const Header = ({currentUser, hidden}) => (
    <div className="header">
      <Link className="Logo-container"  >
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
   
        
  
       <CartIcon />
     
        
       
      </div>
      {
           hidden ? null :
           <CartDropDown />

      }
      
      
    </div>
)
const mapStateToProps = ({user: { currentUser }, cart: {hidden}}) => ({
   currentUser,
   hidden

}) 

export default connect(mapStateToProps)(Header);