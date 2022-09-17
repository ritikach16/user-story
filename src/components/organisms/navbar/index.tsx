import { Grid } from "@mui/material";
import React from "react";
import Buttons from "../../atoms/button";
import Icons from "../../atoms/icons";

interface NavbarProps{
    navItem: string;
}

function Navbar(props : NavbarProps) {
  return (
    <Grid container>
      <Grid item>{props.navItem}</Grid>
      <Grid item>
        <Buttons children={"Sell"} btnType={"contained"} /> 
        <Buttons children={"Buy"} btnType={"contained"}  /> 
      </Grid>
      <Grid item>
          <Icons src={"user icon"} />
      </Grid>
    </Grid>
  );
}

export default Navbar;