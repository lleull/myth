import React from "react";
import WithData from "./with-data/with-data";
const UserList = ({ data}) =>  (

    
      
     
         <div className="userlist">
            <h1>user List</h1>
         {
            data.map(user => (
               <div className="users"  key={user.id}>
                <h1>{user.name}</h1>
                <h2>{user.email}</h2>
               </div>
            ))
         }
         </div>
    
      )
    

export default WithData(UserList,  'https://jsonplaceholder.typicode.com/users')