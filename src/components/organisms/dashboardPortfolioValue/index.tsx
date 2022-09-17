import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import TimeChart from "../../molecules/timeChart";

function DashboardPortfolioValue() {
  return (
    <Grid container>
      <Typography>My Portfolio value</Typography>
      <Grid item>
        <Typography>Total investments</Typography>
        <TimeChart />
      </Grid>
      <Grid item>{/*graph*/}</Grid>
      <Grid item>
        <Typography>10 coins (3 active)</Typography>
        <Box>{/* coin buttons */}</Box>
      </Grid>
    </Grid>
  );
}

export default DashboardPortfolioValue;