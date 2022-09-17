import React from "react";
export interface LogoProps {
  src: string;
}
function Logo(props: LogoProps) {
  return <img src={props.src} alt="logo" />;
}

export default Logo;