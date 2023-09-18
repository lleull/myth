import React from "react";
import "./homepage.styles.scss"
import Directory from "../../directory/directory.component";
import MenuItem from "../../menu-item/menu-item.component";

import Contact from "../../contact/contact";


const Homepage = () => (
  <>
    <div className="homepage">
     
       <Directory>
         <MenuItem />
       </Directory>
       
         <Contact />
    </div>
   
    </>
)

export default Homepage;