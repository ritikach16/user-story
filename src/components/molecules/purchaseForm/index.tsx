import { Grid, Typography } from "@mui/material";
import React from "react";
import Buttons from "../../atoms/button";
export interface PurchaseFormProps {
  imgSrc: string;
  price: string;
  paymentMethod: string;
  DeliveryFees: string;
  Deposit: string;
}
function PurchaseForm(props: PurchaseFormProps) {
  return (
    <Grid container>
      <Grid item>
        <Typography>You are buying</Typography>
        <Typography>{props.price}</Typography>
      </Grid>
      <Grid item>
        <Typography>{props.paymentMethod}</Typography>
        <Typography>{props.DeliveryFees}</Typography>
        <Typography>{props.Deposit}</Typography>
      </Grid>
      <Grid item>
        <Typography>Total</Typography>
        <Buttons children="BUY NOW" btnType="contained" />
      </Grid>
    </Grid>
  );
}

export default PurchaseForm;