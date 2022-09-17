import { Grid, Typography } from "@mui/material";
import React from "react";
import Buttons from "../../atoms/button";

function Footer() {
  return (
    <Grid container>
      <Grid item>
        <Typography>Dashboard</Typography>
      </Grid>
      <Grid item>
        <Typography>Careers</Typography>
      </Grid>
      <Grid item>
        <Typography>Legal&Privacy</Typography>
      </Grid>
      <Grid item>
        <Typography>@2021 Minet</Typography>
      </Grid>
      <Buttons children="English" startIcon="downArrow" btnType="outlined" />
      <Buttons children="Need Help" btnType="outlined" />
    </Grid>
  );
}

export default Footer;