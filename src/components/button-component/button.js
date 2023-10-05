import styled from "styled-components";
import css from "styled-components";

export const Customstyles =  styled.button`
 background-color: red;
    color: rgb(255, 255, 255);
    border:none;

    

    &:hover {
      background-color: rgb(180, 174, 174);
      color: black;
    }
`

export const getButtonStyles = props => {
    if (props.isGoogleSignIn) {
    return isGoogleSignin
    } 
     
    return props.inverted ? invertedButtonStyle : Customstyles
  

}

export const invertedButtonStyle = css`
   background-color: rgb(0, 0, 0);
    color: rgb(255, 255, 255);
    border:none;

    

    &:hover {
      background-color: rgb(180, 174, 174);
      color: rgb(43, 23, 23);
    }
`

export const isGoogleSignin = css`
   background-color: rgb(5, 15, 31);
    color: rgb(255, 255, 255);
    border: none;
    padding-left: 5px;
   

  
    &:hover {
      background-color: black;
      color: white;

    }
`


export const CustomButtonComponent = styled.button`
  min-width: 175px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 30px 0 35px;
  font-size: 15px;
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

        ${getButtonStyles}

  &:hover {
    background-color: rgb(44, 5, 134);
    color: black;
    border:none;
    border-radius: 10px;
  }
`


