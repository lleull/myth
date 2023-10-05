import React from "react";

import { CustomButtonComponent } from "./button";

const CustomButton = ({ children, ...props}) => (
  <CustomButtonComponent {...props}>
    {children}
  </CustomButtonComponent>
);

export default CustomButton;
