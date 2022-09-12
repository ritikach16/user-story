import React from "react";
import { Box, Grid } from "@mui/material";
import Buttons from "../../atoms/button";
import { btnTextBuy, btnTextReadNow, btnTextKindle } from "../../../core-utils/messages";

export interface ButtonGrpProps {
  onClick: () => void;
  
}

const  ButtonGrp = (props: ButtonGrpProps) => {
  return (
    <Box>
      <Grid container>
          <Grid item>
              <Buttons children={btnTextReadNow}
                  btnType="contained" />
          </Grid>
          <Grid item>
          <Buttons children={btnTextBuy}
                  btnType="outlined" startIcon="cartIcon"/>
          </Grid>
          <Grid item>
          <Buttons children={btnTextKindle} onClick={props.onClick} 
                  btnType="text" endIcon="rightArrow" />
          </Grid>
      </Grid>
    </Box>
  );
}

export default ButtonGrp;
