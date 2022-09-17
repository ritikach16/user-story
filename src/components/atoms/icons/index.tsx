import React from "react";
export interface IconProps {
  src: string;
}
function Icons(props: IconProps) {
  return <img src={props.src} alt="icon" />;
}

export default Icons;