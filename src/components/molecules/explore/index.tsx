import { Typography } from "@mui/material";
import React, { MouseEventHandler } from "react";
import Icon from "../../atoms/icon";

export interface ExploreProps {
  iconImg: string;
  topic: string;
  onClick: MouseEventHandler<HTMLImageElement>;
}

function Explore(props: ExploreProps) {
  return (
    <div>
      <Icon src={props.iconImg}></Icon>
      <Typography onClick={props.onClick}>{props.topic}</Typography>
    </div>
  );
}

export default Explore;