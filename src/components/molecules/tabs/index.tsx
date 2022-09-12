import React from "react";
import Icons from "../../atoms/icon";

interface HeaderTabProps {
  onClick: () => void;
  className?: string;
  exploreIcon : string;
}

function HeaderTab(props: HeaderTabProps) {
  return <div className={props.className} onClick={props.onClick}>Explore
  <Icons src={props.exploreIcon} />
  </div>;
}

export default HeaderTab;
