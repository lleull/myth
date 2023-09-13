import React from "react";
import {Link} from "react-router-dom"
import "./header.scss"
import { ReactComponent as Logo } from "../../assests/crown.svg"

const Header = () => (
    <div className="header">
      <Link className="Logo-container" to='./' >
          <Logo className="logo" Link to="/" />
    </Link>
      <div className="options">
        <Link className="option" to="/shop">
            Shop
        </Link>
        <Link className="option" to="/shop">
            contact
        </Link>
      </div>
    </div>
)


export default  Header