import React from "react";
import {Link} from "react-router-dom"
import "./header.scss"
import { ReactComponent as Logo } from "../../assests/crown.svg"
import CartIcon from "../Carticon/cart";
import { auth } from "../../assests/firebase/firebase.utils";
import { connect } from "react-redux";
import CartDropDown from "../../cart dropdown/cart.dropdown";
import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../../redux/Cart/cart.selector";
import { SelectCurrentUser } from "../../redux/user/user.selector";



const Header = ({currentUser, hidden}) => (
    <div className="header">
      <Link className="Logo-container"  Link to="/" >
          <Logo className="logo"  />
          
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
          <div className="no" onClick={() => auth.signOut()}>SignOut</div>
          :
          <Link className="option" to ="/signin">signIn</Link>
        }
   
        
  
       <CartIcon />
     
        
       
      </div>
      {
           hidden ? null :
           <CartDropDown />

      }
      
      
    </div>
)
const mapStateToProps =  createStructuredSelector({
currentUser: SelectCurrentUser,
hidden: selectCartHidden
}) 

export default connect(mapStateToProps)(Header);