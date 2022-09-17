import { Grid, Typography } from "@mui/material";
import React from "react";

export interface WatchListProps {
  coinName: string;
  cost: number;
  time: number;
  onClick: () => void;
}

function WatchListCard(props: WatchListProps) {
  return (
    <Grid container>
      <Grid item onClick={props.onClick}>
        <Typography>{props.coinName}</Typography>
        <Typography>{props.cost}</Typography>
        <Typography>{props.time}</Typography>
      </Grid>
      <Grid item>Graph</Grid>
    </Grid>
  );
}

export default WatchListCard;