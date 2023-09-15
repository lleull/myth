import React from "react";
import "./form-input.styles.scss"

const Form = ({ handleChange, label, ...otherProps }) => (
  <div className="group">
    <input className="form-input" onChange={handleChange} {...otherProps} />

    {
      <label
        className={`${
          otherProps.value.length ? "Shrink" : ""
        } form-input-label `}
      >
        {label}
      </label>
    }
  </div>
);


  export default Form;