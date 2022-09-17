import { Grid, Typography } from "@mui/material";
import React from "react";
import Buttons from "../../atoms/button";
import Icons from "../../atoms/icons";

interface PaymentDetailProps{
    cost: string;
    purchasedesc : string;
}

function PaymentDetail(props: PaymentDetailProps) {
  return (
    <Grid container>
      <Grid item>
        <Icons src={""} />
        <Typography>{props.cost}</Typography>
        <Typography>{props.purchasedesc}</Typography>
        <Buttons children="" btnType="contained"/>
        {/* Buy crypto*/}
        <Buttons children="" btnType="contained" />
        {/* Go to USD coin*/}
      </Grid>
    </Grid>
  );
}

export default PaymentDetail;