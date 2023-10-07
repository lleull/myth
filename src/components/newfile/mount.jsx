import React from "react";
import "./main.css"
import WithData from "./with-data/with-data";

const OverMount = ({email, data, name}) => (
 

  
      <div className="Contain">
        <h1>{name}</h1>
        <h1>{email}</h1>
        Posts:
        {data.map(post => (
          <div className="Mount" key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    
)
export default WithData(OverMount, 'https://jsonplaceholder.typicode.com/posts');
