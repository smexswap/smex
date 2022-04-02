import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
       <img src="/images/smex_logo.svg" {...props} />
   
  );
};

export default Icon;
