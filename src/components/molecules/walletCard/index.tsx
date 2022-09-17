import { Grid, Typography } from "@mui/material";
import React from "react";
import Icons from "../../atoms/icons";

export interface WalletCardProps {
  date: string;
  coinName: string;
  buyer: string;
  type: string;
  amount: number;
  change: string;
}

function WalletCard(props: WalletCardProps) {
  return (
    <Grid container>
      <Grid item>
        <Typography>{props.date}</Typography>
        <Icons src={""} />
        <Typography>{props.coinName}</Typography>
        <Typography>{props.buyer}</Typography>
        <Typography>{props.type}</Typography>
      </Grid>
      <Grid item>
        <Typography>{props.amount}</Typography>
        <Typography>{props.change}</Typography>
      </Grid>
    </Grid>
  );
}

export default WalletCard;