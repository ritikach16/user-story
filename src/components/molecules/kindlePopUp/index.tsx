import { InputAdornment, TextField, Typography } from "@mui/material";
import React from "react";
import { popupText } from "../../../core-utils/messages";
import Buttons from "../../atoms/button";
import Icons from "../../atoms/icon";

export interface KindleProps {
    onAddEmail : () => void;
    needHelp : () => void;
}

function KindlePopUp(props: KindleProps) {
  return (
    <div>
      <Typography variant='h1'>
          {popupText}
      </Typography>
      <TextField
      placeholder=""
      InputProps={{
        startAdornment: (
          <InputAdornment position="end">
            <Icons src="downArrow" />
          </InputAdornment>
        ),
      }}
    />
    <Buttons onClick={props.onAddEmail} children="Add email" btnType="contained"/>
    <Buttons onClick={props.needHelp} children="Need help?" btnType={"text"}/>
    </div>
  );
}

export default KindlePopUp;