import { SvgIconComponent } from '@mui/icons-material';
import { InputAdornment, TextField } from '@mui/material';
import React, { ChangeEvent } from 'react';
import Image from "../atoms/Image"

interface FormProps{
    Img : SvgIconComponent;
    type : string;
    hidden : boolean;
    label: string;
    children : string;
    onChange : (e : ChangeEvent<HTMLInputElement>) => void;
}

const Form = (props : FormProps) => {
    return (
        <TextField
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Image Img={props.Img}/>
              </InputAdornment>
            ),
          }}
          disabled={props.hidden}
          label={props.label}
          type={props.type}
          onChange={props.onChange}
        >
          {props.children}
        </TextField>
      );
}

export default Form;