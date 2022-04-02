import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
   <svg viewBox="0 0 110.6 110.6" color="text" xmlns="http://www.w3.org/2000/svg" {...props}><image width="110" height="110"  href="/smex.png"></image></svg>
   
  );
};

export default Icon;
