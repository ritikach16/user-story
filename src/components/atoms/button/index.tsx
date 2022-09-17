import { Button } from '@mui/material';
import React from 'react';

interface ButtonProp{
    children : string;
    onClick ?: () => void;
    className ?: string;
    btnType : 'outlined' | 'contained' | 'text';
    startIcon ?: string;
    endIcon ?: string;
}

const Buttons = (props : ButtonProp) => {
    return(
        <>
        {props.startIcon ? <img src={props.startIcon} alt="btnIcon"/> : null}
        <Button variant={props.btnType} className={props.className} onClick={props.onClick}>{props.children}</Button>
        {props.endIcon ? <img src={props.startIcon} alt="btnIcon"/> : null}
        </>
    )
}

export default Buttons;