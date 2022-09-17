import { Grid, Typography } from "@mui/material";
import React from "react";
export interface CoinProps {
  src: string;
  coinName: string;
  cost: string;
}
function Coin(props: CoinProps) {
  return (
    <Grid container>
      <img src={props.src} alt="coinlogo" />
      <Typography>{props.coinName}</Typography>
      <Typography>{props.cost}</Typography>
    </Grid>
  );
}

export default Coin;