import { Grid } from "@mui/material";
import React from "react";
import Icons from "../../atoms/icons";

function SideNavbar() {
  return (
    <Grid container>
      <Grid item>
        <Icons src={"1"} /> 
      </Grid>
      <Grid item>
        <Icons src={"2"} /> 
      </Grid>{" "}
      <Grid item>
        <Icons src={"3"} /> 
      </Grid>{" "}
      <Grid item>
        <Icons src={"4"} /> 
      </Grid>{" "}
      <Grid item>
        <Icons src={"5"} /> 
      </Grid>{" "}
      <Grid item>
        <Icons src={"6"} /> 
      </Grid>
    </Grid>
  );
}

export default SideNavbar;