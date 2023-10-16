import React, { useState, useEffect } from "react";

import { FontH, Main, TextPara } from "./contact.style";


const Contact = () => {


 const [ name , setName] = useState('leul mekonnen')
 const [ add, setAdd] = useState('addisabeba')


 useEffect(() =>  {

 }
 )

return (
    <>
      <Main>
          <FontH>my name is : {name}</FontH>
          <FontH>my Address is : {add}</FontH>
          <TextPara><span>Name: </span>leul - mekonnen </TextPara>
      <TextPara><span>email: </span> leulmekonnen@gmail.com </TextPara>
      <input type="text" id="name"  placeholder="Say My name"/>
      <input type="submit" onClick={() => setName('bereket mekonnen')}  />
      <input type="submit" onClick={() => setAdd('jemo')}  />
    
    </Main>
  
   </>
);
}
 
export default Contact;