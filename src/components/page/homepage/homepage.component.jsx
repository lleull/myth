import React from "react";
import "./homepage.styles.scss"
import Directory from "../../directory/directory.component";
import MenuItem from "../../menu-item/menu-item.component";

const Homepage = () => (
    <div className="homepage">
      <div className="head"><h1>world-class Ecommerce</h1></div>
       <Directory>
         <MenuItem />
       </Directory>
    </div>
)

export default Homepage;