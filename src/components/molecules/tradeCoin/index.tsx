import { Grid, Typography } from "@mui/material";
import React from "react";
import Icons from "../../atoms/icons";
export interface TradeItemProps {
  src: string;
  coinName: string;
  cost: string;
  shortName: string;
  change: string;
  marketCap: string;
  watch: boolean;
}
function TradeCoin(props: TradeItemProps) {
  return (
    <Grid container>
      <Grid item>
        <img src={props.src} alt="logo" />
        <Typography>{props.coinName}</Typography>
        <Typography>{props.shortName}</Typography>
      </Grid>
      <Grid item>
        <Typography>{props.cost}</Typography>
      </Grid>
      <Grid item>{props.change}</Grid>
      <Grid item>{props.marketCap}</Grid>
      <Grid item>
        <Icons src={""} />
      </Grid>
    </Grid>
  );
}

export default TradeCoin;